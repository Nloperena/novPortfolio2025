'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const FloatingContactButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 z-40 bg-[#F2611D] hover:bg-[#ea580c] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:shadow-3xl"
        aria-label="Open contact modal"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingContactButton;

