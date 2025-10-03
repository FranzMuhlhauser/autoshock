import { WhatsAppIcon } from "@/components/icons";

export default function WhatsAppButton() {
    // Replace with your actual WhatsApp number
    const phoneNumber = "56912345678";
    const message = "Hola, me gustaría hacer una consulta sobre sus productos.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-bounce hover:[animation-play-state:paused]"
        >
            <WhatsAppIcon className="h-8 w-8" />
        </a>
    );
}
