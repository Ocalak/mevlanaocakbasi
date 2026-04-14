import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ShoppingCart } from 'lucide-react';
import { menuCategories } from '../data/menu';
import { SectionLabel, SectionTitle, Divider } from './Gallery';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find(c => c.id === active);
  const { addToCart, openCart } = useCart();

  const handleAdd = (item) => {
    addToCart(item);
    // Optional: show a small toast or just let the nav badge handle it
  };

  return (
    <section id="speisekarte" style={{ padding: '80px 5%', background: '#FDFAF5' }}>
      <SectionLabel>Speisekarte</SectionLabel>
      <SectionTitle>Unsere Spezialitäten</SectionTitle>
      <Divider />

      {/* Category tabs — GDK style pill tabs */}
      <motion.div
        initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
        viewport={{ once:true }} transition={{ duration:0.5, ease:[0.16,1,0.3,1] }}
        style={{ display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'2.5rem' }}
      >
        {menuCategories.map(cat => (
          <Tab key={cat.id} active={active===cat.id} onClick={()=>setActive(cat.id)}>{cat.label}</Tab>
        ))}
      </motion.div>

      {/* Menu grid — card-based like GDK product grid */}
      <AnimatePresence mode="wait">
        <motion.div key={active}
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
          exit={{ opacity:0, y:-10 }}
          transition={{ duration:0.32, ease:[0.16,1,0.3,1] }}
        >
          <motion.div
            variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.04 } } }}
            initial="hidden" animate="show"
            style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'1px', background:'#E4D5B8', border:'1px solid #E4D5B8', borderRadius:8, overflow:'hidden', boxShadow:'0 2px 16px rgba(28,14,5,0.06)' }}
          >
            {category.items.map(item => (
              <MenuItem 
                key={item.name+item.price} 
                item={item} 
                onAdd={() => handleAdd(item)}
              />
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function Tab({ children, active, onClick }) {
  return (
    <motion.button onClick={onClick}
      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
      animate={{
        background: active ? '#8B1A1A' : '#fff',
        color: active ? '#fff' : '#2C1608',
        borderColor: active ? '#8B1A1A' : '#E4D5B8',
        boxShadow: active ? '0 2px 8px rgba(139,26,26,0.3)' : '0 1px 4px rgba(28,14,5,0.06)',
      }}
      transition={{ duration:0.18 }}
      style={{ border:'1px solid', padding:'0.5rem 1.1rem', borderRadius:999, fontSize:'0.82rem', fontWeight:600, cursor:'pointer', fontFamily:'inherit', letterSpacing:'0.02em' }}
    >{children}</motion.button>
  );
}

function MenuItem({ item, onAdd }) {
  return (
    <motion.div
      variants={{ hidden:{ opacity:0, y:8 }, show:{ opacity:1, y:0, transition:{ duration:0.3, ease:[0.16,1,0.3,1] } } }}
      whileHover={{ background:'#FDF7EE' }}
      style={{ background:'#fff', padding:'1.15rem 1.5rem', display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', transition:'background 0.15s' }}
    >
      <div style={{ flex:1 }}>
        <div style={{ fontWeight:600, color:'#1C0E05', fontSize:'0.92rem', marginBottom:'0.2rem' }}>{item.name}</div>
        {item.desc && <div style={{ fontSize:'0.76rem', color:'#B8997A', lineHeight:1.45, paddingRight: '1rem' }}>{item.desc}</div>}
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
        <div style={{ fontWeight:700, color:'#C09020', fontSize:'0.95rem', whiteSpace:'nowrap' }}>{item.price}</div>
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
          whileHover={{ scale: 1.05, background: '#8B1A1A', color: '#fff' }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: '#FDF7EE',
            color: '#8B1A1A',
            border: '1px solid #8B1A1A',
            padding: '0.4rem 0.8rem',
            borderRadius: 6,
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            transition: 'all 0.2s'
          }}
        >
          <Plus size={14} /> Hinzufügen
        </motion.button>
      </div>
    </motion.div>
  );
}
