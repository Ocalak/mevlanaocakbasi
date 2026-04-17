import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import UeberUns from './components/UeberUns';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <UeberUns />
      <Gallery />
      <Menu />
      <Reservation />
      <Contact />
      <Footer />
      <Cart />
      <Analytics />
    </>
  );
}
