/**
 * Product Catalog Data
 *
 * All Rock Poles and Cement Poles feature Flat Plate Bases and are available in:
 * - 7 Feet: 250 per pole
 * - 6 Feet: 220 per pole
 * - 3 Feet: 170 per pole
 */

export type ProductCategory = 'Rock Poles' | 'Cement Poles';

export interface ProductSpecRow {
  label: string;
  value: string;
}

export interface SizePriceOption {
  heightFeet: 7 | 6 | 3;
  heightLabel: string;
  pricePerPole: number;
  priceDisplay: string;
  sizeScalePercent: number;
}

export const SIZE_PRICING_OPTIONS: SizePriceOption[] = [
  {
    heightFeet: 7,
    heightLabel: '7 Feet',
    pricePerPole: 250,
    priceDisplay: '250 per pole',
    sizeScalePercent: 100,
  },
  {
    heightFeet: 6,
    heightLabel: '6 Feet',
    pricePerPole: 220,
    priceDisplay: '220 per pole',
    sizeScalePercent: 86,
  },
  {
    heightFeet: 3,
    heightLabel: '3 Feet',
    pricePerPole: 170,
    priceDisplay: '170 per pole',
    sizeScalePercent: 46,
  },
];

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortTitle: string;
  category: ProductCategory;
  categorySlug: 'rock-poles' | 'cement-poles';
  heightFeet: 7 | 6 | 3;
  heightLabel: string;
  sizeScalePercent: number;
  baseType: 'Flat Plate Base';
  baseSummary: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  fullDescription: string;
  widthAndDimensions: string;
  materialInfo: string;
  pricePerPole: number;
  price: string;
  recommendedUse: string;
  specifications: ProductSpecRow[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'rock-pole-7ft',
    slug: 'rock-pole-7-feet',
    name: 'Rock Pole – 7 Feet',
    shortTitle: '7 Feet · Flat Plate Base',
    category: 'Rock Poles',
    categorySlug: 'rock-poles',
    heightFeet: 7,
    heightLabel: '7 Feet',
    sizeScalePercent: 100,
    baseType: 'Flat Plate Base',
    baseSummary:
      'Equipped with a sturdy flat plate base that provides level ground seating and upright load stability.',
    image: '/src/assets/images/rock_pole_flat_7ft_1794811986440.jpg',
    imageAlt: '7 Feet natural split granite Rock Pole with a flat plate base',
    shortDescription:
      'Full-height 7 feet natural split granite fencing pole fitted with a flat plate base for high perimeter boundaries.',
    fullDescription:
      'Our 7 Feet Rock Pole with a flat plate base is built for full-height agricultural, orchard, and industrial security fencing. The dense granite shaft resists rot, moisture, and weathering while the flat plate base keeps the pole level and stable at installation.',
    widthAndDimensions: 'Height: 7 Feet | [Width & Plate Size — Editable]',
    materialInfo: '[Natural Split Granite Stone with Flat Plate Base]',
    pricePerPole: 250,
    price: '250 per pole',
    recommendedUse: 'High perimeter security fencing, agricultural estates, industrial boundaries',
    specifications: [
      { label: 'Category', value: 'Rock Poles' },
      { label: 'Pole Height', value: '7 Feet' },
      { label: 'Price', value: '250 per pole' },
      { label: 'Base Type', value: 'Flat Plate Base' },
      { label: 'Width & Cross-Section', value: '[Specify Width × Thickness]' },
      { label: 'Material Composition', value: '[Natural Split Granite Stone]' },
      { label: 'Wire Provisions', value: '[Custom Grooves / Ties on Request]' },
    ],
  },
  {
    id: 'rock-pole-6ft',
    slug: 'rock-pole-6-feet',
    name: 'Rock Pole – 6 Feet',
    shortTitle: '6 Feet · Flat Plate Base',
    category: 'Rock Poles',
    categorySlug: 'rock-poles',
    heightFeet: 6,
    heightLabel: '6 Feet',
    sizeScalePercent: 86,
    baseType: 'Flat Plate Base',
    baseSummary:
      'Equipped with a sturdy flat plate base that provides level ground seating and upright load stability.',
    image: '/src/assets/images/rock_pole_flat_6ft_1794811986949.jpg',
    imageAlt: '6 Feet natural split granite Rock Pole with a flat plate base',
    shortDescription:
      'Standard 6 feet split granite fencing pole on a flat plate base ideal for farmland, plots, and residential perimeters.',
    fullDescription:
      'Our 6 Feet Rock Pole with a flat plate base offers balanced height and everyday strength for farmland boundaries, residential plots, and livestock enclosures. Manufactured from dense split granite with a level flat base plate for straightforward alignment.',
    widthAndDimensions: 'Height: 6 Feet | [Width & Plate Size — Editable]',
    materialInfo: '[Natural Split Granite Stone with Flat Plate Base]',
    pricePerPole: 220,
    price: '220 per pole',
    recommendedUse: 'Farmland fencing, residential plots, orchards, standard boundary lines',
    specifications: [
      { label: 'Category', value: 'Rock Poles' },
      { label: 'Pole Height', value: '6 Feet' },
      { label: 'Price', value: '220 per pole' },
      { label: 'Base Type', value: 'Flat Plate Base' },
      { label: 'Width & Cross-Section', value: '[Specify Width × Thickness]' },
      { label: 'Material Composition', value: '[Natural Split Granite Stone]' },
      { label: 'Wire Provisions', value: '[Custom Grooves / Ties on Request]' },
    ],
  },
  {
    id: 'rock-pole-3ft',
    slug: 'rock-pole-3-feet',
    name: 'Rock Pole – 3 Feet',
    shortTitle: '3 Feet · Flat Plate Base',
    category: 'Rock Poles',
    categorySlug: 'rock-poles',
    heightFeet: 3,
    heightLabel: '3 Feet',
    sizeScalePercent: 46,
    baseType: 'Flat Plate Base',
    baseSummary:
      'Equipped with a sturdy flat plate base that provides level ground seating and upright load stability.',
    image: '/src/assets/images/rock_pole_flat_3ft_1794811987238.jpg',
    imageAlt: '3 Feet compact split granite Rock Pole with a flat plate base',
    shortDescription:
      'Compact 3 feet split granite post with a flat plate base suited for low border demarcation, gardens, and pathway fencing.',
    fullDescription:
      'Our 3 Feet Rock Pole with a flat plate base is sized for low-height border marking, garden enclosures, compound partitions, and short safety barriers. Cut from solid granite and mounted on a clean flat plate base for durable outdoor placement.',
    widthAndDimensions: 'Height: 3 Feet | [Width & Plate Size — Editable]',
    materialInfo: '[Natural Split Granite Stone with Flat Plate Base]',
    pricePerPole: 170,
    price: '170 per pole',
    recommendedUse: 'Garden borders, plot demarcation lines, low-height compound partitions',
    specifications: [
      { label: 'Category', value: 'Rock Poles' },
      { label: 'Pole Height', value: '3 Feet' },
      { label: 'Price', value: '170 per pole' },
      { label: 'Base Type', value: 'Flat Plate Base' },
      { label: 'Width & Cross-Section', value: '[Specify Width × Thickness]' },
      { label: 'Material Composition', value: '[Natural Split Granite Stone]' },
      { label: 'Wire Provisions', value: '[Custom Grooves / Ties on Request]' },
    ],
  },
  {
    id: 'cement-pole-7ft',
    slug: 'cement-pole-7-feet',
    name: 'Cement Pole – 7 Feet',
    shortTitle: '7 Feet · Flat Plate Base',
    category: 'Cement Poles',
    categorySlug: 'cement-poles',
    heightFeet: 7,
    heightLabel: '7 Feet',
    sizeScalePercent: 100,
    baseType: 'Flat Plate Base',
    baseSummary:
      'Cast with a monolithic flat plate concrete base for wide bearing support and upright rigidity.',
    image: '/src/assets/images/cement_pole_foot_1_1794811610820.jpg',
    imageAlt: '7 Feet precast reinforced Cement Pole with a flat plate base',
    shortDescription:
      'Tall 7 feet steel-reinforced precast cement pole molded with a flat plate base and pre-cast wire holes.',
    fullDescription:
      'Our 7 Feet Cement Pole is vibro-compacted with internal steel reinforcement and a monolithic flat plate base. Designed for tall chain-link, barbed wire, and high-security industrial or agricultural fencing where uniform straightness and multi-line wire holes are essential.',
    widthAndDimensions: 'Height: 7 Feet | [Shaft & Flat Plate Base — Editable]',
    materialInfo: '[Reinforced Precast Cement Concrete (RCC) — Flat Plate Base]',
    pricePerPole: 250,
    price: '250 per pole',
    recommendedUse: 'Tall chain-link compounds, warehouse yards, heavy agricultural perimeters',
    specifications: [
      { label: 'Category', value: 'Cement Poles' },
      { label: 'Pole Height', value: '7 Feet' },
      { label: 'Price', value: '250 per pole' },
      { label: 'Base Type', value: 'Flat Plate Base' },
      { label: 'Shaft Dimensions', value: '[Specify Cross-Section]' },
      { label: 'Material Composition', value: '[OPC Cement, Graded Aggregate, Steel Rebar]' },
      { label: 'Wire Holes', value: '[Pre-cast Through-Holes]' },
    ],
  },
  {
    id: 'cement-pole-6ft',
    slug: 'cement-pole-6-feet',
    name: 'Cement Pole – 6 Feet',
    shortTitle: '6 Feet · Flat Plate Base',
    category: 'Cement Poles',
    categorySlug: 'cement-poles',
    heightFeet: 6,
    heightLabel: '6 Feet',
    sizeScalePercent: 86,
    baseType: 'Flat Plate Base',
    baseSummary:
      'Cast with a monolithic flat plate concrete base for wide bearing support and upright rigidity.',
    image: '/src/assets/images/cement_pole_flat_6ft_1794811988184.jpg',
    imageAlt: '6 Feet precast reinforced Cement Pole with a flat plate base',
    shortDescription:
      'Standard 6 feet precast reinforced concrete fencing pole with a flat plate base and four wire threading holes.',
    fullDescription:
      'Our 6 Feet Cement Pole combines a steel-reinforced precast concrete shaft with a flat rectangular concrete base plate. Built for everyday boundary protection across farms, commercial plots, and solar installations with pre-formed wire holes for rapid installation.',
    widthAndDimensions: 'Height: 6 Feet | [Shaft & Flat Plate Base — Editable]',
    materialInfo: '[Reinforced Precast Cement Concrete (RCC) — Flat Plate Base]',
    pricePerPole: 220,
    price: '220 per pole',
    recommendedUse: 'Standard boundary fencing, residential layouts, farms, solar parks',
    specifications: [
      { label: 'Category', value: 'Cement Poles' },
      { label: 'Pole Height', value: '6 Feet' },
      { label: 'Price', value: '220 per pole' },
      { label: 'Base Type', value: 'Flat Plate Base' },
      { label: 'Shaft Dimensions', value: '[Specify Cross-Section]' },
      { label: 'Material Composition', value: '[OPC Cement, Graded Aggregate, Steel Rebar]' },
      { label: 'Wire Holes', value: '[Pre-cast Through-Holes]' },
    ],
  },
  {
    id: 'cement-pole-3ft',
    slug: 'cement-pole-3-feet',
    name: 'Cement Pole – 3 Feet',
    shortTitle: '3 Feet · Flat Plate Base',
    category: 'Cement Poles',
    categorySlug: 'cement-poles',
    heightFeet: 3,
    heightLabel: '3 Feet',
    sizeScalePercent: 46,
    baseType: 'Flat Plate Base',
    baseSummary:
      'Cast with a monolithic flat plate concrete base for wide bearing support and upright rigidity.',
    image: '/src/assets/images/cement_pole_flat_3ft_1794811988432.jpg',
    imageAlt: '3 Feet compact precast reinforced Cement Pole with a flat plate base',
    shortDescription:
      'Compact 3 feet precast cement post with a flat plate base and two wire holes for low border fencing.',
    fullDescription:
      'Our 3 Feet Cement Pole features a compact reinforced concrete post cast onto a wide flat plate base. Ideal for low perimeter dividers, garden fencing, walkway guard lines, and boundary marker posts.',
    widthAndDimensions: 'Height: 3 Feet | [Shaft & Flat Plate Base — Editable]',
    materialInfo: '[Reinforced Precast Cement Concrete (RCC) — Flat Plate Base]',
    pricePerPole: 170,
    price: '170 per pole',
    recommendedUse: 'Low boundary dividers, walkways, garden enclosures, marker posts',
    specifications: [
      { label: 'Category', value: 'Cement Poles' },
      { label: 'Pole Height', value: '3 Feet' },
      { label: 'Price', value: '170 per pole' },
      { label: 'Base Type', value: 'Flat Plate Base' },
      { label: 'Shaft Dimensions', value: '[Specify Cross-Section]' },
      { label: 'Material Composition', value: '[OPC Cement, Graded Aggregate, Steel Rebar]' },
      { label: 'Wire Holes', value: '[Pre-cast Through-Holes]' },
    ],
  },
];

