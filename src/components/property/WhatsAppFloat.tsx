"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/broker";
import { Property } from "@/data/properties";

interface WhatsAppFloatProps {
  property: Property;
}

export default function WhatsAppFloat({ property }: WhatsAppFloatProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={getWhatsAppLink(property.titulo)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200"
      initial={shouldReduceMotion ? {} : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1,
        type: "spring",
        duration: 0.5,
        bounce: 0.2,
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
