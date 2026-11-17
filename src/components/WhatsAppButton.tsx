import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/company';

export default function WhatsAppButton() {
  const url = buildWhatsAppUrl();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp for fencing pole enquiries"
      title="Enquire on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#163A28] hover:bg-[#1E4D35] text-white shadow-lg border border-white/15 transition-transform duration-150 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#163A28]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
        WhatsApp Enquiry
      </span>
    </a>
  );
}
