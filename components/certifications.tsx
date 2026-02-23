"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import workshop1 from "@/public/workshop1.jpg";

const certifications = [
  {
    title: "Professional Skills for the Workplace",
    issuer: "University of California, Davis (Coursera)",
    year: "—",
    image: workshop1,
  },
];

export function Certifications() {
  return (
    <section id="workshops" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional development and specialization credentials.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                        <img
                          src={cert.image.src || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {cert.title}
                      </h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span>{cert.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-lg">{cert.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img
                      src={cert.image.src || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full rounded-lg"
                    />
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">
                        Issued by: {cert.issuer}
                      </span>
                      <span className="text-muted-foreground">
                        Year: {cert.year}
                      </span>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
