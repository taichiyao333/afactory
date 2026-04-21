/**
 * NewsItem — 1件分のニュース
 * @prop date    '2026 / 04 / 26' 形式
 * @prop venue   所属ベニュー (EN)
 * @prop title   日本語タイトル
 * @prop image   画像URL
 * @prop href    詳細ページリンク
 */
const NewsItem = ({
  date = '2026 / 04 / 26',
  venue = 'CLUB REIMS',
  title = '4/13(月)～17(金) 8thアニバーサリーのご案内',
  image = '../../assets/events/club_reims_8th_anniversary.png',
  href = '#',
}) => (
  <a href={href} style={{ color: '#fff', textDecoration: 'none', display: 'block' }}>
    <div style={{ aspectRatio: '4/5', background: `#0D0D0D url('${image}') center/cover` }} />
    <div style={{ padding: '18px 0 0' }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 12, letterSpacing: '0.22em', color: '#6B6B6B', textTransform: 'uppercase' }}>{venue}</div>
      <div style={{ fontFamily: "'Noto Sans JP', serif", fontSize: 15, lineHeight: 1.8, letterSpacing: '0.04em', color: '#fff', marginTop: 8, fontWeight: 300 }}>{title}</div>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 13, color: '#A0A0A0', marginTop: 10, letterSpacing: '0.08em' }}>{date}</div>
    </div>
  </a>
);
window.NewsItem = NewsItem;

/**
 * NewsSection
 * @prop heading  { en, jp }
 * @prop items    NewsItem props の配列
 * @prop viewAllHref
 */
const DEFAULT_NEWS = [
  { venue: 'CLUB REIMS', title: '4/13(月)～17(金) 8thアニバーサリーのご案内', date: '2026 / 04 / 26', image: '../../assets/events/club_reims_8th_anniversary.png', href: '#news-1' },
  { venue: 'CLUB RAISE', title: '2/2(月)3(火)、節分イベント開催',              date: '2026 / 01 / 27', image: '../../assets/events/club_raise_setsubun.png',         href: '#news-2' },
  { venue: 'CLUB A',     title: '10/30(木)～31(金) ハロウィンイベント開催のお知らせ', date: '2026 / 01 / 27', image: '../../assets/events/club_a_halloween.png',            href: '#news-3' },
];

const NewsSection = ({
  heading = { en: 'News', jp: '最新情報' },
  items = DEFAULT_NEWS,
  viewAllHref = '#all-news',
}) => (
  <section id="news" style={{ background: '#000', padding: '160px 48px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeading en={heading.en} jp={heading.jp} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {items.map((n, i) => <NewsItem key={i} {...n} />)}
      </div>
      <div style={{ marginTop: 64, textAlign: 'center' }}>
        <GhostButton href={viewAllHref}>View&nbsp;All</GhostButton>
      </div>
    </div>
  </section>
);
window.NewsSection = NewsSection;
