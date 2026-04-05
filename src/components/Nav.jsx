import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const links = [
  { href: '#ueberuns',    label: 'Über uns' },
  { href: '#speisekarte', label: 'Speisekarte' },
  { href: '#galerie',     label: 'Galerie' },
  { href: '#reservierung',label: 'Reservierung' },
  { href: '#kontakt',     label: 'Kontakt' },
];

const RED = '#8B1A1A';
const RED_DK = '#6B1212';
const DARK = '#1C0E05';
const DARK2 = '#2C1608';
const GOLD = '#C09020';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: 80, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', padding: '0 5%',
          background: '#fff',
          borderBottom: '1px solid #E4D5B8',
          boxShadow: scrolled ? '0 2px 20px rgba(28,14,5,0.08)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Logo + name */}
        <motion.a href="#home" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
          onClick={close}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', cursor: 'pointer' }}
        >
          <Logo variant="nav" />
        </motion.a>

        {/* Nav links — desktop only */}
        <ul className="nav-links-desktop" style={{ gap: '2.2rem', listStyle: 'none' }}>
          {links.map((link, i) => (
            <motion.li key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.45, ease: [0.16,1,0.3,1] }}
            >
              <motion.a href={link.href}
                whileHover={{ color: GOLD }}
                transition={{ duration: 0.15 }}
                style={{ color: DARK2, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer' }}
              >{link.label}</motion.a>
            </motion.li>
          ))}
        </ul>

        {/* CTAs — desktop only */}
        <div className="nav-ctas-desktop" style={{ gap: '0.6rem', alignItems: 'center' }}>
          <motion.a href="tel:+4920659004949"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            style={{ border: `1.5px solid ${RED}`, color: RED, textDecoration: 'none', padding: '0.55rem 1.2rem', borderRadius: 4, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer' }}
          >Anrufen</motion.a>
          <motion.a href="#reservierung"
            whileHover={{ scale: 1.04, background: RED_DK }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            style={{ background: RED, color: '#fff', textDecoration: 'none', padding: '0.6rem 1.4rem', borderRadius: 4, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer' }}
          >Reservierung</motion.a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={menuOpen}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(link => (
          <a key={link.href} href={link.href} onClick={close}>{link.label}</a>
        ))}
        <div className="mobile-ctas">
          <a href="tel:+4920659004949"
            style={{ border: `1.5px solid ${RED}`, color: RED }}
          >Anrufen</a>
          <a href="#reservierung"
            onClick={close}
            style={{ background: RED, color: '#fff' }}
          >Reservierung</a>
        </div>
      </div>
    </>
  );
}
