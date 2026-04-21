/**
 * RecruitBand — PDF-faithful:
 * Thin orange strip + two side-by-side CTAs inline. No outlined cards.
 */
const RecruitBand = () => (
  <section id="recruit" style={{ background: '#E8743C', padding: '48px 48px' }}>
    <div style={{
      maxWidth: 1200, margin: '0 auto',
      display: 'flex', alignItems: 'center', columnGap: 48, rowGap: 28,
      flexWrap: 'wrap', justifyContent: 'space-between',
    }}>
      <div style={{ color: '#fff' }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
          fontSize: 44, letterSpacing: '0.04em', lineHeight: 1,
        }}>Recruit</div>
        <div style={{
          fontFamily: "'Noto Serif JP', serif", fontSize: 13,
          letterSpacing: '0.12em', marginTop: 10, opacity: 0.9,
        }}>採用情報 · 共に成長できる仲間を募集しています</div>
      </div>
      <div style={{ display: 'flex', columnGap: 16, rowGap: 12, flexWrap: 'wrap' }}>
        {[
          { jp: '女性キャスト', en: 'Cast Recruitment' },
          { jp: '男性正社員', en: 'Full-Time Staff Recruitment' },
        ].map(r => (
          <a key={r.jp} href="#apply" style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
            padding: '12px 24px', border: '1px solid #fff',
            color: '#fff', textDecoration: 'none', borderRadius: 2,
            fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, letterSpacing: '0.1em',
            lineHeight: 1.4, whiteSpace: 'nowrap',
          }}>
            <span>{r.jp}</span>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontSize: 11, letterSpacing: '0.08em', opacity: 0.85, marginTop: 4,
            }}>{r.en}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
window.RecruitBand = RecruitBand;
