//import { useState } from 'react'
//import Header from "./components/Header/Header";
import Carousel from './components/Banner/Carousel';
import About from "./components/About/About";
import Imoveis from "./components/Imoveis/Imoveis";
import Testimonials from './components/Testimonials/Testimonials';  
import ContactSection from './components/Contact/Contact';
import LocationSection from './components/Location/Location';
import PartnersSection from './components/Partner/Partner';
import Footer from './components/Footer/Footer';

function App() {
  //const [count, setCount] = useState(0)

  /*
  <Header />

  */
  return (
    <>
    <Carousel />
    <About />
    <Imoveis />
    <Testimonials />
    <ContactSection />
    <LocationSection />
    <PartnersSection />
    <Footer />
    </>
  )
}

export default App
