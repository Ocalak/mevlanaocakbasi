import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}
      style={{ background:'#1C0E05', padding:'3rem 5% 2rem' }}
    >
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', flexWrap:'wrap', gap:'2rem', paddingBottom:'2rem', borderBottom:'1px solid rgba(255,255,255,0.08)' }}>
        {/* Brand */}
        <div>
          <Logo variant="footer" style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
        </div>

        {/* Quick info */}
        <div style={{ display:'flex', gap:'3rem', flexWrap:'wrap' }}>
          <div>
            <p style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8A6A52', marginBottom:'0.6rem' }}>Adresse</p>
            <p style={{ fontSize:'0.9rem', color:'#D4C4A8', lineHeight:1.6 }}>Atroper Str. 20<br />47226 Rheinhausen – Duisburg</p>
          </div>
          <div>
            <p style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8A6A52', marginBottom:'0.6rem' }}>Öffnungszeiten</p>
            <p style={{ fontSize:'0.9rem', color:'#D4C4A8', lineHeight:1.6 }}>Täglich: 08:00 – 23:00 Uhr</p>
          </div>
          <div>
            <p style={{ fontSize:'0.7rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8A6A52', marginBottom:'0.6rem' }}>Telefon</p>
            <a href="tel:+4920659004949" style={{ fontSize:'0.9rem', color:'#C09020', textDecoration:'none', fontWeight:600 }}>02065 / 9004949</a>
          </div>
        </div>
      </div>

      <p style={{ marginTop:'1.5rem', textAlign:'center', color:'#3D1E12', fontSize:'0.78rem' }}>
        © 2025 Mevlana Ocakbaşı · Alle Rechte vorbehalten
      </p>
    </motion.footer>
  );
}
