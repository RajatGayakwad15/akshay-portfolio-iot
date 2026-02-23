"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Globe } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const languages = [
  { name: "English", level: "Full Professional", progress: 90, flag: "🇺🇸" },
  { name: "Hindi", level: "Full Professional", progress: 95, flag: "🇮🇳" },
  { name: "Marathi", level: "Native", progress: 100, flag: "🇮🇳" },
  { name: "Japanese", level: "Elementary", progress: 30, flag: "🇯🇵" },
]

const expertise = [
  { name: "Frontend Development", progress: 95 },
  { name: "Backend Development", progress: 90 },
  { name: "Full Stack Development", progress: 92 },
  { name: "Team Leadership", progress: 85 },
  { name: "Problem Solving", progress: 95 },
  { name: "Project Management", progress: 80 },
]

const certifications = [
  {
    title: "Laravel 11",
    issuer: "Udemy",
    year: "2025",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-2c908eb8-0f43-421e-808c-015553b02549.jpg?v=1753800192000",
  },
  {
    title: "React Query / TanStack Query",
    issuer: "Udemy",
    year: "2024",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-461b7ca4-6433-4078-b471-da35c183fade.jpg?v=1736399536000",
  },
  {
    title: "React - The Complete Guide 2025",
    issuer: "Udemy",
    year: "2024",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-f285a903-1775-4ace-a112-ad81bc02fb53.jpg?v=1742661571000",
  },
]

export function About() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null)

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  <CardTitle>Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <Badge variant="outline">{lang.level}</Badge>
                    </div>
                    <Progress value={lang.progress} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  <CardTitle>Expertise</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <CardTitle>Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-lg transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                              <img
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="font-semibold text-sm mb-2 line-clamp-2">{cert.title}</h3>
                            <div className="flex justify-between items-center text-xs text-muted-foreground">
                              <span>{cert.issuer}</span>
                              <span>{cert.year}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{cert.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full rounded-lg" />
                          <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Issued by: {cert.issuer}</span>
                            <span className="text-muted-foreground">Year: {cert.year}</span>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
