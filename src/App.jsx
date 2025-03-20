import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Dogratea from "./components/DograTea.jsx";
import AboutUs from "./components/About.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Dogratea/>
      <Services />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
