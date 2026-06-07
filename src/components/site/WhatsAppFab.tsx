import { WHATSAPP_PHONE } from "./Navbar";

export function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    "Hi Solidwall, I'd like to discuss a project.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M19.05 4.91A10 10 0 0 0 4.1 18.32L3 22l3.77-1.08A10 10 0 1 0 19.05 4.9Zm-7.04 15.27a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.24.64.66-2.18-.2-.31a8.28 8.28 0 1 1 6.3 3.19Zm4.54-6.2c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.97-.14.17-.28.18-.53.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.28.37-.42.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.07-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2s.86 2.32.98 2.48c.13.17 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
      </svg>
    </a>
  );
}
