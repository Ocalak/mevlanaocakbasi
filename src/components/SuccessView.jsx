import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function SuccessView() {
  const { closeCart } = useCart();

  return (
    <div style={{ 
      height: '100%', display: 'flex', flexDirection: 'column', 
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '2rem'
    }}>
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 12, stiffness: 200 }}
        style={{ marginBottom: '2rem' }}
      >
        <div style={{ 
          width: '100px', height: '100px', borderRadius: '50%', 
          background: '#F0FFF4', border: '2px solid #38A169',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#38A169'
        }}>
          <CheckCircle2 size={60} strokeWidth={1.5} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1C0E05', marginBottom: '1rem' }}>Vielen Dank!</h2>
        <p style={{ color: '#B8997A', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          Deine Bestellung ist bei uns eingegangen und wird sofort in der Küche zubereitet. 
          Wir freuen uns auf deinen Besuch!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
          <div style={{ 
            background: '#FDF7EE', padding: '1.5rem', borderRadius: 12, 
            border: '1px dashed #E4D5B8', textAlign: 'left'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#B8997A', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Bestell-Details</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: '#1C0E05' }}>Geschätzte Zeit:</span>
              <span style={{ fontSize: '0.9rem', color: '#8B1A1A', fontWeight: 700 }}>25-35 Min.</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.9rem', color: '#1C0E05' }}>Bestellnummer:</span>
              <span style={{ fontSize: '0.9rem', color: '#1C0E05', fontWeight: 600 }}>#MO-{(Math.random() * 10000).toFixed(0)}</span>
            </div>
          </div>

          <button
            onClick={closeCart}
            style={{
              width: '100%', background: '#1C0E05', color: '#fff', border: 'none',
              padding: '1.1rem', borderRadius: 8, fontWeight: 700, fontSize: '1rem',
              cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem',
              marginTop: '1.5rem'
            }}
          >
            Zurück zur Startseite <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
