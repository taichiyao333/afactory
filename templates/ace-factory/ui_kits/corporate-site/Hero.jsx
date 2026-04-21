/**
 * Hero — generic, reusable.
 * Accepts a `logo` prop (ベニューロゴ or コーポレートワードマーク) to render.
 * Pass `variant="text"` + `title` to render an EN wordmark in Cormorant instead.
 *
 * Usage:
 *   <Hero variant="text" title="Ace Factory" subtitle="KITASHINCHI · OSAKA" image="..." />
 *   <Hero variant="logo" logo="../../assets/logos/club_reims_logo.png" subtitle="..." image="..." />
 */
const Hero = ({
  image = '../../assets/venues/club_a_interior_hero.png',
  variant = 'text',
  title = 'Ace Factory',
  subtitle = 'KITASHINCHI \u00B7 OSAKA',
  logo = null,
  logoMaxHeight = 120,
}) => (
  <section style={{
    position: 'relative', height: '100vh', minHeight: 640,
    background: `#000 url('${image}') center/cover no-repeat`,
  }}>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%)' }} />
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 96,
      textAlign: 'center', color: '#fff',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      {variant === 'logo' && logo ? (
        <img src={logo} alt={title} style={{ maxHeight: logoMaxHeight, maxWidth: '72%', opacity: 0.96 }} />
      ) : (
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
          fontSize: 84, letterSpacing: '0.04em', lineHeight: 1,
        }}>{title}</div>
      )}
      {subtitle && (
        <div style={{
          fontFamily: "'Noto Serif JP', serif", fontSize: 15,
          color: '#A0A0A0', letterSpacing: '0.22em', marginTop: 24,
        }}>{subtitle}</div>
      )}
    </div>
    <div style={{
      position: 'absolute', left: '50%', bottom: 28, transform: 'translateX(-50%)',
      color: '#A0A0A0', fontFamily: "'Cormorant Garamond', serif",
      fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase',
    }}>Scroll</div>
  </section>
);
window.Hero = Hero;
