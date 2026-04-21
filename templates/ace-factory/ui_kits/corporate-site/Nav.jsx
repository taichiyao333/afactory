const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['About Us', 'Service', 'Interview', 'News', 'Recruit'];
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 72,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      background: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'background 320ms cubic-bezier(.22,.61,.36,1)',
      zIndex: 100, color: '#fff',
    }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, letterSpacing: '0.12em' }}>
        ACE&nbsp;FACTORY
      </div>
      <div style={{ display: 'flex', gap: 36 }}>
        {links.map(l => (
          <a key={l} href={'#' + l.replace(/\s+/g, '').toLowerCase()} style={{
            color: '#fff', textDecoration: 'none',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 14, letterSpacing: '0.08em',
          }}>{l}</a>
        ))}
      </div>
    </nav>
  );
};
window.Nav = Nav;
