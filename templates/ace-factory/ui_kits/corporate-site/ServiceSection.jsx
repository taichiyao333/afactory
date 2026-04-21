const VENUES = [
  { name: 'CLUB A',     url: 'http://club-a.jp.net/',      logo: '../../assets/logos/club_a_logo.png',      interior: '../../assets/venues/club_a_interior_hero.png' },
  { name: 'CLUB REIMS', url: 'http://club-reims.jp.net/',  logo: '../../assets/logos/club_reims_logo.png',  interior: '../../assets/venues/club_reims_interior.png' },
  { name: 'CLUB RAISE', url: 'http://club-raise.jp.net/',  logo: '../../assets/logos/club_raise_logo.png',  interior: '../../assets/venues/club_raise_interior.png' },
  { name: 'CLUB NILS',  url: 'http://club-nils.jp.net/',   logo: '../../assets/logos/club_nils_logo.png',   interior: '../../assets/venues/club_nils_interior.png' },
  { name: 'FUJISAKI',   url: 'http://fujisaki.jp.net/',    logo: '../../assets/logos/fujisaki_logo.png',    interior: '../../assets/venues/fujisaki_interior.png' },
  { name: 'G CLASS',    url: 'http://club-gclass.jp.net/', logo: null,                                      interior: '../../assets/venues/g_class_interior.png' },
];
window.VENUES = VENUES;

const VenueCard = ({ venue }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={venue.url} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        position: 'relative', aspectRatio: '4/3',
        background: `#111 url('${venue.interior}') center/cover`,
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: hover ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0.45)',
          transition: 'background 320ms cubic-bezier(.22,.61,.36,1)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {venue.logo ? (
            <img src={venue.logo} alt={venue.name} style={{ maxHeight: 56, maxWidth: '60%', opacity: 0.95 }} />
          ) : (
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, letterSpacing: '0.08em', color: '#fff' }}>{venue.name}</div>
          )}
        </div>
      </div>
      <div style={{ padding: '16px 0 0', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, letterSpacing: '0.1em', color: '#fff' }}>{venue.name}</div>
      </div>
    </a>
  );
};
window.VenueCard = VenueCard;

const ServiceSection = () => (
  <section id="service" style={{ background: '#000', padding: '160px 48px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeading en="Our Service" jp="私たちが提供するサービス" />
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 400, fontSize: 22, lineHeight: 1.8, letterSpacing: '0.04em', color: '#fff', margin: 0 }}>
          自然な会話や空気感を大切にしながら、<br/>上質な時間を創出する。
        </h2>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300, fontSize: 15, lineHeight: 1.9, letterSpacing: '0.04em', color: '#A0A0A0', marginTop: 32 }}>
          大阪・北新地を中心に、ナイトエンターテインメント事業を展開しています。
          この街にふさわしい、静かで上質な時間と、肩肘張らずに過ごせる心地よさを大切にしています。
          一人ひとりに寄り添いながら、訪れるたびに価値を感じていただける体験を。
        </p>
        <div style={{ marginTop: 32 }}><GhostButton href="#service-more">More</GhostButton></div>
      </div>

      <div style={{ marginTop: 120 }}>
        <div style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif", fontSize: 28,
          letterSpacing: '0.24em', color: '#fff', marginBottom: 56,
        }}>ALL&nbsp;VENUES</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {VENUES.map(v => <VenueCard key={v.name} venue={v} />)}
        </div>
      </div>
    </div>
  </section>
);
window.ServiceSection = ServiceSection;
