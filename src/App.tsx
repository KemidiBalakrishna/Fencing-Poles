import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import RockPoles from './pages/RockPoles';
import CementPoles from './pages/CementPoles';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-3xl font-bold text-[#1C1E21] mb-3">
        Page Not Found
      </h1>
      <p className="text-base text-[#4B5563] mb-8">
        The page you are looking for does not exist. Return to the homepage or browse our fencing poles catalog.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="px-5 py-2.5 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors"
        >
          Go to Home
        </Link>
        <Link
          to="/products"
          className="px-5 py-2.5 text-sm font-semibold text-[#1C1E21] bg-white border border-[#D1D5DB] hover:border-[#1C1E21] rounded-lg transition-colors"
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#F3F6F0] text-[#1C1E21]">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/rock-poles" element={<RockPoles />} />
            <Route path="/cement-poles" element={<CementPoles />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
