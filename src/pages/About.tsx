import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ImageWithFallback from '../components/ImageWithFallback';
import { COMPANY_CONFIG } from '../config/company';
import { usePageMeta } from '../hooks/usePageMeta';

const MANUFACTURING_STEPS = [
  {
    step: '01',
    title: 'Raw Material Selection',
    description:
      'Quarried high-density granite blocks for Rock Poles and graded coarse aggregate, washed sand, ordinary Portland cement, and tested steel reinforcement bars for Cement Poles.',
  },
  {
    step: '02',
    title: 'Precision Shaping & Flat-Base Mold Casting',
    description:
      'Rock Poles are dressed and mounted onto flat plate bases across 7 ft, 6 ft, and 3 ft lengths. Cement Poles are poured into rigid steel molds with monolithic flat plate footings.',
  },
  {
    step: '03',
    title: 'Vibro-Compaction & Controlled Curing',
    description:
      'Concrete poles undergo high-frequency table vibration to eliminate air voids, followed by controlled water curing to achieve structural compressive strength and crisp edges.',
  },
  {
    step: '04',
    title: 'Dimensional Inspection & Yard Dispatch',
    description:
      'Every finished batch is checked for straightness, flat plate base levelness, surface finish, and clean wire holes before palletized loading for farm and industrial delivery.',
  },
];

export default function About() {
  usePageMeta({
    title: 'About Us – Fencing Poles Manufacturers',
    description:
      'Learn about our flat plate base Rock Pole and Cement Pole manufacturing process across 7 ft, 6 ft, and 3 ft sizes.',
  });

  return (
    <div>
      {/* Company Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
              About Our Company
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E21] tracking-tight [text-wrap:balance] mb-4">
              Dedicated Manufacturing of Flat Plate Base Rock &amp; Cement Poles
            </h1>
            <p className="text-base text-[#4B5563] leading-relaxed mb-4">
              {COMPANY_CONFIG.brandName} operates with a straightforward industrial focus: producing structurally sound boundary poles that stand firm across changing weather, heavy wire tension, and varied ground conditions.
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              We manufacture both natural split Rock Poles and reinforced precast Cement Poles with dependable flat plate bases across 7 Feet, 6 Feet, and 3 Feet heights—making selection and installation straightforward for farms, contractors, and estates.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors whitespace-nowrap"
              >
                Explore All Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-[#1C1E21] bg-white border border-[#D1D5DB] hover:border-[#1C1E21] rounded-lg transition-colors whitespace-nowrap"
              >
                Contact Factory Team
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-[#E2E5E9] aspect-[16/10] bg-[#EAECEF]">
              <ImageWithFallback
                src="/src/assets/images/about_manufacturing_yard_1794811609104.jpg"
                alt="Manufacturing yard showing cured precast cement poles and split granite rock poles stacked on pallets"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="bg-[#EAF1E9] border-y border-[#DCE7DC] py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
              Manufacturing Process
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1E21] tracking-tight">
              Four Stages from Raw Stone &amp; Steel to Finished Pole
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MANUFACTURING_STEPS.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-[#DCE7DC] rounded-xl p-6"
              >
                <div className="font-mono text-sm font-semibold text-[#163A28] tabular-nums mb-3">
                  {item.step}.
                </div>
                <h3 className="text-base font-bold text-[#1C1E21] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality, Experience & Customer Satisfaction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-[#E2E5E9] rounded-xl p-7">
            <h2 className="text-lg font-bold text-[#1C1E21] mb-3">
              Product Quality Standards
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
              Quality starts inside the pole. Concrete batches maintain consistent water-cement ratios and steel cover depth, while granite poles are vetted to avoid hairline quarry fractures.
            </p>
            <ul className="space-y-2 text-sm text-[#374151]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Consistent vertical alignment &amp; flat plate bases</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Clean, accurately spaced wire-threading holes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[#E2E5E9] rounded-xl p-7">
            <h2 className="text-lg font-bold text-[#1C1E21] mb-3">
              Experience &amp; Expertise
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
              Our yard team supports small farm boundary replacements as well as multi-kilometer industrial, orchard, and solar perimeter fencing supply schedules.
            </p>
            <ul className="space-y-2 text-sm text-[#374151]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Three practical heights: 7 ft, 6 ft, and 3 ft</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Transparent per-pole pricing &amp; bulk scheduling</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-[#E2E5E9] rounded-xl p-7">
            <h2 className="text-lg font-bold text-[#1C1E21] mb-3">
              Customer Satisfaction
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
              From clear pre-order specification sheets to careful loading and responsive WhatsApp support, we prioritize transparent timelines and dependable pole performance.
            </p>
            <ul className="space-y-2 text-sm text-[#374151]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Direct factory communication &amp; fast quotes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#163A28] shrink-0 mt-0.5" aria-hidden="true" />
                <span>Inspectable yard stock prior to dispatch</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#1C1E21] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6EE7B7] mb-2">
              Our Mission
            </p>
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              Reliable Perimeter Foundations Without Shortcuts
            </h2>
            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              To manufacture high-strength Rock Poles and Cement Poles with level flat plate bases in 7 ft, 6 ft, and 3 ft sizes, giving every landowner and contractor a long-lasting boundary free from premature leaning or rot.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#6EE7B7] mb-2">
              Our Vision
            </p>
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              Setting the Benchmark for Regional Fencing Supply
            </h2>
            <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
              To be the most trusted fencing pole manufacturer for agricultural, commercial, and infrastructure developments—recognized for consistent material integrity, timely bulk fulfillment, and honest pricing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
