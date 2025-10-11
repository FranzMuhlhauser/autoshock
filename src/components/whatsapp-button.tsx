"use client";

import { useState } from 'react';
import { WhatsAppIcon } from "@/components/icons";
import { WhatsappForm } from './WhatsappForm';

export default function WhatsAppButton() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsFormOpen(true)}
                aria-label="Contactar por WhatsApp"
                className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-bounce hover:[animation-play-state:paused]"
            >
                <WhatsAppIcon className="h-8 w-8" />
            </button>
            <WhatsappForm isOpen={isFormOpen} onOpenChange={setIsFormOpen} />
        </>
    );
}
