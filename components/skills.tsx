"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const skillsData = [
  {
    name: "Python",
    category: "Language",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "BLE",
    category: "Protocols",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png",
  },
  {
    name: "SPI",
    category: "Protocols",
    icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "I2C",
    category: "Protocols",
    icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "WebSocket",
    category: "Protocols",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
  },
  {
    name: "HTTP / UDP",
    category: "Protocols",
    icon: "https://cdn-icons-png.flaticon.com/512/669/669764.png",
  },
  {
    name: "KiCAD",
    category: "PCB & Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kicad/kicad-original.svg",
  },
  {
    name: "Easy EDA",
    category: "PCB & Tools",
    icon: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
  },
  {
    name: "PCB Design",
    category: "PCB & Tools",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910773.png",
  },
  {
    name: "nRF52840",
    category: "Embedded",
    icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "ESP32",
    category: "Embedded",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/embeddedc/embeddedc-original.svg",
  },
  {
    name: "Low-Power Firmware",
    category: "Embedded",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
  },
  {
    name: "OpenCV",
    category: "ML / Vision",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  {
    name: "Pandas",
    category: "ML / Vision",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  {
    name: "Matplotlib",
    category: "ML / Vision",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  {
    name: "Pillow / PIL",
    category: "ML / Vision",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Machine Learning",
    category: "ML / Vision",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "Problem Solving",
    category: "Others",
    icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "Teamwork",
    category: "Others",
    icon: "https://cdn-icons-png.flaticon.com/512/1946/1946429.png",
    color: "#ffff",
  },
  {
    name: "Analog Electronics",
    category: "Others",
    icon: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
  },
];

const categories = [
  "All",
  "Language",
  "Protocols",
  "PCB & Tools",
  "Embedded",
  "ML / Vision",
  "Others",
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Embedded systems, IoT protocols, PCB design, and ML tools I use in research and projects.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${activeCategory}-${skill.name}`}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-4 text-center">
                    <div className="mb-3">
                      {/* <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 mx-auto"
                      /> */}
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-10 h-10 mx-auto"
                        style={{
                          filter: skill.color
                            ? `drop-shadow(0 0 0 ${skill.color})`
                            : "none",
                        }}
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="text-xs group-hover:border-primary/50 transition-colors duration-300"
                    >
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Count */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Showing {filteredSkills.length}{" "}
            {activeCategory === "All"
              ? "technologies"
              : activeCategory.toLowerCase() + " skills"}
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}
