"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Indian Institute of Technology Bombay",
    position: "Research Assistant",
    duration: "November 2023 – Present",
    location: "Mumbai, Maharashtra, India",
    description:
      "Working on research projects in IoT and embedded systems. Building vehicle monitoring systems, wearable health solutions, and industrial sensor systems with BLE, WebSocket, and custom PCB design.",
    type: "current",
  },
  {
    company: "National Centre for Aerospace Innovation and Research (NCAIR), IIT Bombay",
    position: "Research Intern (Internet of Things)",
    duration: "August 2023 – November 2023",
    location: "Mumbai, Maharashtra, India",
    description:
      "Worked on research projects with microcontrollers (ESP32, RPi Pico, Teensy). PCB circuit design using KiCAD and Easy EDA. Developed analog electronics projects including custom amplifier and PCB.",
    type: "intern",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Research Assistant at IIT Bombay | IoT, Embedded Systems & PCB Design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.position}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`h-full relative overflow-hidden ${
                  exp.type === "current" ? "border-primary shadow-lg" : ""
                }`}
              >
                <div className="absolute top-0 right-0 flex gap-2">
                  {exp.type === "current" && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                      Current
                    </div>
                  )}
                  {exp.type === "intern" && (
                    <div className="bg-orange-500 text-white px-3 py-1 text-xs font-medium">
                      Internship
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg mb-2 pr-20">
                    {exp.position}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Building className="w-4 h-4" />
                    <span className="font-medium text-sm">{exp.company}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.description}
                  </p>
                  {/* {exp.type === "intern" && (
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="text-xs border-orange-200 text-orange-700"
                      >
                        Learning Experience
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs border-orange-200 text-orange-700"
                      >
                        3 Months
                      </Badge>
                    </div>
                  )} */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
