import CircularGallery from './CircularGallery';

const items = [
  { image: '/images/g1.jpg', text: 'Ocakbaşı Grill' },
  { image: '/images/g2.jpg', text: 'Frisch gegrillt' },
  { image: '/images/g3.jpg', text: 'Kebap Spezialitäten' },
  { image: '/images/g4.jpg', text: 'Meze & Vorspeisen' },
  { image: '/images/g5.jpg', text: 'Tischkultur' },
];

export default function Gallery() {
  return (
    <section id="galerie" style={{ padding: '80px 0 0', background: '#F5EEE0' }}>
      <div style={{ padding: '0 5% 2.5rem' }}>
        <SectionLabel>Galerie</SectionLabel>
        <SectionTitle>Direkt vom Ocakbaşı</SectionTitle>
        <Divider />
      </div>
      <div style={{ width: '100%', height: '600px' }}>
        <CircularGallery
          items={items}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
        />
      </div>
    </section>
  );
}

export function SectionLabel({ children }) {
  return <p style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'#C09020', marginBottom:'0.5rem' }}>{children}</p>;
}

export function SectionTitle({ children }) {
  return <h2 style={{ fontFamily:"'Playfair Display SC','Playfair Display',Georgia,serif", fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:700, color:'#1C0E05', marginBottom:'0.8rem' }}>{children}</h2>;
}

export function Divider() {
  return <div style={{ width:40, height:3, background:'#8B1A1A', borderRadius:2, margin:'0.8rem 0 2.5rem' }} />;
}
