import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Rock Poles', to: '/rock-poles' },
  { label: 'Cement Poles', to: '/cement-poles' },
  { label: 'All Products', to: '/products' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E2E5E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to="/"
          className="text-sm sm:text-base font-bold tracking-tight text-[#1C1E21] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#163A28]"
        >
          {COMPANY_CONFIG.brandName}
        </Link>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4B5563]"
        >
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#163A28] ${
                  isActive
                    ? 'text-[#163A28] border-[#163A28] font-semibold'
                    : 'border-transparent hover:text-[#1C1E21] hover:border-[#9CA3AF]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#163A28]"
          >
            Get Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#1C1E21] hover:bg-[#F1F3F5] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#163A28]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E2E5E9] bg-white">
          <nav
            aria-label="Mobile Navigation"
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EDF3EF] text-[#163A28] font-semibold'
                      : 'text-[#374151] hover:bg-[#F4F5F7]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E2E5E9]">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
