/**
 * Central Company Configuration
 * Update the fields below with your business details as needed.
 */

export const COMPANY_CONFIG = {
  brandName: 'FENCING POLES MANUFACTURERS',
  shortMark: 'FPM',
  tagline: 'Strong Poles. Reliable Protection. Long-Lasting Quality.',
  heroHeading: 'Premium Quality Fencing Poles',
  heroDescription:
    'Precision-manufactured Rock Poles and reinforced Cement Poles engineered for lasting perimeter security across agricultural land, industrial estates, and boundary developments.',

  contactPerson: 'Kemidi Venkatesh',
  phoneDisplay: '+91 9550500633',
  phoneHref: 'tel:+919550500633',

  // WhatsApp digits only (country code + number, no '+' or spaces)
  whatsappNumber: '919550500633',
  whatsappDisplay: '+91 9550500633',

  email: 'kemidibalakrishna08@gmail.com',
  emailHref: 'mailto:kemidibalakrishna08@gmail.com',
  addressLine1: 'Jangaon Dist, Lingala Ghanpur Mandal/Vill,',
  addressLine2: 'Beside of vajpaye Statue',
  businessHours: '24/7',

  googleMapsEmbedUrl: '',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Lingala+Ghanpur+Jangaon+Dist',
  mapLocationPlaceholderLabel:
    'Jangaon Dist, Lingala Ghanpur Mandal/Vill, Beside of vajpaye Statue',
};

export const DEFAULT_WHATSAPP_ENQUIRY_MESSAGE =
  'Hello, I am interested in your fencing poles. Please share pricing and product details.';

/**
 * Generates a pre-filled WhatsApp enquiry URL.
 */
export function buildWhatsAppUrl(
  message: string = DEFAULT_WHATSAPP_ENQUIRY_MESSAGE
): string {
  const cleanNumber = COMPANY_CONFIG.whatsappNumber.replace(/[^\d]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function buildProductWhatsAppMessage(_productName?: string): string {
  return DEFAULT_WHATSAPP_ENQUIRY_MESSAGE;
}
