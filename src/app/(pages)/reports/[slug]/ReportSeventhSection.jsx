'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/component/seo-report/SectionHeader'
import { Card } from '@/component/seo-report/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/component/seo-report/ui/table'
import { Separator } from '@/component/seo-report/ui/separator'
import { Badge } from '@/component/seo-report/ui/badge'

export default function ReportSeventhSection({ seventhSection }) {
  if (!seventhSection) return null

  const number = seventhSection.number
  const heading = seventhSection.heading
  const description = seventhSection.description
  const tableColumnHeaders = [
    seventhSection.tableColumnHeader1,
    seventhSection.tableColumnHeader2,
    seventhSection.tableColumnHeader3,
    seventhSection.tableColumnHeader4
  ].filter(Boolean) // Remove empty headers
  const tableRows = seventhSection.tableRows || []
  const tableDescription = seventhSection.tableDescription
  const cards = seventhSection.cards || []

  return (
    <section className="mb-20">
      {heading && <SectionHeader number={number} title={heading} subtitle={description} />}
      <Card className="p-6 border-2 border-gray-200">
        {tableRows.length > 0 && (
          <>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    {tableColumnHeaders.map((header, index) => (
                      <TableHead key={index} className="text-base">
                        {header}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableRows.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.05)", scale: 1.01 }}
                      className="cursor-pointer transition-colors"
                    >
                      <TableCell className="text-gray-900">{row.column1 || ''}</TableCell>
                      <TableCell className="text-lg text-gray-900">{row.column2 || ''}</TableCell>
                      <TableCell>
                        {row.column3 && (
                          <Badge 
                            variant={row.column3Color === 'red' ? 'default' : 'secondary'}
                            className={`${row.column3Color === 'red' ? 'bg-red-600 text-white' : 'bg-black text-white'} text-base px-3 py-1 hover:scale-110 transition-transform`}
                          >
                            {row.column3}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">{row.column4 || ''}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
            {tableDescription && (
              <p className="text-xs text-gray-500 mt-4">
                {tableDescription}
              </p>
            )}

            {cards.length > 0 && (
              <>
                <Separator className="my-6 bg-gray-300" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {cards.map((card, index) => (
                    <div key={index} className="h-full flex flex-col">
                      <h4 className="mb-2 text-gray-900">{card.heading || ''}</h4>
                      <p className="text-sm text-gray-700 flex-1">{card.description || ''}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </section>
  )
}

