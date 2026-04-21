const Footer = () => (
  <footer style={{ background: '#0D0D0D', padding: '80px 48px 40px', borderTop: '1px solid #2A2A2A' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: 48, borderBottom: '1px solid #2A2A2A' }}>
        <img src="../../assets/logos/club_a_logo.png"     style={{ height: 44, opacity: 0.9 }} />
        <img src="../../assets/logos/club_reims_logo.png" style={{ height: 26, opacity: 0.9 }} />
        <img src="../../assets/logos/club_raise_logo.png" style={{ height: 26, opacity: 0.9 }} />
        <img src="../../assets/logos/club_nils_logo.png"  style={{ height: 26, opacity: 0.9 }} />
      </div>
      <div style={{ paddingTop: 40, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div style={{ display: 'flex', gap: 32 }}>
          {['About Us', 'Service', 'Interview', 'News', 'Recruit'].map(l => (
            <a key={l} href={'#' + l.replace(/\s+/g, '').toLowerCase()} style={{
              color: '#A0A0A0', textDecoration: 'none',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 13, letterSpacing: '0.08em',
            }}>{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center', color: '#6B6B6B', fontSize: 12, letterSpacing: '0.1em' }}>
          <span>©︎ 2026 Ace Factory All Rights Reserved</span>
          <a href="#privacy" style={{ color: '#6B6B6B', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
);
window.Footer = Footer;
