import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_CONFIG, buildWhatsAppUrl } from '../config/company';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#14171A] text-[#D1D5DB] border-t border-[#262B31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand Summary */}
          <div className="space-y-4">
            <h2 className="text-base font-bold tracking-tight text-white">
              {COMPANY_CONFIG.brandName}
            </h2>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {COMPANY_CONFIG.tagline}
            </p>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Flat plate base Rock Poles and Cement Poles available in 7 Feet, 6 Feet, and 3 Feet sizes for agricultural and industrial perimeters.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us &amp; Bulk Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Sizes & Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Flat Plate Base Poles
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/rock-poles" className="hover:text-white transition-colors">
                  Rock Poles (7 ft, 6 ft, 3 ft)
                </Link>
              </li>
              <li>
                <Link to="/cement-poles" className="hover:text-white transition-colors">
                  Cement Poles (7 ft, 6 ft, 3 ft)
                </Link>
              </li>
              <li>
                <Link
                  to="/products/rock-pole-7-feet"
                  className="hover:text-white transition-colors"
                >
                  Rock Pole – 7 Feet (250/pole)
                </Link>
              </li>
              <li>
                <Link
                  to="/products/cement-pole-7-feet"
                  className="hover:text-white transition-colors"
                >
                  Cement Pole – 7 Feet (250/pole)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact Details</h3>
            <ul className="space-y-3 text-sm text-[#9CA3AF]">
              <li className="text-white font-medium">
                {COMPANY_CONFIG.contactPerson}
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#6EE7B7] shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={COMPANY_CONFIG.phoneHref}
                  className="hover:text-white transition-colors tabular-nums"
                >
                  {COMPANY_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle
                  className="w-4 h-4 text-[#6EE7B7] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors tabular-nums"
                >
                  WhatsApp: {COMPANY_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#6EE7B7] shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={COMPANY_CONFIG.emailHref}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#6EE7B7] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  {COMPANY_CONFIG.addressLine1}
                  <br />
                  {COMPANY_CONFIG.addressLine2}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#262B31] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#9CA3AF]">
          <p>
            © {year} {COMPANY_CONFIG.brandName}. All rights reserved.
          </p>
          <p>{COMPANY_CONFIG.businessHours}</p>
        </div>
      </div>
    </footer>
  );
}
