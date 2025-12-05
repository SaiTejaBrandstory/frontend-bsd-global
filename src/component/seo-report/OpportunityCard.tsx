"use client";

import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface OpportunityCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

export function OpportunityCard({ icon: Icon, title, subtitle, description, color }: OpportunityCardProps) {
  const colorStyles: Record<string, string> = {
    blue: "border-red-300 bg-gradient-to-br from-red-50 to-white",
    green: "border-gray-300 bg-gradient-to-br from-gray-50 to-white",
    purple: "border-red-300 bg-gradient-to-br from-red-50 to-white"
  };

  const iconStyles: Record<string, string> = {
    blue: "bg-red-600 text-white",
    green: "bg-black text-white",
    purple: "bg-red-600 text-white"
  };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, y: -8 }}
    >
      <Card className={`p-6 ${colorStyles[color]} border-2 hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col`}>
        <motion.div 
          className={`inline-flex p-3 rounded-lg ${iconStyles[color]} mb-4 flex-shrink-0`}
          whileHover={{ 
            scale: 1.1,
            rotate: 5
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <div className="flex flex-col flex-1">
          <h3 className="mb-1 text-xl text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{subtitle}</p>
          <p className="text-sm text-gray-700 flex-1">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}

