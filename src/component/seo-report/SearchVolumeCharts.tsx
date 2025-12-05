"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Cell } from "recharts";
import { Card } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  volumeUnit?: string;
  tooltipSuffix?: string;
}

const CustomTooltip = ({ active, payload, label, volumeUnit = "K", tooltipSuffix = "searches/month" }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-3 rounded-lg shadow-lg border-2 border-red-600">
        <p className="">{label}</p>
        <p className="text-red-400">{payload[0].value}{volumeUnit} {tooltipSuffix}</p>
      </div>
    );
  }
  return null;
};

interface TabData {
  label: string;
  value: string;
  graphTitle: string;
  graphDescription: string;
  yAxisLabel?: string;
  volumeUnit?: string;
  tooltipSuffix?: string;
  graphData: Array<{ name: string; volume: number }>;
}

interface SearchVolumeChartsProps {
  tabs?: TabData[];
}

export function SearchVolumeCharts({ tabs = [] }: SearchVolumeChartsProps) {
  // All hooks must be called before any conditional returns
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const defaultTabValue = tabs?.[0]?.value || "";
  const [activeTab, setActiveTab] = useState<string>(defaultTabValue);

  // Reset activeIndex when tab changes
  useEffect(() => {
    setActiveIndex(null);
  }, [activeTab]);

  // Update activeTab when tabs change
  useEffect(() => {
    if (tabs && tabs.length > 0 && tabs[0]?.value) {
      setActiveTab(tabs[0].value);
    }
  }, [tabs]);

  // Only use Strapi data - no hardcoded fallback
  if (!tabs || tabs.length === 0) {
    return null;
  }

  // Determine bar color based on tab index (alternating red/black)
  const getBarColor = (tabIndex: number, isActive: boolean) => {
    const isRed = tabIndex % 2 === 0;
    if (isRed) {
      return isActive ? "#991b1b" : "#dc2626";
    } else {
      return isActive ? "#4b5563" : "#000000";
    }
  };

  const getCursorColor = (tabIndex: number) => {
    const isRed = tabIndex % 2 === 0;
    return isRed ? "rgba(220, 38, 38, 0.1)" : "rgba(0, 0, 0, 0.05)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList 
          className="grid w-full h-auto p-1 bg-gray-100"
          style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}
        >
          {tabs.map((tab, index) => (
            <TabsTrigger 
              key={tab.value} 
              value={tab.value} 
              className={`text-gray-900 py-3 ${
                index % 2 === 0 
                  ? 'data-[state=active]:bg-red-600 data-[state=active]:text-white' 
                  : 'data-[state=active]:bg-black data-[state=active]:text-white'
              }`}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      
        {tabs.map((tab, tabIndex) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Card className="p-6 border-2 border-gray-200 hover:shadow-xl transition-shadow">
              <h3 className="mb-1 text-2xl text-gray-900">{tab.graphTitle}</h3>
              <p className="text-sm text-gray-600 mb-6">{tab.graphDescription}</p>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart 
                  data={tab.graphData}
                  onMouseMove={(state) => {
                    if (state?.isTooltipActive) {
                      const index = typeof state.activeTooltipIndex === 'number' ? state.activeTooltipIndex : null;
                      setActiveIndex(index);
                    } else {
                      setActiveIndex(null);
                    }
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" angle={-15} textAnchor="end" height={80} tick={{ fill: '#111827' }} />
                  <YAxis label={{ value: tab.yAxisLabel || `Volume (${tab.volumeUnit || 'K'})`, angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#111827' } }} tick={{ fill: '#111827' }} />
                  <RechartsTooltip 
                    content={<CustomTooltip volumeUnit={tab.volumeUnit} tooltipSuffix={tab.tooltipSuffix} />} 
                    cursor={{ fill: getCursorColor(tabIndex) }} 
                  />
                  <Bar dataKey="volume" radius={[8, 8, 0, 0]}>
                    {tab.graphData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={getBarColor(tabIndex, activeIndex === index)}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}

