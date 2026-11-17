import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import ImageWithFallback from '../components/ImageWithFallback';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, SIZE_PRICING_OPTIONS, TESTIMONIALS } from '../data/products';
import { COMPANY_CONFIG } from '../config/company';
import { usePageMeta } from '../hooks/usePageMeta';

const WHY_CHOOSE_ITEMS = [
  {
    index: '01',
    title: 'Flat Plate Base Stability',
    detail:
      'Both our Rock Poles and Cement Poles feature dedicated flat plate bases for level ground seating, uniform load distribution, and clean vertical alignment.',
  },
  {
    index: '02',
    title: 'Three Standard Heights & Transparent Rates',
    detail:
      'Available across 7 Feet (250 per pole), 6 Feet (220 per pole), and 3 Feet (170 per pole) so you can match fence height directly to your boundary requirements.',
  },
  {
    index: '03',
    title: 'High-Density Stone & Reinforced Concrete',
    detail:
      'Quarry-dressed granite shafts and vibro-compacted steel-reinforced cement poles built to withstand seasonal moisture, agricultural runoff, and wire strain.',
  },
  {
    index: '04',
    title: 'Bulk Production & Direct Yard Dispatch',
    detail:
      'Direct manufacturing supply for farms, solar parks, industrial estates, and civil contractors with consistent batch quality and palletized loading.',
  },
];

export default function Home() {
  usePageMeta({
    title: 'Fencing Poles Manufacturers – Flat Plate Base Rock & Cement Poles',
    description:
      'Strong Poles. Reliable Protection. Long-Lasting Quality. Flat plate base Rock Poles and Cement Poles in 7 Feet (250/pole), 6 Feet (220/pole), and 3 Feet (170/pole).',
  });

  return (
    <div>
      <Hero />

      {/* Section 1: Two Main Product Category Cards (Flat Plate Base Only) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
            Core Product Divisions
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1E21] tracking-tight [text-wrap:balance]">
            Flat Plate Base Fencing Poles in Two Materials
          </h2>
          <p className="mt-3 text-base text-[#4B5563] leading-relaxed">
            Choose between natural split-granite Rock Poles and reinforced precast Cement Poles—each manufactured with flat plate bases in 7 Feet, 6 Feet, and 3 Feet heights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Category Card 1: Rock Poles */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#E2E5E9] rounded-xl overflow-hidden flex flex-col"
          >
            <Link
              to="/rock-poles"
              className="h-72 bg-[#E8F0E7] border-b border-[#DCE7DC] px-6 pt-6 flex items-end justify-center overflow-hidden"
            >
              <div className="h-full w-full max-w-[230px]">
                <ImageWithFallback
                  src="/src/assets/images/rock_pole_flat_7ft_1794811986440.jpg"
                  alt="Split granite Rock Fencing Pole with flat plate base"
                  aspectClassName="w-full h-full"
                  className="w-full h-full object-contain object-bottom transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Link>
            <div className="p-7 flex flex-col flex-1">
              <div className="text-xs font-medium text-[#6B7280] mb-2">
                Category 01 · Flat Plate Base
              </div>
              <h3 className="text-2xl font-bold text-[#1C1E21] tracking-tight mb-3">
                Rock Poles
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-5">
                Dense natural split-granite poles fitted with flat plate bases for level seating, zero-rot longevity, and long-term weathering resistance.
              </p>
              <ul className="space-y-2 text-sm text-[#374151] mb-6 tabular-nums">
                {SIZE_PRICING_OPTIONS.map((opt) => (
                  <li key={opt.heightFeet} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0" aria-hidden="true" />
                    <span>
                      {opt.heightLabel} — {opt.priceDisplay}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  to="/rock-poles"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors whitespace-nowrap"
                >
                  Explore Rock Poles
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Category Card 2: Cement Poles */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#E2E5E9] rounded-xl overflow-hidden flex flex-col"
          >
            <Link
              to="/cement-poles"
              className="h-72 bg-[#E8F0E7] border-b border-[#DCE7DC] px-6 pt-6 flex items-end justify-center overflow-hidden"
            >
              <div className="h-full w-full max-w-[230px]">
                <ImageWithFallback
                  src="/src/assets/images/cement_pole_foot_1_1794811610820.jpg"
                  alt="Precast reinforced Cement Fencing Pole with flat plate base"
                  aspectClassName="w-full h-full"
                  className="w-full h-full object-contain object-bottom transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </Link>
            <div className="p-7 flex flex-col flex-1">
              <div className="text-xs font-medium text-[#6B7280] mb-2">
                Category 02 · Flat Plate Base
              </div>
              <h3 className="text-2xl font-bold text-[#1C1E21] tracking-tight mb-3">
                Cement Poles
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-5">
                Steel-reinforced precast cement concrete poles cast with monolithic flat plate bases and pre-formed wire threading holes.
              </p>
              <ul className="space-y-2 text-sm text-[#374151] mb-6 tabular-nums">
                {SIZE_PRICING_OPTIONS.map((opt) => (
                  <li key={opt.heightFeet} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0" aria-hidden="true" />
                    <span>
                      {opt.heightLabel} — {opt.priceDisplay}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Link
                  to="/cement-poles"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors whitespace-nowrap"
                >
                  Explore Cement Poles
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Complete 6-Pole Size Lineup */}
      <section className="bg-[#EAF1E9] border-y border-[#DCE7DC] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
                Available Sizes &amp; Pricing
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1E21] tracking-tight">
                Compare 7 Feet, 6 Feet &amp; 3 Feet Flat Plate Base Poles
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#163A28] hover:text-[#1E4D35] whitespace-nowrap shrink-0"
            >
              Filter &amp; Search All Products
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1E21] tracking-tight [text-wrap:balance] mb-4">
              Built at the Yard for Decades of Ground Stability
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              {COMPANY_CONFIG.tagline} Every pole leaves our manufacturing facility inspected for straightness, reinforcement cover, and level flat plate seating.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#1C1E21] bg-white border border-[#D1D5DB] hover:border-[#1C1E21] rounded-lg transition-colors whitespace-nowrap"
            >
              Read About Our Process
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.index}
                className="bg-white border border-[#E2E5E9] rounded-xl p-6"
              >
                <div className="font-mono text-xs font-medium text-[#163A28] tabular-nums mb-2">
                  {item.index}.
                </div>
                <h3 className="text-base font-bold text-[#1C1E21] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Customer Testimonials */}
      <section className="bg-[#FAF7EF] border-t border-[#EEE8D9] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
              Customer Testimonials
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1E21] tracking-tight">
              Field Feedback from Boundary &amp; Estate Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="bg-white border border-[#EEE8D9] rounded-xl p-6 flex flex-col justify-between"
              >
                <p className="text-sm text-[#374151] leading-relaxed mb-6">
                  {item.quote}
                </p>
                <footer className="pt-4 border-t border-[#E2E5E9]">
                  <div className="text-sm font-bold text-[#1C1E21]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#6B7280] mt-0.5">
                    {item.role} · {item.projectType}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Direct Bulk Quote Callout */}
      <section className="bg-[#163A28] text-white py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight [text-wrap:balance] mb-2">
              Planning a Perimeter Fence or Bulk Order?
            </h2>
            <p className="text-sm sm:text-base text-[#D1E7DA] leading-relaxed">
              Send your required pole size (7 ft, 6 ft, or 3 ft) and quantity to receive a custom manufacturing schedule and bulk quotation.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#163A28] bg-white hover:bg-[#F1F3F5] rounded-lg transition-colors whitespace-nowrap"
            >
              Request Bulk Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
