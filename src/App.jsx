import { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Products = lazy(() => import('./components/Products'));
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Stats = lazy(() => import('./components/Stats'));

function App() {
  return (
    <Router>
      <div className="bg-navy-900 text-gray-100 min-h-screen font-sans">
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          <AnimatePresence mode="wait">
            <main>
              <Hero />
              <About />
              <Stats />
              <Products />
              <Services />
              <Testimonials />
              <Contact />
            </main>
          </AnimatePresence>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

const LoadingScreen = () => (
  <div className="h-screen w-full flex items-center justify-center bg-navy-900">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
    />
  </div>
);

export default App;