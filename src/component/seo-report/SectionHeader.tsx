"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {number && (
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full text-2xl mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
          {number}
        </div>
      )}
      <h2 className="text-gray-900 mb-3 text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 text-xl">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-24 bg-gradient-to-r from-red-600 to-black rounded-full"></div>
    </motion.div>
  );
}

