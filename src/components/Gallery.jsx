import { motion } from 'framer-motion';

const photos = [
  { src: '/images/g1.jpg', alt: 'Ocakbaşı Grill', span: 2 },
  { src: '/images/g2.jpg', alt: 'Frisch gegrillt', span: 1 },
  { src: '/images/g3.jpg', alt: 'Kebap Spezialitäten', span: 1 },
  { src: '/images/g4.jpg', alt: 'Meze & Vorspeisen', span: 1 },
  { src: '/images/g5.jpg', alt: 'Tischkultur', span: 1 },
];

export default function Gallery() {
  return (
    <section id="galerie" style={{ padding: '80px 5%', background: '#F5EEE0' }}>
      <SectionLabel>Galerie</SectionLabel>
      <SectionTitle>Direkt vom Ocakbaşı</SectionTitle>
      <Divider />
      <motion.div
        className="gallery-grid"
        initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.08 } } }}
      >
        {photos.map(({ src, alt, span }) => (
          <motion.div key={src}
            className={span > 1 ? `gallery-item-span-${span}` : undefined}
            variants={{ hidden:{ opacity:0, y:24, scale:0.97 }, show:{ opacity:1, y:0, scale:1, transition:{ duration:0.6, ease:[0.16,1,0.3,1] } } }}
            whileHover={{ scale: 1.02, zIndex: 2 }}
            transition={{ type:'spring', stiffness:300, damping:25 }}
            style={{ borderRadius:8, overflow:'hidden', aspectRatio: span>1?'16/9':'4/5', position:'relative', boxShadow:'0 4px 20px rgba(28,14,5,0.1)' }}
          >
            <motion.img src={src} alt={alt}
              whileHover={{ scale: 1.06 }} transition={{ duration:0.5, ease:[0.16,1,0.3,1] }}
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
            />
          </motion.div>
        ))}
      </motion.div>
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
