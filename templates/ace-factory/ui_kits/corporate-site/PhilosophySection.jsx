const PhilosophySection = () => (
  <section id="aboutus" style={{
    background: '#000', padding: '160px 48px',
    maxWidth: 1200, margin: '0 auto',
  }}>
    <SectionHeading en="Our Philosophy" jp="私たちの理念" />
    <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{
        fontFamily: "'Noto Serif JP', serif", fontWeight: 400,
        fontSize: 28, lineHeight: 1.8, letterSpacing: '0.04em',
        color: '#fff', margin: 0,
      }}>
        人を大切にすることが価値を生み、<br/>
        その価値がまた人を惹きつけていく。
      </h2>
      <p style={{
        fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300,
        fontSize: 16, lineHeight: 1.9, letterSpacing: '0.04em',
        color: '#fff', marginTop: 40,
      }}>
        ナイトエンターテインメントを通じて、すべての人を大切にすることを基盤としています。
        お客様には心地よい時間を、キャストにはその人らしく輝ける環境を。
        その積み重ねが、新しい出会いや気づきを生み、
        人生を少し前向きに変えるきっかけになると考えています。
      </p>
      <div style={{ marginTop: 48 }}>
        <GhostButton href="#philosophy">More</GhostButton>
      </div>
    </div>
  </section>
);
window.PhilosophySection = PhilosophySection;
