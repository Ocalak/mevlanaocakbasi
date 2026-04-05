import { motion } from 'framer-motion';
import { SectionLabel, SectionTitle, Divider } from './Gallery';

const itemV = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16,1,0.3,1] } } };

function FlameIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  );
}

function ChefIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
      <line x1="6" y1="17" x2="18" y2="17"/>
      <line x1="6" y1="13" x2="18" y2="13"/>
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
      <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3.02 0L12 11l.11.5a2.13 2.13 0 0 0 3.02 0h0a2.13 2.13 0 0 0 0-3z"/>
    </svg>
  );
}

const pillars = [
  {
    Icon: FlameIcon,
    accent: '#8B1A1A',
    bg: 'rgba(139,26,26,0.07)',
    title: 'Holzkohle & Feuer',
    text: 'Jedes Gericht wird direkt über glühender Holzkohle zubereitet – so entsteht das unverwechselbare Raucharoma, das unsere Gäste lieben.',
  },
  {
    Icon: LeafIcon,
    accent: '#2D6A4F',
    bg: 'rgba(45,106,79,0.07)',
    title: 'Frische Zutaten',
    text: 'Täglich frische, sorgfältig ausgewählte Zutaten sind die Grundlage unserer Küche. Keine Kompromisse bei der Qualität.',
  },
  {
    Icon: ChefIcon,
    accent: '#C09020',
    bg: 'rgba(192,144,32,0.08)',
    title: 'Tradition & Handwerk',
    text: 'Unsere Rezepte stammen direkt aus Anatolien und werden mit Leidenschaft und Erfahrung von Generation zu Generation weitergegeben.',
  },
  {
    Icon: HandshakeIcon,
    accent: '#1A4A8B',
    bg: 'rgba(26,74,139,0.07)',
    title: 'Herzliche Gastfreundschaft',
    text: 'Bei uns sind Familien, Freunde und Geschäftsleute gleichermaßen willkommen. Wir heißen jeden Gast wie einen alten Freund.',
  },
];

export default function UeberUns() {
  return (
    <section id="ueberuns" style={{ padding: '80px 5%', background: '#FDFAF5' }}>
      <SectionLabel>Über uns</SectionLabel>
      <SectionTitle>Unsere Geschichte</SectionTitle>
      <Divider />

      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '4rem' }}
      >
        {/* Text side */}
        <motion.div variants={itemV}>
          <p style={{ fontSize: '1.05rem', color: '#2C1608', lineHeight: 1.8, marginBottom: '1.4rem' }}>
            Willkommen im <strong>Mevlana Ocakbaşı</strong> – einem Ort, an dem Tradition und Leidenschaft zusammenkommen. Unser Restaurant steht für authentische anatolische Grillküche, zubereitet auf echtem Holzkohlefeuer.
          </p>
          <p style={{ fontSize: '1rem', color: '#6A4A2A', lineHeight: 1.8, marginBottom: '1.4rem' }}>
            Der Name <em>Mevlana</em> ist uns Verpflichtung: So wie der große Poet Rumi für Offenheit, Wärme und Herzlichkeit stand, so empfangen wir jeden Gast mit aufrichtigem Lächeln und einem unvergesslichen Geschmackserlebnis.
          </p>
          <p style={{ fontSize: '1rem', color: '#6A4A2A', lineHeight: 1.8 }}>
            In unserem stilvoll eingerichteten Restaurant in Duisburg-Rheinhausen laden wir Sie ein, die echten Aromen Anatoliens zu entdecken – von würzigen Adana-Spießen bis zu zarten Lammkoteletts, frischem Pide und hausgemachten Mezze.
          </p>
        </motion.div>

        {/* Video side */}
        <motion.div variants={itemV}
          style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,14,5,0.15)', aspectRatio: '4/3', position: 'relative', background: '#1C0E05' }}
        >
          <video
            autoPlay muted loop playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}
          >
            <source src="/images/about.mp4" type="video/mp4" />
          </video>
          {/* Subtle vignette */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(28,14,5,0.18) 0%, transparent 60%)', borderRadius: 12, pointerEvents: 'none' }} />
        </motion.div>
      </motion.div>

      {/* Pillars */}
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}
      >
        {pillars.map(({ Icon, accent, bg, title, text }) => (
          <motion.div key={title} variants={itemV}
            whileHover={{ y: -4, boxShadow: '0 8px 28px rgba(28,14,5,0.1)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            style={{
              background: '#fff',
              border: '1px solid #E4D5B8',
              borderRadius: 12,
              padding: '1.8rem 1.6rem',
              boxShadow: '0 2px 12px rgba(28,14,5,0.05)',
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 14,
              background: bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.1rem',
              color: accent,
            }}>
              <Icon />
            </div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C0E05', marginBottom: '0.65rem', letterSpacing: '0.01em' }}>{title}</h3>
            <p style={{ fontSize: '0.88rem', color: '#6A4A2A', lineHeight: 1.7 }}>{text}</p>
            <div style={{ marginTop: '1.1rem', width: 28, height: 2, borderRadius: 2, background: accent, opacity: 0.6 }} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
