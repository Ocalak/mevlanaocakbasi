import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';
import SuccessView from './SuccessView';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems, isCartOpen, closeCart, checkoutStep, goToCheckout } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(28, 14, 5, 0.4)', backdropFilter: 'blur(4px)',
              zIndex: 1000,
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: '100%', maxWidth: '420px',
              background: '#fff', zIndex: 1001,
              display: 'flex', flexDirection: 'column',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)',
            }}
          >
            {/* Header */}
            {checkoutStep !== 2 && (
              <div style={{ padding: '1.5rem', borderBottom: '1px solid #E4D5B8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ShoppingBag size={20} color="#8B1A1A" />
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#1C0E05' }}>
                    {checkoutStep === 0 ? 'Warenkorb' : 'Kasse'}
                  </h2>
                  {checkoutStep === 0 && (
                    <span style={{ background: '#FDF7EE', color: '#8B1A1A', padding: '0.2rem 0.6rem', borderRadius: 999, fontSize: '0.75rem', fontWeight: 600 }}>{totalItems}</span>
                  )}
                </div>
                <button onClick={closeCart} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex' }}>
                  <X size={24} color="#1C0E05" />
                </button>
              </div>
            )}

            {/* Content Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: checkoutStep === 2 ? 0 : '1.5rem' }}>
              {checkoutStep === 0 ? (
                /* STEP 0: CART ITEMS */
                cart.length === 0 ? (
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', color: '#B8997A' }}>
                    <ShoppingBag size={48} strokeWidth={1} />
                    <p style={{ fontSize: '0.9rem' }}>Dein Warenkorb ist noch leer.</p>
                    <button 
                      onClick={closeCart}
                      style={{ background: '#8B1A1A', color: '#fff', border: 'none', padding: '0.75rem 1.5rem', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
                    >Jetzt bestellen</button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {cart.map((item) => (
                      <div key={item.name} style={{ display: 'flex', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid #FDF7EE' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, color: '#1C0E05', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{item.name}</div>
                          <div style={{ color: '#C09020', fontWeight: 700, fontSize: '0.9rem' }}>{item.price}</div>
                          
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.75rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', background: '#FDF7EE', borderRadius: 6, padding: '0.25rem' }}>
                              <button 
                                onClick={() => updateQuantity(item.name, item.quantity - 1)}
                                style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', padding: 4 }}
                              ><Minus size={14} /></button>
                              <span style={{ width: '2rem', textAlign: 'center', fontSize: '0.85rem', fontWeight: 600 }}>{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.name, item.quantity + 1)}
                                style={{ border: 'none', background: 'none', cursor: 'pointer', display: 'flex', padding: 4 }}
                              ><Plus size={14} /></button>
                            </div>
                            <button 
                              onClick={() => removeFromCart(item.name)}
                              style={{ border: 'none', background: 'none', color: '#B8997A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem' }}
                            ><Trash2 size={14} /> Entfernen</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ) : checkoutStep === 1 ? (
                /* STEP 1: CHECKOUT FORM */
                <CheckoutForm />
              ) : (
                /* STEP 2: SUCCESS VIEW */
                <SuccessView />
              )}
            </div>

            {/* Footer - Only in Step 0 */}
            {checkoutStep === 0 && cart.length > 0 && (
              <div style={{ padding: '1.5rem', background: '#FDF7EE', borderTop: '1px solid #E4D5B8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#B8997A', fontSize: '0.9rem' }}>
                  <span>Zwischensumme</span>
                  <span>{totalPrice.toFixed(2).replace('.', ',')} €</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', color: '#1C0E05', fontWeight: 700, fontSize: '1.1rem' }}>
                  <span>Gesamtsumme</span>
                  <span>{totalPrice.toFixed(2).replace('.', ',')} €</span>
                </div>
                <button
                  onClick={goToCheckout}
                  style={{
                    width: '100%', background: '#8B1A1A', color: '#fff', border: 'none',
                    padding: '1.1rem', borderRadius: 8, fontWeight: 700, fontSize: '1rem',
                    cursor: 'pointer', boxShadow: '0 4px 12px rgba(139, 26, 26, 0.25)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem'
                  }}
                >
                  Zur Kasse gehen <ArrowRight size={18} />
                </button>
                <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#B8997A', marginTop: '1rem' }}>
                  Inkl. MwSt. zzgl. Lieferkosten (falls zutreffend)
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
