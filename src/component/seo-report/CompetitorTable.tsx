"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const competitors = [
  {
    portal: "Amazon.in",
    visits: "~298 M",
    authority: 99,
    focus: "Broad marketplace (electronics, fashion, groceries)",
    tooltip: "Market leader with highest domain authority"
  },
  {
    portal: "Flipkart.com",
    visits: "~225 M",
    authority: 98,
    focus: "Electronics & general merchandise",
    tooltip: "Second largest platform with strong SEO presence"
  },
  {
    portal: "Myntra.com",
    visits: "~61 M",
    authority: 83,
    focus: "Fashion & lifestyle",
    tooltip: "Leading fashion-focused platform"
  },
  {
    portal: "Meesho.com",
    visits: "~35.8 M",
    authority: 78,
    focus: "Social‑commerce marketplace",
    tooltip: "Fast-growing social commerce platform"
  },
  {
    portal: "Ajio.com",
    visits: "~16.5 M",
    authority: 78,
    focus: "Fashion & accessories",
    tooltip: "Reliance-backed fashion retailer"
  }
];

export function CompetitorTable() {
  return (
    <motion.div 
      className="overflow-x-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <TooltipProvider>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-base">Portal</TableHead>
              <TableHead className="text-base">Monthly Visits*</TableHead>
              <TableHead className="text-base">Authority Score</TableHead>
              <TableHead className="text-base">Content Focus</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitors.map((competitor, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.05)", scale: 1.01 }}
                className="cursor-pointer transition-colors"
              >
                <TableCell>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="text-gray-900">{competitor.portal}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{competitor.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-lg text-gray-900">{competitor.visits}</TableCell>
                <TableCell>
                  <Badge 
                    variant={competitor.authority >= 95 ? "default" : "secondary"}
                    className={`${competitor.authority >= 95 ? "bg-red-600 text-white" : "bg-black text-white"} text-base px-3 py-1 hover:scale-110 transition-transform`}
                  >
                    {competitor.authority}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-600">{competitor.focus}</TableCell>
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </TooltipProvider>
      <p className="text-xs text-gray-500 mt-4">
        *Monthly visits from Semrush &quot;Website Traffic &amp; Analytics&quot; for Sep 2025.
      </p>
    </motion.div>
  );
}

