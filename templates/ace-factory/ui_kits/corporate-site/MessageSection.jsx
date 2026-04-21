/**
 * MessageSection — 代表メッセージ
 * @prop portrait  画像 URL
 * @prop name      日本語氏名
 * @prop nameEn    英字ローマ字氏名
 * @prop role      肩書き（/ の後に続く小さめテキスト）
 * @prop quote     大見出し相当の一文
 * @prop body      本文（改行は \n で可）
 */
const MessageSection = ({
  portrait = '../../assets/people/ceo_takeshi_ayata.png',
  name = '綾田 武司',
  nameEn = 'Takeshi Ayata',
  role = 'エースファクトリー代表取締役',
  quote = '感謝を基盤に、人と向き合う。',
  body = '私たちの原点は、「ありがとう」と言われる存在でありたいという想いにあります。誰かに喜んでもらえることが、自分の喜びになる。その積み重ねが、人を成長させ、場所の価値をつくっていくと考えています。',
}) => {
  const trackedEn = nameEn.split('').join(' ');
  return (
    <section id="message" style={{ background: '#0D0D0D', padding: '160px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80, alignItems: 'center' }}>
        <div style={{ aspectRatio: '3/4', background: `#111 url('${portrait}') center/cover` }} />
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, letterSpacing: '0.02em', color: '#fff', lineHeight: 1.1 }}>Message</div>
          <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 14, color: '#A0A0A0', marginTop: 10, letterSpacing: '0.04em' }}>代表メッセージ</div>

          <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid #2A2A2A' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 20, color: '#fff', letterSpacing: '0.04em' }}>{name}</div>
              <div style={{ color: '#6B6B6B', fontSize: 12 }}>/ {role}</div>
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 14, color: '#A0A0A0', letterSpacing: '0.18em', marginTop: 6 }}>
              {trackedEn}
            </div>
          </div>

          <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 400, fontSize: 26, lineHeight: 1.7, letterSpacing: '0.04em', color: '#fff', margin: '36px 0 24px' }}>
            {quote}
          </h2>
          <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.9, letterSpacing: '0.04em', color: '#A0A0A0', margin: 0, whiteSpace: 'pre-wrap' }}>
            {body}
          </p>
        </div>
      </div>
    </section>
  );
};
window.MessageSection = MessageSection;
