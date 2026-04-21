/**
 * SectionHeading
 * @prop en       英字大見出し (Cormorant)
 * @prop jp       日本語サブ見出し (Noto Serif JP)
 * @prop align    'center' | 'left'
 */
const SectionHeading = ({ en = 'Section', jp = '', align = 'center' }) => (
  <div style={{ textAlign: align, marginBottom: 56 }}>
    <div style={{
      fontFamily: "'Cormorant Garamond', serif", fontWeight: 400,
      fontSize: 56, lineHeight: 1.1, letterSpacing: '0.02em', color: '#fff',
    }}>{en}</div>
    {jp && (
      <div style={{
        fontFamily: "'Noto Serif JP', serif", fontWeight: 400,
        fontSize: 15, letterSpacing: '0.04em', color: '#A0A0A0', marginTop: 16,
      }}>{jp}</div>
    )}
  </div>
);
window.SectionHeading = SectionHeading;

const GhostButton = ({ children, onClick, href }) => {
  const [hover, setHover] = React.useState(false);
  const props = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    onClick,
    style: {
      display: 'inline-block',
      padding: '14px 38px', borderRadius: 2,
      border: '1px solid #fff', color: '#fff',
      background: hover ? 'rgba(255,255,255,0.1)' : 'transparent',
      fontFamily: "'Noto Sans JP', sans-serif", fontSize: 13, letterSpacing: '0.14em',
      textDecoration: 'none', cursor: 'pointer',
      transition: 'background 320ms cubic-bezier(.22,.61,.36,1)',
    },
  };
  return href ? <a href={href} {...props}>{children}</a> : <button {...props}>{children}</button>;
};
window.GhostButton = GhostButton;

const PrimaryButton = ({ children, href, onClick }) => {
  const [hover, setHover] = React.useState(false);
  const props = {
    onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false),
    onClick,
    style: {
      display: 'inline-block',
      padding: '16px 40px', borderRadius: 2, border: 0,
      background: hover ? '#D46329' : '#E8743C', color: '#fff',
      fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, letterSpacing: '0.12em',
      textDecoration: 'none', cursor: 'pointer',
      transition: 'background 320ms cubic-bezier(.22,.61,.36,1)',
    },
  };
  return href ? <a href={href} {...props}>{children}</a> : <button {...props}>{children}</button>;
};
window.PrimaryButton = PrimaryButton;
