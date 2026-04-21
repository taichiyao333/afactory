/**
 * AccessCard — 1店舗分の所在地行
 * @prop venueName    英字店舗名 (ex. 'CLUB REIMS')
 * @prop venueReading カナ読み (ex. 'ランス')
 * @prop since        'Since 2018' 等。空なら非表示
 * @prop address      所在地
 * @prop phone        電話番号
 * @prop url          リンク先（任意、セット時は行全体がクリッカブル）
 * @prop isFirst      先頭行の上線を太く
 */
const AccessCard = ({
  venueName = 'CLUB REIMS',
  venueReading = 'ランス',
  since = 'Since 2018',
  address = '大阪市北区堂島1丁目4番20号 第2ロイヤルビル 3F',
  phone = '06-4795-0810',
  url = null,
  isFirst = false,
}) => {
  const Tag = url ? 'a' : 'div';
  return (
    <Tag
      {...(url ? { href: url, target: '_blank', rel: 'noreferrer' } : {})}
      style={{
        display: 'block', textDecoration: 'none', color: 'inherit',
        borderTop: isFirst ? '1px solid #404040' : '1px solid #2A2A2A',
        padding: '32px 0',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, flexWrap: 'wrap' }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: '#fff', letterSpacing: '0.08em' }}>{venueName}</div>
        <div style={{ fontFamily: "'Noto Serif JP', serif", fontSize: 14, color: '#A0A0A0', letterSpacing: '0.04em' }}>（{venueReading}）</div>
        {since && (
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 14, color: '#A0A0A0', letterSpacing: '0.05em', marginLeft: 'auto' }}>{since}</div>
        )}
      </div>
      <div style={{ color: '#fff', fontFamily: "'Noto Sans JP', sans-serif", fontSize: 15, lineHeight: 1.9, marginTop: 14, fontWeight: 300 }}>{address}</div>
      <div style={{ color: '#A0A0A0', fontFamily: "'Noto Sans JP', sans-serif", fontSize: 14, marginTop: 4, letterSpacing: '0.06em' }}>{phone}</div>
    </Tag>
  );
};
window.AccessCard = AccessCard;

/**
 * AccessSection
 * @prop heading   { en, jp }
 * @prop venues    AccessCardのpropsの配列
 */
const DEFAULT_ACCESS = [
  { venueName: 'CLUB A',     venueReading: 'エース',     since: 'Since 2013', address: '大阪市北区堂島１丁目３番３号 北新地西辻ビル BF', phone: '06-6452-0810', url: 'http://club-a.jp.net/' },
  { venueName: 'CLUB REIMS', venueReading: 'ランス',     since: 'Since 2018', address: '大阪市北区堂島1丁目4番20号 第2ロイヤルビル 3F', phone: '06-4795-0810', url: 'http://club-reims.jp.net/' },
  { venueName: 'CLUB RAISE', venueReading: 'レイズ',     since: 'Since 2022', address: '大阪市北区堂島1丁目2-7 パーマリィ・イン堂島 6F', phone: '06-6458-0810', url: 'http://club-raise.jp.net/' },
  { venueName: 'CLUB NILS',  venueReading: 'ニルス',     since: 'Since 2016', address: '大阪府大阪市北区曽根崎新地1-6-13 ニューセントラルビル B1F', phone: '06-6342-0810', url: 'http://club-nils.jp.net/' },
  { venueName: 'FUJISAKI',   venueReading: '藤崎',       since: '',           address: '大阪府大阪市北区堂島1-3-3 西辻ビル 2F', phone: '06-6343-0128', url: 'http://fujisaki.jp.net/' },
  { venueName: 'G CLASS',    venueReading: 'ジークラス', since: 'Since 2022', address: '大阪府大阪市北区堂島１丁目２−７ パーマリィ・イン B1F E号室', phone: '06-4256-8686', url: 'http://club-gclass.jp.net/' },
];

const AccessSection = ({
  heading = { en: 'Access', jp: '店舗アクセス' },
  venues = DEFAULT_ACCESS,
}) => (
  <section id="access" style={{ background: '#000', padding: '160px 48px' }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <SectionHeading en={heading.en} jp={heading.jp} />
      <div>
        {venues.map((v, i) => <AccessCard key={v.venueName + i} {...v} isFirst={i === 0} />)}
      </div>
    </div>
  </section>
);
window.AccessSection = AccessSection;
