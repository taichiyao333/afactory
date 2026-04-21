import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const bilingualHeading = z.object({
  en: z.string(),
  jp: z.string(),
});

const navItem = z.object({
  en: z.string(),
  jp: z.string(),
  href: z.string(),
});

const venueMeta = z.object({
  id: z.string(),
  nameEn: z.string(),
  nameJa: z.string(),
  reading: z.string(),
  since: z.string(),
  url: z.string().url(),
  address: z.string(),
  phone: z.string(),
  logo: z.string(),
  interior: z.string(),
});

const heroSection = z.object({
  variant: z.enum(['logo', 'text']),
  logo: z.string().optional().nullable(),
  logoMaxHeight: z.number().optional(),
  title: z.string().optional(),
  subtitle: z.string(),
  image: z.string(),
  _fallback: z.boolean().optional(),
});

const philosophySection = z.object({
  heading: bilingualHeading,
  quote: z.string(),
  body: z.string(),
  viewMoreHref: z.string(),
});

const serviceSection = z.object({
  heading: bilingualHeading,
  quote: z.string(),
  body: z.string(),
  viewMoreHref: z.string(),
  allVenuesLabel: z.string(),
  venues: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
      logo: z.string().nullable(),
      interior: z.string(),
    }),
  ),
});

const messageSection = z.object({
  portrait: z.string(),
  name: z.string(),
  nameEn: z.string(),
  role: z.string(),
  quote: z.string(),
  body: z.string(),
});

const interviewSection = z.object({
  heading: bilingualHeading,
  lead: z.string(),
  motto: z.string(),
  mottoRepeat: z.number().int().positive(),
  viewAllHref: z.string(),
  _fallback_cast: z.string().optional(),
  casts: z.array(
    z.object({
      no: z.string(),
      nameJa: z.string(),
      nameEn: z.string(),
      venue: z.string(),
      image: z.string(),
      href: z.string(),
    }),
  ),
});

const recruitSection = z.object({
  heading: bilingualHeading,
  ctas: z.array(
    z.object({
      jp: z.string(),
      en: z.string(),
      href: z.string(),
    }),
  ),
});

const newsSection = z.object({
  heading: bilingualHeading,
  viewAllHref: z.string(),
  items: z.array(
    z.object({
      venue: z.string(),
      title: z.string(),
      date: z.string(),
      image: z.string(),
      href: z.string(),
    }),
  ),
});

const accessSection = z.object({
  heading: bilingualHeading,
  venues: z.array(
    z.object({
      venueName: z.string(),
      venueReading: z.string(),
      since: z.string(),
      address: z.string(),
      phone: z.string(),
      url: z.string().url(),
    }),
  ),
});

const footerSection = z.object({
  logos: z.array(
    z.object({
      src: z.string(),
      height: z.number(),
      alt: z.string(),
    }),
  ),
  links: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    }),
  ),
  copyright: z.string(),
  privacyHref: z.string(),
});

const sites = defineCollection({
  loader: glob({
    pattern: '*.json',
    base: '../../templates/ace-factory/content/sites',
  }),
  schema: z.object({
    $schema: z.string().optional(),
    _note: z.string().optional(),
    venue: venueMeta,
    nav: z.object({ items: z.array(navItem) }),
    hero: heroSection,
    philosophy: philosophySection,
    service: serviceSection,
    message: messageSection,
    interview: interviewSection,
    recruit: recruitSection,
    news: newsSection,
    access: accessSection,
    footer: footerSection,
  }),
});

export const collections = { sites };