export const ROCK_POLES = PRODUCTS.filter((p) => p.category === 'Rock Poles');
export const CEMENT_POLES = PRODUCTS.filter((p) => p.category === 'Cement Poles');

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  projectType: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testimonial-1',
    quote:
      '[Placeholder Client Review: "The 7 Feet Rock Poles with flat plate bases held steady across our entire farmland perimeter with zero leaning."]',
    author: '[Client Name — Editable]',
    role: '[Agricultural Estate Manager — Placeholder]',
    projectType: 'Farm Perimeter · 7 ft Rock Poles',
  },
  {
    id: 'testimonial-2',
    quote:
      '[Placeholder Client Review: "Consistent dimensions, clean wire holes, and flat-plate Cement Poles in 6 ft and 7 ft sizes arrived right on schedule."]',
    author: '[Client Name — Editable]',
    role: '[Site Civil Contractor — Placeholder]',
    projectType: 'Industrial Yard · Cement Poles',
  },
  {
    id: 'testimonial-3',
    quote:
      '[Placeholder Client Review: "We used 3 Feet flat plate base posts for our pathway and plot boundaries—clean finish and straightforward installation."]',
    author: '[Client Name — Editable]',
    role: '[Land Developer — Placeholder]',
    projectType: 'Plot Demarcation · 3 ft Poles',
  },
];
