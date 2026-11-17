import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export default function Hero() {
  return (
    <section className="relative bg-[#14171A] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/hero_fencing_poles_1794811607906.jpg"
          alt="Row of precision granite rock and precast concrete fencing poles along a perimeter boundary"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#111417]/90 via-[#111417]/70 to-[#111417]/35"
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="text-sm font-medium text-[#D1D5DB] tracking-wide mb-3">
            {COMPANY_CONFIG.brandName} · {COMPANY_CONFIG.tagline}
          </p>

          <h1 className="text-[clamp(2.25rem,4.2vw,3.75rem)] font-bold leading-[1.08] tracking-tight text-white [text-wrap:balance] mb-5">
            {COMPANY_CONFIG.heroHeading}
          </h1>

          <p className="text-base sm:text-lg text-[#E5E7EB] leading-relaxed max-w-xl mb-8">
            {COMPANY_CONFIG.heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Products
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-lg backdrop-blur-xs transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
