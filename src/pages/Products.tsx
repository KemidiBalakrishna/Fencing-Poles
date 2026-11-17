import { useState, useMemo, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { PRODUCTS, ProductCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import { usePageMeta } from '../hooks/usePageMeta';

type FilterOption = 'All Products' | ProductCategory;

const FILTER_OPTIONS: FilterOption[] = [
  'All Products',
  'Rock Poles',
  'Cement Poles',
];

export default function Products() {
  usePageMeta({
    title: 'All Fencing Poles – Rock Poles & Cement Poles (7 ft, 6 ft, 3 ft)',
    description:
      'Browse flat plate base Rock Poles and Cement Poles in 7 Feet (250/pole), 6 Feet (220/pole), and 3 Feet (170/pole) sizes.',
  });

  const [selectedCategory, setSelectedCategory] =
    useState<FilterOption>('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setIsFiltering(true);
    const timer = window.setTimeout(() => setIsFiltering(false), 140);
    return () => window.clearTimeout(timer);
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All Products' ||
        product.category === selectedCategory;
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.heightLabel.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.recommendedUse.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const rockPolesFiltered = filteredProducts.filter(
    (p) => p.category === 'Rock Poles'
  );
  const cementPolesFiltered = filteredProducts.filter(
    (p) => p.category === 'Cement Poles'
  );

  const handleReset = () => {
    setSelectedCategory('All Products');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-2xl mb-10">
        <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
          Product Catalog · Flat Plate Bases
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E21] tracking-tight mb-3">
          Rock Poles &amp; Cement Poles
        </h1>
        <p className="text-base text-[#4B5563] leading-relaxed">
          All Rock Poles and Cement Poles feature flat plate bases and are available in 7 Feet (250 per pole), 6 Feet (220 per pole), and 3 Feet (170 per pole) sizes.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white border border-[#E2E5E9] rounded-xl p-4 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div
          role="tablist"
          aria-label="Filter products by category"
          className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F1F3F5] rounded-lg"
        >
          {FILTER_OPTIONS.map((option) => {
            const active = selectedCategory === option;
            return (
              <button
                key={option}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(option)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#163A28] ${
                  active
                    ? 'bg-[#163A28] text-white shadow-xs'
                    : 'text-[#4B5563] hover:text-[#1C1E21]'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-80">
          <Search
            className="w-4 h-4 text-[#6B7280] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by pole name or size (e.g. 7 Feet)..."
            aria-label="Search products by name"
            className="w-full pl-10 pr-9 py-2.5 text-sm bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg text-[#1C1E21] placeholder:text-[#6B7280] focus:outline-none focus:border-[#163A28] focus:ring-1 focus:ring-[#163A28]"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#6B7280] hover:text-[#1C1E21]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Loading Skeleton State */}
      {isFiltering ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white border border-[#E2E5E9] rounded-xl overflow-hidden animate-pulse"
            >
              <div className="h-72 bg-[#EAECEF]" />
              <div className="p-6 space-y-3">
                <div className="h-3 w-28 bg-[#EAECEF] rounded" />
                <div className="h-5 w-48 bg-[#EAECEF] rounded" />
                <div className="h-4 w-full bg-[#EAECEF] rounded" />
                <div className="h-10 w-full bg-[#EAECEF] rounded mt-4" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white border border-[#E2E5E9] rounded-xl p-12 text-center">
          <h2 className="text-lg font-bold text-[#1C1E21] mb-2">
            No matching fencing poles found
          </h2>
          <p className="text-sm text-[#4B5563] mb-6">
            Try searching for &ldquo;Rock Pole&rdquo;, &ldquo;Cement Pole&rdquo;, or &ldquo;7 Feet&rdquo;, or reset your filters.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-14">
          {/* ROCK POLES Section */}
          {rockPolesFiltered.length > 0 && (
            <section aria-labelledby="rock-poles-heading">
              <div className="flex items-baseline justify-between border-b border-[#E2E5E9] pb-3 mb-7">
                <h2
                  id="rock-poles-heading"
                  className="text-xl sm:text-2xl font-bold text-[#1C1E21] tracking-tight"
                >
                  ROCK POLES
                </h2>
                <span className="text-xs font-mono text-[#6B7280] tabular-nums">
                  Flat Plate Base · {rockPolesFiltered.length} {rockPolesFiltered.length === 1 ? 'Size' : 'Sizes'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {rockPolesFiltered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showExtendedSpecs
                  />
                ))}
              </div>
            </section>
          )}

          {/* CEMENT POLES Section */}
          {cementPolesFiltered.length > 0 && (
            <section aria-labelledby="cement-poles-heading">
              <div className="flex items-baseline justify-between border-b border-[#E2E5E9] pb-3 mb-7">
                <h2
                  id="cement-poles-heading"
                  className="text-xl sm:text-2xl font-bold text-[#1C1E21] tracking-tight"
                >
                  CEMENT POLES
                </h2>
                <span className="text-xs font-mono text-[#6B7280] tabular-nums">
                  Flat Plate Base · {cementPolesFiltered.length} {cementPolesFiltered.length === 1 ? 'Size' : 'Sizes'}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {cementPolesFiltered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showExtendedSpecs
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
