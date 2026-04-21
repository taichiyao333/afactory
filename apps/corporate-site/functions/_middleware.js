/**
 * Ace Factory — global Basic Auth middleware (Cloudflare Pages Functions)
 *
 * Applies HTTP Basic authentication to every request served by this Pages
 * project. Credentials are injected via environment variables configured
 * in the Cloudflare Pages dashboard; no secrets live in this file.
 *
 * Behaviour:
 * - If BASIC_AUTH_USER or BASIC_AUTH_PASS is unset/empty, every request
 *   receives a 503 response (fail-closed). This prevents accidental
 *   public exposure from a misconfigured deployment.
 * - If the Authorization header is missing or malformed, returns 401 with
 *   a WWW-Authenticate header so browsers show the native credential
 *   dialog.
 * - Username and password are compared in constant time to neutralise
 *   timing side-channels.
 * - To disable auth and publish the site publicly, delete this file and
 *   redeploy. Removing the env vars alone keeps the site locked (503).
 */

const encoder = new TextEncoder();

/**
 * Constant-time equality check for two strings. Runs in time proportional
 * to the longer input regardless of where (or whether) a byte mismatch
 * occurs, so an attacker cannot learn prefix matches from response timing.
 */
function timingSafeEqual(a, b) {
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);
  const maxLen = Math.max(aBytes.byteLength, bBytes.byteLength);
  // Fold the length difference into the accumulator so mismatched lengths
  // can never compare equal while still performing the full byte loop.
  let diff = aBytes.byteLength ^ bBytes.byteLength;
  for (let i = 0; i < maxLen; i++) {
    const av = i < aBytes.byteLength ? aBytes[i] : 0;
    const bv = i < bBytes.byteLength ? bBytes[i] : 0;
    diff |= av ^ bv;
  }
  return diff === 0;
}

function challenge() {
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Ace Factory", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function misconfigured() {
  return new Response(
    'Site not configured: BASIC_AUTH_USER and BASIC_AUTH_PASS must be set in Cloudflare Pages environment variables.',
    {
      status: 503,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    },
  );
}

export async function onRequest(context) {
  const { request, env, next } = context;

  const expectedUser = env.BASIC_AUTH_USER;
  const expectedPass = env.BASIC_AUTH_PASS;

  if (!expectedUser || !expectedPass) {
    return misconfigured();
  }

  const authHeader = request.headers.get('Authorization') || '';
  if (!authHeader.startsWith('Basic ')) {
    return challenge();
  }

  let decoded;
  try {
    decoded = atob(authHeader.slice(6).trim());
  } catch {
    return challenge();
  }

  const colonIdx = decoded.indexOf(':');
  if (colonIdx === -1) {
    return challenge();
  }
  const providedUser = decoded.slice(0, colonIdx);
  const providedPass = decoded.slice(colonIdx + 1);

  // Always compare BOTH fields, even if the first already failed, to keep
  // response time independent of which field is wrong.
  const userOk = timingSafeEqual(providedUser, expectedUser);
  const passOk = timingSafeEqual(providedPass, expectedPass);

  if (userOk && passOk) {
    return next();
  }
  return challenge();
}
