import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_CONFIG, buildWhatsAppUrl } from '../config/company';
import { usePageMeta } from '../hooks/usePageMeta';

interface FormState {
  customerName: string;
  mobileNumber: string;
  email: string;
  productSelection: string;
  quantity: string;
  message: string;
}

interface FormErrors {
  customerName?: string;
  mobileNumber?: string;
  email?: string;
  productSelection?: string;
  quantity?: string;
}

const PRODUCT_OPTIONS = [
  ...PRODUCTS.map((p) => p.name),
  'Custom Bulk Order (Mixed Rock & Cement Poles)',
];

export default function Contact() {
  usePageMeta({
    title: 'Contact Us & Bulk Quote – Fencing Poles Manufacturers',
    description:
      'Request a quote or send a bulk fencing pole enquiry. Connect by phone, email, WhatsApp, or visit our manufacturing yard.',
  });

  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product');

  const [form, setForm] = useState<FormState>({
    customerName: '',
    mobileNumber: '',
    email: '',
    productSelection:
      initialProduct && PRODUCT_OPTIONS.includes(initialProduct)
        ? initialProduct
        : PRODUCTS[0].name,
    quantity: '',
    message: '',
  });

  useEffect(() => {
    if (initialProduct && PRODUCT_OPTIONS.includes(initialProduct)) {
      setForm((prev) => ({ ...prev, productSelection: initialProduct }));
    }
  }, [initialProduct]);

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.customerName.trim() || form.customerName.trim().length < 2) {
      nextErrors.customerName = 'Please enter your full name.';
    }
    const cleanPhone = form.mobileNumber.replace(/[\s\-()+]/g, '');
    if (!cleanPhone || !/^\d{7,15}$/.test(cleanPhone)) {
      nextErrors.mobileNumber =
        'Please enter a valid mobile number (7–15 digits).';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!form.productSelection) {
      nextErrors.productSelection = 'Please select a product.';
    }
    const qty = Number(form.quantity);
    if (!form.quantity.trim() || Number.isNaN(qty) || qty <= 0) {
      nextErrors.quantity = 'Please enter a valid pole quantity (minimum 1).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitError('Please fix the highlighted fields before submitting.');
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmittedData({ ...form });
      setForm({
        customerName: '',
        mobileNumber: '',
        email: '',
        productSelection: PRODUCTS[0].name,
        quantity: '',
        message: '',
      });
    }, 350);
  };

  const whatsappSummaryUrl = buildWhatsAppUrl();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Page Header */}
      <div className="max-w-2xl mb-10">
        <p className="text-xs font-semibold tracking-wider uppercase text-[#163A28] mb-2">
          Contact &amp; Bulk Orders
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1E21] tracking-tight mb-3">
          Request a Fencing Poles Quote
        </h1>
        <p className="text-base text-[#4B5563] leading-relaxed">
          Share your required pole type, quantity, and site details below for a custom quotation or reach our yard directly via phone or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Validated Enquiry & Bulk Order Form */}
        <div className="lg:col-span-7 bg-white border border-[#E2E5E9] rounded-xl p-6 sm:p-8">
          {submittedData ? (
            <div className="py-6 space-y-5">
              <div className="flex items-start gap-3 text-[#163A28]">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h2 className="text-xl font-bold text-[#1C1E21]">
                    Enquiry Recorded
                  </h2>
                  <p className="text-sm text-[#4B5563] mt-1">
                    Thank you, {submittedData.customerName}. Your request for{' '}
                    <span className="font-semibold text-[#1C1E21] tabular-nums">
                      {submittedData.quantity}
                    </span>{' '}
                    units of{' '}
                    <span className="font-semibold text-[#1C1E21]">
                      {submittedData.productSelection}
                    </span>{' '}
                    is ready.
                  </p>
                </div>
              </div>

              <div className="bg-[#F8F9FA] border border-[#E2E5E9] rounded-lg p-4 text-sm space-y-1.5 text-[#374151]">
                <div>
                  <span className="text-[#6B7280]">Mobile:</span>{' '}
                  <span className="tabular-nums">{submittedData.mobileNumber}</span>
                </div>
                <div>
                  <span className="text-[#6B7280]">Email:</span>{' '}
                  <span>{submittedData.email}</span>
                </div>
                {submittedData.message && (
                  <div>
                    <span className="text-[#6B7280]">Message:</span>{' '}
                    <span>{submittedData.message}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={whatsappSummaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Send This Enquiry on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="px-5 py-3 text-sm font-semibold text-[#1C1E21] bg-[#F1F3F5] hover:bg-[#E5E8EC] rounded-lg transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <h2 className="text-lg font-bold text-[#1C1E21]">
                Customer &amp; Order Enquiry Form
              </h2>

              {submitError && (
                <div
                  role="alert"
                  className="flex items-center gap-2.5 p-3.5 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-sm text-[#991B1B]"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Customer Name */}
                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-[#1C1E21] mb-1.5"
                  >
                    Customer Name <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="customerName"
                    type="text"
                    value={form.customerName}
                    onChange={(e) => {
                      setForm({ ...form, customerName: e.target.value });
                      if (errors.customerName) {
                        setErrors({ ...errors, customerName: undefined });
                      }
                    }}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg text-[#1C1E21] focus:outline-none focus:border-[#163A28] focus:ring-1 focus:ring-[#163A28]"
                  />
                  {errors.customerName && (
                    <p className="mt-1 text-xs text-[#991B1B]">
                      {errors.customerName}
                    </p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm font-medium text-[#1C1E21] mb-1.5"
                  >
                    Mobile Number <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    value={form.mobileNumber}
                    onChange={(e) => {
                      setForm({ ...form, mobileNumber: e.target.value });
                      if (errors.mobileNumber) {
                        setErrors({ ...errors, mobileNumber: undefined });
                      }
                    }}
                    placeholder="+XX XXXXX XXXXX"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg text-[#1C1E21] focus:outline-none focus:border-[#163A28] focus:ring-1 focus:ring-[#163A28]"
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1 text-xs text-[#991B1B]">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1C1E21] mb-1.5"
                  >
                    Email Address <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) {
                        setErrors({ ...errors, email: undefined });
                      }
                    }}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg text-[#1C1E21] focus:outline-none focus:border-[#163A28] focus:ring-1 focus:ring-[#163A28]"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-[#991B1B]">{errors.email}</p>
                  )}
                </div>

                {/* Quantity */}
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-[#1C1E21] mb-1.5"
                  >
                    Quantity (Number of Poles){' '}
                    <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    min={1}
                    value={form.quantity}
                    onChange={(e) => {
                      setForm({ ...form, quantity: e.target.value });
                      if (errors.quantity) {
                        setErrors({ ...errors, quantity: undefined });
                      }
                    }}
                    placeholder="e.g., 250"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg text-[#1C1E21] tabular-nums focus:outline-none focus:border-[#163A28] focus:ring-1 focus:ring-[#163A28]"
                  />
                  {errors.quantity && (
                    <p className="mt-1 text-xs text-[#991B1B]">
                      {errors.quantity}
                    </p>
                  )}
                </div>
              </div>

              {/* Product Selection Dropdown */}
              <div>
                <label
                  htmlFor="productSelection"
                  className="block text-sm font-medium text-[#1C1E21] mb-1.5"
                >
                  Select Product <span className="text-[#991B1B]">*</span>
                </label>
                <select
                  id="productSelection"
                  value={form.productSelection}
                  onChange={(e) =>
                    setForm({ ...form, productSelection: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg text-[#1C1E21] focus:outline-none focus:border-[#163A28] focus:ring-1 focus:ring-[#163A28]"
                >
                  {PRODUCT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.productSelection && (
                  <p className="mt-1 text-xs text-[#991B1B]">
                    {errors.productSelection}
                  </p>
                )}
              </div>

              {/* Message Box */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1C1E21] mb-1.5"
                >
                  Message / Bulk Order Specifications
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share preferred pole height, delivery location, terrain type, or custom wire hole spacing..."
                  className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FA] border border-[#D1D5DB] rounded-lg text-[#1C1E21] focus:outline-none focus:border-[#163A28] focus:ring-1 focus:ring-[#163A28]"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap"
                >
                  {submitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                </button>

                <a
                  href={whatsappSummaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#163A28] bg-[#EDF3EF] hover:bg-[#DCE8E0] rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Enquire via WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Right: Company Contact Details & Google Maps Location */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-[#E2E5E9] rounded-xl p-6 sm:p-7 space-y-5">
            <h2 className="text-lg font-bold text-[#1C1E21]">
              Direct Factory Contact Details
            </h2>

            <dl className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <User
                  className="w-4 h-4 text-[#163A28] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">
                    Contact Person
                  </dt>
                  <dd className="text-[#1C1E21] font-semibold">
                    {COMPANY_CONFIG.contactPerson}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone
                  className="w-4 h-4 text-[#163A28] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">
                    Business Phone
                  </dt>
                  <dd className="text-[#1C1E21] font-medium tabular-nums">
                    <a
                      href={COMPANY_CONFIG.phoneHref}
                      className="hover:text-[#163A28] transition-colors"
                    >
                      {COMPANY_CONFIG.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle
                  className="w-4 h-4 text-[#163A28] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">
                    WhatsApp Number
                  </dt>
                  <dd className="text-[#1C1E21] font-medium tabular-nums">
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#163A28] transition-colors"
                    >
                      {COMPANY_CONFIG.whatsappDisplay}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  className="w-4 h-4 text-[#163A28] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">
                    Business Email
                  </dt>
                  <dd className="text-[#1C1E21] font-medium break-all">
                    <a
                      href={COMPANY_CONFIG.emailHref}
                      className="hover:text-[#163A28] transition-colors"
                    >
                      {COMPANY_CONFIG.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-[#163A28] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">
                    Business Address
                  </dt>
                  <dd className="text-[#1C1E21] font-medium leading-relaxed">
                    {COMPANY_CONFIG.addressLine1}
                    <br />
                    {COMPANY_CONFIG.addressLine2}
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock
                  className="w-4 h-4 text-[#163A28] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-xs font-medium text-[#6B7280]">
                    Operating Hours
                  </dt>
                  <dd className="text-[#1C1E21] font-medium">
                    {COMPANY_CONFIG.businessHours}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Google Maps Location Panel */}
          <div className="bg-white border border-[#E2E5E9] rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#E2E5E9] flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#1C1E21]">
                Google Maps Location
              </h2>
              <a
                href={COMPANY_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#163A28] hover:underline"
              >
                Open Maps
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            {COMPANY_CONFIG.googleMapsEmbedUrl ? (
              <iframe
                title="Factory Location Map"
                src={COMPANY_CONFIG.googleMapsEmbedUrl}
                className="w-full h-64 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-60 bg-[#F1F3F5] flex flex-col items-center justify-center p-6 text-center">
                <MapPin
                  className="w-8 h-8 text-[#163A28] mb-2.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="text-sm font-semibold text-[#1C1E21] mb-2 max-w-xs leading-snug">
                  {COMPANY_CONFIG.mapLocationPlaceholderLabel}
                </p>
                <a
                  href={COMPANY_CONFIG.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#163A28] hover:bg-[#1E4D35] rounded-lg transition-colors"
                >
                  View Directions on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
