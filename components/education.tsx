"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Bachelor of Engineering in Electronics and Telecommunication Engineering",
    field: "CGPA: 8.5/10",
    institution: "International Institute of Information Technology (I2IT), Pune",
    duration: "August 2019 – June 2023",
    location: "Pune, Maharashtra, India",
    type: "Bachelors",
  },
  {
    degree: "Diploma in Computer Engineering",
    field: "Percentage: 75.93%",
    institution: "Government Polytechnic Pune",
    duration: "June 2017 – July 2019",
    location: "Pune, Maharashtra, India",
    type: "Diploma",
  },
]

export function Education() {
  return (
    <section id="education" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background in electronics, telecommunication, and computer engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {edu.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{edu.degree}</CardTitle>
                  <p className="text-muted-foreground font-medium text-sm">{edu.field}</p>
                  <p className="text-base font-semibold text-primary mt-1">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
