/**
 * InterviewCard — 1名分のキャストカード
 * @prop no       '01' 等の通番
 * @prop image    画像URL
 * @prop venue    所属ベニュー (EN, ex. 'CLUB REIMS')
 * @prop nameJa   日本語名
 * @prop nameEn   英字ローマ字
 * @prop href     詳細ページリンク
 */
const InterviewCard = ({
  no = '',
  image = '../../assets/people/cast_noa.png',
  venue = 'CLUB REIMS',
  nameJa = '進撃のノア',
  nameEn = 'Shingeki no Noa',
  href = '#',
}) => {
  const trackedEn = nameEn.split('').join(' ');
  return (
    <a href={href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ position: 'relative', aspectRatio: '3/4', background: `#0D0D0D url('${image}') center/cover`, filter: 'grayscale(0.1) brightness(0.95)', overflow: 'hidden' }}>
        {no && (
          <div style={{ position: 'absolute', top: 14, left: 16, fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#fff', letterSpacing: '0.04em', opacity: 0.9 }}>{no}</div>
        )}
      </div>
      <div style={{ padding: '16px 0 0' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 11, letterSpacing: '0.22em', color: '#6B6B6B', textTransform: 'uppercase' }}>{venue}</div>
        <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 16, color: '#fff', marginTop: 6, letterSpacing: '0.04em' }}>{nameJa}</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 12, letterSpacing: '0.1em', color: '#A0A0A0', marginTop: 4 }}>{trackedEn}</div>
      </div>
    </a>
  );
};
window.InterviewCard = InterviewCard;

/**
 * InterviewSection
 * @prop heading   見出しprops { en, jp }
 * @prop lead      リード文
 * @prop motto     縦書きモットー（右側に繰り返し表示）
 * @prop casts     InterviewCardに渡すpropsの配列
 * @prop viewAllHref  View All リンク先
 */
const DEFAULT_CASTS = [
  { no: '01', nameJa: '進撃のノア', nameEn: 'Shingeki no Noa', venue: 'CLUB REIMS' },
  { no: '02', nameJa: '進撃のノア', nameEn: 'Shingeki no Noa', venue: 'CLUB REIMS' },
  { no: '03', nameJa: '進撃のノア', nameEn: 'Shingeki no Noa', venue: 'CLUB REIMS' },
  { no: '04', nameJa: '進撃のノア', nameEn: 'Shingeki no Noa', venue: 'CLUB REIMS' },
  { no: '05', nameJa: '進撃のノア', nameEn: 'Shingeki no Noa', venue: 'CLUB REIMS' },
  { no: '06', nameJa: '進撃のノア', nameEn: 'Shingeki no Noa', venue: 'CLUB REIMS' },
];

const InterviewSection = ({
  heading = { en: 'Interview', jp: 'エースファクトリーの仲間たち' },
  lead = '第一線で活躍するキャストが集まるこの場所には、同じ志を持ち、高め合える仲間がいます。一人では辿り着けない景色も、仲間となら目指せる。この場所で、あなた自身の可能性を広げてみませんか。',
  motto = '自分でいられる場所。オンリーワンの。',
  mottoRepeat = 4,
  casts = DEFAULT_CASTS,
  viewAllHref = '#interviews',
}) => (
  <section id="interview" style={{ background: '#000', padding: '160px 48px', position: 'relative', overflow: 'hidden' }}>
    {/* PDF-faithful: right-side only, same motto repeated vertically */}
    <div aria-hidden style={{
      position: 'absolute', right: 24, top: 120, bottom: 80,
      writingMode: 'vertical-rl', textOrientation: 'upright',
      fontFamily: "'Noto Serif JP', serif", fontWeight: 300,
      fontSize: 15, letterSpacing: '0.7em',
      color: 'rgba(255,255,255,0.7)',
      userSelect: 'none', pointerEvents: 'none',
      whiteSpace: 'nowrap',
    }}>
      {Array.from({ length: mottoRepeat }).map((_, i) => motto).join('')}
    </div>

    <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
      <SectionHeading en={heading.en} jp={heading.jp} align="left" />
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.9, letterSpacing: '0.04em', color: '#A0A0A0', maxWidth: 640, margin: '0 0 64px' }}>
        {lead}
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
        {casts.map((c, i) => <InterviewCard key={i} {...c} />)}
      </div>
      <div style={{ marginTop: 64, textAlign: 'center' }}>
        <GhostButton href={viewAllHref}>View&nbsp;All</GhostButton>
      </div>
    </div>
  </section>
);
window.InterviewSection = InterviewSection;
