import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionLabel, SectionTitle, Divider } from './Gallery';

const RED = '#8B1A1A';
const RED_DK = '#6B1212';
const GOLD = '#C09020';

const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  border: '1px solid #E4D5B8',
  borderRadius: 6,
  fontSize: '0.92rem',
  color: '#1C0E05',
  background: '#fff',
  fontFamily: 'inherit',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#8A6A4A',
  marginBottom: '0.4rem',
};

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', guests: '2', date: '', time: '19:00', notes: '' });
  const [sent, setSent] = useState(false);

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }));

  function handleSubmit(e) {
    e.preventDefault();
    const body = `Reservierungsanfrage%0A%0AName: ${encodeURIComponent(form.name)}%0ATelefon: ${encodeURIComponent(form.phone)}%0AGäste: ${form.guests}%0ADatum: ${form.date}%0AUhrzeit: ${form.time}%0AAnmerkungen: ${encodeURIComponent(form.notes)}`;
    window.location.href = `mailto:info@mevlanaocakbasi.com?subject=Tischreservierung&body=${body}`;
    setSent(true);
  }

  return (
    <section id="reservierung" style={{ padding: '80px 5%', background: '#F5EEE0' }}>
      <SectionLabel>Tisch reservieren</SectionLabel>
      <SectionTitle>Reservierung</SectionTitle>
      <Divider />

      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'start' }}
      >
        {/* Info card */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16,1,0.3,1] } } }}
          style={{ background: RED, borderRadius: 12, padding: '2.4rem 2rem', color: '#fff' }}
        >
          <h3 style={{ fontFamily: "'Playfair Display SC','Playfair Display',Georgia,serif", fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
            Wir freuen uns auf Sie
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '2rem' }}>
            Reservieren Sie Ihren Tisch für ein unvergessliches Ocakbaşı-Erlebnis. Für Gruppen ab 10 Personen rufen Sie uns bitte direkt an.
          </p>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <InfoRow label="Adresse" value="Atroper Str. 20, 47226 Duisburg" />
            <InfoRow label="Telefon" value="02065 / 9004949" href="tel:+4920659004949" />
            <InfoRow label="Öffnungszeiten" value="Täglich 08:00 – 23:00 Uhr" />
          </div>

          <motion.a
            href="tel:+4920659004949"
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.2)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            style={{
              display: 'inline-block', marginTop: '2rem',
              border: '1.5px solid rgba(255,255,255,0.7)', color: '#fff',
              textDecoration: 'none', padding: '0.75rem 1.6rem',
              borderRadius: 6, fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer',
            }}
          >
            Jetzt anrufen
          </motion.a>
        </motion.div>

        {/* Form card */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16,1,0.3,1] } } }}
          style={{ background: '#fff', border: '1px solid #E4D5B8', borderRadius: 12, padding: '2.4rem 2rem', boxShadow: '0 4px 24px rgba(28,14,5,0.07)' }}
        >
          {sent ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display SC',Georgia,serif", fontSize: '1.2rem', color: RED, marginBottom: '0.6rem' }}>Anfrage gesendet!</h3>
              <p style={{ color: '#6A4A2A', fontSize: '0.92rem' }}>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
              <button onClick={() => setSent(false)} style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: GOLD, cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem', fontFamily: 'inherit' }}>Neue Anfrage</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <h3 style={{ fontFamily: "'Playfair Display SC','Playfair Display',Georgia,serif", fontSize: '1.1rem', fontWeight: 700, color: '#1C0E05', marginBottom: '0.2rem' }}>
                Tisch anfragen
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input required style={inputStyle} placeholder="Ihr Name" value={form.name} onChange={set('name')}
                    onFocus={e => e.target.style.borderColor = GOLD}
                    onBlur={e => e.target.style.borderColor = '#E4D5B8'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Telefon *</label>
                  <input required style={inputStyle} placeholder="0123 456789" value={form.phone} onChange={set('phone')} type="tel"
                    onFocus={e => e.target.style.borderColor = GOLD}
                    onBlur={e => e.target.style.borderColor = '#E4D5B8'}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Personen *</label>
                  <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.guests} onChange={set('guests')}>
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Datum *</label>
                  <input required style={inputStyle} type="date" value={form.date} onChange={set('date')}
                    min={new Date().toISOString().split('T')[0]}
                    onFocus={e => e.target.style.borderColor = GOLD}
                    onBlur={e => e.target.style.borderColor = '#E4D5B8'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Uhrzeit *</label>
                  <select required style={{ ...inputStyle, cursor: 'pointer' }} value={form.time} onChange={set('time')}>
                    {['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00'].map(t => (
                      <option key={t} value={t}>{t} Uhr</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Anmerkungen</label>
                <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} placeholder="Besondere Wünsche, Allergien..." value={form.notes} onChange={set('notes')}
                  onFocus={e => e.target.style.borderColor = GOLD}
                  onBlur={e => e.target.style.borderColor = '#E4D5B8'}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, background: RED_DK }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.18 }}
                style={{ background: RED, color: '#fff', border: 'none', padding: '0.9rem', borderRadius: 6, fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Reservierung anfragen
              </motion.button>
              <p style={{ fontSize: '0.73rem', color: '#B8997A', textAlign: 'center' }}>
                Sie erhalten eine Bestätigung per Telefon oder E-Mail.
              </p>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}

function InfoRow({ label, value, href }) {
  return (
    <div>
      <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 3 }}>{label}</div>
      {href
        ? <a href={href} style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, textDecoration: 'none' }}>{value}</a>
        : <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500 }}>{value}</div>
      }
    </div>
  );
}
