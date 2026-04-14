import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, CreditCard, Banknote, Navigation2, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutForm() {
  const { totalPrice, resetCheckout, goToSuccess, clearCart } = useCart();
  const [method, setMethod] = useState('card');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call/Stripe session creation
    await new Promise(r => setTimeout(r, 1500));
    
    setLoading(false);
    clearCart();
    goToSuccess();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button 
          onClick={resetCheckout}
          style={{ 
            background: 'none', border: 'none', color: '#B8997A', 
            fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '0.25rem', padding: 0,
            marginBottom: '1rem'
          }}
        >
          <ChevronLeft size={16} /> Zurück zum Warenkorb
        </button>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1C0E05', margin: 0 }}>Liefer- & Zahlungsdetails</h3>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
        <div style={inputGroupStyle}>
          <label style={labelStyle}>Vollständiger Name</label>
          <input 
            type="text" name="name" required 
            placeholder="John Doe" style={inputStyle} 
            value={formData.name} onChange={handleChange}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>E-Mail</label>
            <input 
              type="email" name="email" required 
              placeholder="john@example.com" style={inputStyle} 
              value={formData.email} onChange={handleChange}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Telefon</label>
            <input 
              type="tel" name="phone" required 
              placeholder="+49 123 456789" style={inputStyle} 
              value={formData.phone} onChange={handleChange}
            />
          </div>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Lieferadresse / Tischnummer</label>
          <div style={{ position: 'relative' }}>
            <Navigation2 size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#B8997A' }} />
            <input 
              type="text" name="address" required 
              placeholder="Straße, Hausnr. oder Tischnummer" 
              style={{ ...inputStyle, paddingLeft: '2.5rem' }} 
              value={formData.address} onChange={handleChange}
            />
          </div>
        </div>

        <div style={inputGroupStyle}>
          <label style={labelStyle}>Anmerkungen (Optional)</label>
          <textarea 
            name="notes" rows={2} 
            placeholder="z.B. Ohne Zwiebeln, Klingel defekt..." 
            style={{ ...inputStyle, resize: 'none' }} 
            value={formData.notes} onChange={handleChange}
          />
        </div>

        <div style={{ margin: '0.5rem 0' }}>
          <label style={labelStyle}>Zahlungsart</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '0.5rem' }}>
            <PaymentTab 
              active={method === 'card'} 
              onClick={() => setMethod('card')}
              icon={<CreditCard size={18} />}
              label="Karte / Online"
            />
            <PaymentTab 
              active={method === 'cash'} 
              onClick={() => setMethod('cash')}
              icon={<Banknote size={18} />}
              label="Barzahlung"
            />
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #E4D5B8' }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', background: '#8B1A1A', color: '#fff', border: 'none',
              padding: '1.1rem', borderRadius: 8, fontWeight: 700, fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1,
              boxShadow: '0 4px 12px rgba(139, 26, 26, 0.25)',
              display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem'
            }}
          >
            {loading ? 'Verarbeitung...' : `Kostenpflichtig bestellen (${totalPrice.toFixed(2).replace('.', ',')} €)`}
          </button>
        </div>
      </form>
    </div>
  );
}

function PaymentTab({ active, onClick, icon, label }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        padding: '0.75rem', borderRadius: 8, cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        border: `2px solid ${active ? '#8B1A1A' : '#FDF7EE'}`,
        background: active ? '#fff' : '#FDF7EE',
        color: active ? '#8B1A1A' : '#B8997A',
        transition: 'all 0.2s'
      }}
    >
      {icon}
      <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>{label}</span>
      {active && <Check size={14} style={{ marginLeft: 'auto' }} />}
    </motion.div>
  );
}

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.35rem'
};

const labelStyle = {
  fontSize: '0.75rem',
  fontWeight: 700,
  color: '#B8997A',
  textTransform: 'uppercase',
  letterSpacing: '0.04em'
};

const inputStyle = {
  padding: '0.85rem',
  borderRadius: 8,
  border: '1.5px solid #FDF7EE',
  background: '#FDF7EE',
  fontSize: '0.9rem',
  color: '#1C0E05',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'border-color 0.2s',
  '&:focus': {
    borderColor: '#E4D5B8'
  }
};
