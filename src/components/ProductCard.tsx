import { Link } from 'react-router-dom';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { Product } from '../data/products';
import { buildWhatsAppUrl } from '../config/company';
import ImageWithFallback from './ImageWithFallback';

interface ProductCardProps {
  product: Product;
  showExtendedSpecs?: boolean;
}

export default function ProductCard({
  product,
  showExtendedSpecs = false,
}: ProductCardProps) {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <article className="group bg-white border border-[#E2E5E9] rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#C5CBD3]">
      {/* Ground-aligned proportional display stage so 7 ft, 6 ft, and 3 ft pole image sizes scale accurately */}
      <Link
        to={`/products/${product.slug}`}
        className="relative h-72 bg-[#E8F0E7] border-b border-[#DCE7DC] px-6 pt-6 flex items-end justify-center overflow-hidden focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#163A28]"
      >
        <span className="absolute top-3 right-3 font-mono text-xs font-medium text-[#4B5563] tabular-nums">
          {product.heightLabel}
        </span>

        <div
          style={{ height: `${product.sizeScalePercent}%` }}
          className="w-full max-w-[220px] transition-transform duration-300 group-hover:scale-[1.02] origin-bottom"
        >
          <ImageWithFallback
            src={product.image}
            alt={product.imageAlt}
            fallbackLabel={product.name}
            aspectClassName="w-full h-full rounded-t-md"
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        {/* Clean unboxed metadata per zero-pill discipline */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
          <span>{product.category}</span>
          <span aria-hidden="true">·</span>
          <span>{product.baseType}</span>
          <span aria-hidden="true">·</span>
          <span className="tabular-nums">{product.heightLabel}</span>
        </div>

        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-[#1C1E21] tracking-tight">
            <Link
              to={`/products/${product.slug}`}
              className="hover:text-[#163A28] transition-colors"
            >
              {product.name}
            </Link>
          </h3>
          <span className="text-sm font-bold text-[#163A28] tabular-nums whitespace-nowrap shrink-0">
            {product.price}
          </span>
        </div>

        <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {showExtendedSpecs && (
          <dl className="mb-5 pt-4 border-t border-[#ECEEF1] space-y-2 text-xs">
            <div className="flex justify-between gap-3">
              <dt className="text-[#6B7280] shrink-0">Height</dt>
              <dd className="text-[#1C1E21] font-medium text-right tabular-nums">
                {product.heightLabel}
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-[#6B7280] shrink-0">Base</dt>
              <dd className="text-[#1C1E21] font-medium text-right">
                {product.baseType}
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-[#6B7280] shrink-0">Material</dt>
              <dd className="text-[#1C1E21] font-medium text-right truncate max-w-[200px]">
                {product.materialInfo}
              </dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-[#6B7280] shrink-0">Price</dt>
              <dd className="text-[#163A28] font-semibold text-right tabular-nums">
                {product.price}
              </dd>
            </div>
          </dl>
        )}

        <div className="mt-auto pt-4 border-t border-[#ECEEF1] flex flex-wrap items-center gap-2.5">
          <Link
            to={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-[#1C1E21] bg-[#F1F3F5] hover:bg-[#E5E8EC] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#163A28]"
          >
            View Details
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#163A28]"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  );
}
