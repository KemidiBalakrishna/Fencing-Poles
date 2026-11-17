import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, getProductBySlug } from '../data/products';
import { buildWhatsAppUrl } from '../config/company';
import ImageWithFallback from '../components/ImageWithFallback';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ProductDetails() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = slug ? getProductBySlug(slug) : undefined;

  usePageMeta({
    title: product
      ? `${product.name} – Fencing Poles Manufacturers`
      : 'Product Not Found – Fencing Poles Manufacturers',
    description: product
      ? `${product.name} (${product.price}): ${product.shortDescription}`
      : 'The requested fencing pole model could not be found.',
  });

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1C1E21] mb-3">
          Product Not Found
        </h1>
        <p className="text-base text-[#4B5563] mb-8">
          The fencing pole model you requested does not exist or may have moved. Browse our complete Rock Poles and Cement Poles lineup below.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back to All Products
        </Link>
      </div>
    );
  }

  const sameCategorySizes = PRODUCTS.filter(
    (p) => p.category === product.category
  );

  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 text-xs sm:text-sm text-[#6B7280] flex flex-wrap items-center gap-2"
      >
        <Link to="/" className="hover:text-[#1C1E21] transition-colors">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link to="/products" className="hover:text-[#1C1E21] transition-colors">
          Products
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          to={`/${product.categorySlug}`}
          className="hover:text-[#1C1E21] transition-colors"
        >
          {product.category}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-[#1C1E21] font-medium">{product.name}</span>
      </nav>

      {/* Main Product Showcase & Contiguous Enquiry Module */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left: Proportional Height Image Stage */}
        <div className="lg:col-span-6 lg:sticky lg:top-24">
          <div className="bg-[#EAECEF] border border-[#E2E5E9] rounded-xl h-[420px] sm:h-[480px] px-8 pt-10 flex items-end justify-center relative overflow-hidden">
            <div className="absolute top-4 left-4 text-xs font-medium text-[#4B5563]">
              {product.baseType}
            </div>
            <div className="absolute top-4 right-4 font-mono text-xs font-semibold text-[#163A28] tabular-nums">
              Height Scale: {product.heightLabel}
            </div>

            <div
              style={{ height: `${product.sizeScalePercent}%` }}
              className="w-full max-w-[300px] transition-all duration-300"
            >
              <ImageWithFallback
                src={product.image}
                alt={product.imageAlt}
                fallbackLabel={product.name}
                aspectClassName="w-full h-full rounded-t-md"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Interactive Size Selector (7 ft, 6 ft, 3 ft) */}
          <div className="mt-5 bg-white border border-[#E2E5E9] rounded-xl p-4">
            <div className="text-xs font-semibold text-[#4B5563] mb-3">
              Available Sizes &amp; Pricing ({product.category})
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {sameCategorySizes.map((sizeOption) => {
                const isCurrent = sizeOption.id === product.id;
                return (
                  <button
                    key={sizeOption.id}
                    type="button"
                    onClick={() => navigate(`/products/${sizeOption.slug}`)}
                    className={`p-3 rounded-lg border text-left transition-colors ${
                      isCurrent
                        ? 'border-[#163A28] bg-[#EDF3EF] text-[#163A28]'
                        : 'border-[#E2E5E9] hover:border-[#9CA3AF] text-[#374151]'
                    }`}
                  >
                    <div className="text-sm font-bold tabular-nums">
                      {sizeOption.heightLabel}
                    </div>
                    <div className="text-xs tabular-nums mt-0.5">
                      {sizeOption.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Product Info, Flat Plate Base Identification, Specs & WhatsApp Enquiry */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#163A28] uppercase tracking-wider mb-2">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{product.baseType}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1E21] tracking-tight mb-3">
              {product.name}
            </h1>

            <p className="text-xl font-bold text-[#163A28] tabular-nums mb-4">
              {product.price}
            </p>

            <p className="text-base text-[#4B5563] leading-relaxed">
              {product.fullDescription}
            </p>
          </div>

          {/* Flat Plate Base Details Box */}
          <div className="bg-[#F1F3F5] border border-[#E2E5E9] rounded-xl p-5">
            <h2 className="text-sm font-bold text-[#1C1E21] mb-1.5">
              {product.baseType} Construction
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-3">
              {product.baseSummary}
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-[#163A28]">
              <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Recommended Application: {product.recommendedUse}</span>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>

            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#1C1E21] bg-white border border-[#D1D5DB] hover:border-[#1C1E21] rounded-lg transition-colors whitespace-nowrap"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              Request Bulk Quote
            </Link>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-white border border-[#E2E5E9] rounded-xl overflow-hidden">
            <div className="px-5 py-3.5 bg-[#F8F9FA] border-b border-[#E2E5E9]">
              <h2 className="text-sm font-bold text-[#1C1E21]">
                Product Specifications
              </h2>
            </div>
            <dl className="divide-y divide-[#ECEEF1] text-sm">
              {product.specifications.map((spec) => (
                <div
                  key={spec.label}
                  className="px-5 py-3 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4"
                >
                  <dt className="sm:col-span-5 text-[#6B7280] font-medium">
                    {spec.label}
                  </dt>
                  <dd className="sm:col-span-7 text-[#1C1E21] font-medium tabular-nums">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
