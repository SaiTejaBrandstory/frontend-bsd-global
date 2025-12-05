"use client";

import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
  trend?: string;
  variant?: "default" | "primary" | "success" | "warning";
}

export function StatsCard({ 
  icon: Icon, 
  value, 
  label, 
  description, 
  trend,
  variant = "default" 
}: StatsCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const variantStyles = {
    default: "border-gray-200 bg-white",
    primary: "border-red-200 bg-red-50",
    success: "border-gray-200 bg-gray-50",
    warning: "border-red-200 bg-red-50"
  };

  const iconStyles = {
    default: "text-gray-600",
    primary: "text-red-600",
    success: "text-black",
    warning: "text-red-600"
  };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className={`p-6 ${variantStyles[variant]} border-2 transition-all hover:shadow-xl cursor-pointer h-full flex flex-col`}>
        <div className="flex items-start justify-between flex-1 flex-col">
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 mb-2">
              <motion.div
                className="flex-shrink-0"
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className={`h-6 w-6 ${iconStyles[variant]}`} />
              </motion.div>
              <p className="text-sm text-gray-600">{label}</p>
            </div>
            <p className="text-gray-900 mb-1 text-3xl">{value}</p>
            {description && (
              <p className="text-xs text-gray-500 mt-2">{description}</p>
            )}
            {trend && (
              <p className="text-xs text-green-600 mt-2">{trend}</p>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

