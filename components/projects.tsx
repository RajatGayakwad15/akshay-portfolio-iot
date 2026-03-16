"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Heart, Flame, Building2, Gauge, ThermometerSun, UserCheck, CircuitBoard, ScanFace, Cpu } from "lucide-react"

const projects = [
  {
    title: "Smart Tire Wear Prediction",
    description: "Integrated a comprehensive vehicle monitoring system with sensors for tire health, pressure, and location tracking. Engineered a two-hop relay mechanism to overcome BLE range limitations. TPMS, GPS, ultrasound tire wear, gyroscope RPM. Microcontroller: nRF52840, Espressif. Tech: BLE, SPI, I2C, WebSocket, HTTP, UDP. Designed and developed complex PCBs for the entire system.",
    icon: Car,
    technologies: ["BLE", "nRF52840", "WebSocket", "PCB Design", "TPMS", "GPS"],
    category: "IoT / Embedded",
  },
  {
    title: "IoT Wearable Health Jacket",
    description: "Integrated ECG, EEG, PPG (Pulse Oximeter), breath sensor, and kinematic sensors into a wearable vest to transmit data to a remote server for studying autonomic balance. Minimal user setup, reduced external interference. WebSocket for data transfer and one-click captive portal for WiFi and user details.",
    icon: Heart,
    technologies: ["ECG", "EEG", "PPG", "WebSocket", "Captive Portal"],
    category: "IoT / Wearables",
  },
  {
    title: "Welding Quality Analysis System",
    description: "Developed a system to analyze welding quality and monitor faulty welding. Measured DC current consumption, machine vibration, and RPM of the welding machine spool. Sensors: DC Current Sensor, Accelerometer (Vibration), Rotary Encoder.",
    icon: Flame,
    technologies: ["DC Current Sensor", "Accelerometer", "Rotary Encoder"],
    category: "Industrial IoT",
  },
  {
    title: "Elevator Monitoring Device",
    description: "Developed a system for monitoring lift operation and safety through sensor integration. MPU (vibration), rotary encoder (door rotation), ultrasonic (motion/presence). IoT device sends data wirelessly to a web server via WebSocket.",
    icon: Building2,
    technologies: ["MPU", "Rotary Encoder", "Ultrasonic", "WebSocket"],
    category: "IoT / Safety",
  },
  {
    title: "RPM Sensing Device for Fan Manufacturer",
    description: "Designed a system to monitor vibration of water pumps and measure fan RPM with high accuracy. Multiple sensor configurations for precise machine health diagnostics.",
    icon: Gauge,
    technologies: ["Vibration", "RPM", "Sensors"],
    category: "Industrial Monitoring",
  },
  {
    title: "Thermocouple Temperature Monitoring",
    description: "Interfaced multiple thermocouples to a microcontroller via SPI for multi-point data collection. Designed custom PCBs for a multi-node temperature monitoring system with wireless data transmission using UDP.",
    icon: ThermometerSun,
    technologies: ["SPI", "Thermocouples", "UDP", "PCB"],
    category: "Industrial IoT",
  },
  {
    title: "Time-of-Flight Sensor for Person Detection",
    description: "Implemented a time-of-flight sensor for person counting and presence detection, interfaced to the microcontroller via I2C protocol.",
    icon: UserCheck,
    technologies: ["I2C", "ToF Sensor"],
    category: "Embedded",
  },
  {
    title: "PCB Defects Detection using Machine Learning",
    description: "Supervised learning to detect defects in printed circuit boards. Compared ML models with image processing approaches. Under supervision of Dr S M M Naidu at I2IT Pune. Tools: OpenCV, Pillow/PIL, Pandas, Matplotlib.",
    icon: CircuitBoard,
    technologies: ["OpenCV", "Pillow", "Pandas", "Matplotlib", "ML"],
    category: "Academic / ML",
  },
  {
    title: "Face Recognition Entry System",
    description: "COVID-19 project to verify students/faculty using face recognition and non-contact temperature via MLX90614 IR sensor. Awarded Copyright.",
    icon: ScanFace,
    technologies: ["Python", "Face Recognition", "MLX90614"],
    category: "Academic",
  },
  {
    title: "PCB Design with Component Integration",
    description: "Worked with small circuits like rectifiers and filters. Full PCB process: design, etching, component mounting, and testing.",
    icon: Cpu,
    technologies: ["PCB Design", "Rectifiers", "Filters"],
    category: "Electronics",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            IoT, embedded systems, PCB design, and academic projects in electronics and telecommunication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <Badge variant="outline">{project.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 flex-1 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
