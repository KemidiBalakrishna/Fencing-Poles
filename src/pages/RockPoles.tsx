import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROCK_POLES, SIZE_PRICING_OPTIONS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { usePageMeta } from '../hooks/usePageMeta';

export default function RockPoles() {
  usePageMeta({
    title: 'Rock Poles – Flat Plate Base Granite Poles (7 ft, 6 ft, 3 ft)',
    description:
      'Explore flat plate base Rock Poles in 7 Feet (250/pole), 6 Feet (220/pole), and 3 Feet (170/pole) for long-lasting boundary fencing.',
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Category Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 pb-8 border-b border-[#E2E5E9]">
        <div className="lg:col-span-8">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
            Category 01 · Natural Split Granite · Flat Plate Base
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E21] tracking-tight mb-3">
            Rock Poles
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-2xl">
            Dressed from dense natural quarry granite with flat plate bases for stable ground seating. Available in three standard heights—7 Feet, 6 Feet, and 3 Feet—with zero-rot durability.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link
            to="/contact?product=Rock%20Pole%20%E2%80%93%207%20Feet"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors whitespace-nowrap"
          >
            Request Rock Poles Quote
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Size & Price Summary Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {SIZE_PRICING_OPTIONS.map((opt) => (
          <div
            key={opt.heightFeet}
            className="bg-white border border-[#E2E5E9] rounded-xl p-5 flex items-center justify-between"
          >
            <div>
              <div className="text-xs font-mono font-medium text-[#6B7280]">
                Flat Plate Base
              </div>
              <h2 className="text-lg font-bold text-[#1C1E21] tabular-nums">
                {opt.heightLabel}
              </h2>
            </div>
            <div className="text-base font-bold text-[#163A28] tabular-nums">
              {opt.priceDisplay}
            </div>
          </div>
        ))}
      </div>

      {/* 3 Rock Pole Size Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {ROCK_POLES.map((product) => (
          <ProductCard key={product.id} product={product} showExtendedSpecs />
        ))}
      </div>
    </div>
  );
}
