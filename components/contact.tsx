"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Globe, MapPin, Send, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-hot-toast";
import { containsVulgarWords, getVulgarWords } from "@/utils/vulgar-words";
import { useState } from "react";

const contactSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sableakshay100@gmail.com",
    href: "mailto:sableakshay100@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8600858026",
    href: "tel:+918600858026",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "akshaysable17",
    href: "https://www.linkedin.com/in/akshaysable17",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const watchedMessage = watch("message", "");
  const watchedSubject = watch("subject", "");

  const onSubmit = async (data: ContactFormData) => {
    // Check for vulgar words in message and subject
    const messageHasVulgar = containsVulgarWords(data.message);
    const subjectHasVulgar = containsVulgarWords(data.subject);

    if (messageHasVulgar || subjectHasVulgar) {
      const vulgarWordsFound = [
        ...getVulgarWords(data.message),
        ...getVulgarWords(data.subject),
      ];

      toast.error(
        `Please remove inappropriate language: ${vulgarWordsFound.join(", ")}`,
        {
          duration: 5000,
          style: {
            background: "#ef4444",
            color: "white",
          },
        },
      );
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    await toast.promise(
      (async () => {
        try {
          // const response = await fetch("https://formspree.io/f/mkgqpvro", {
          const response = await fetch("", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          if (response.ok) {
            setStatus("success");
            reset();
          } else {
            setStatus("error");
            throw new Error("Failed to send message");
          }
        } catch (error) {
          setStatus("error");
          throw error;
        }
      })(),
      {
        loading: "Sending message...",
        success: "Message sent successfully! I'll get back to you soon.",
        error: "Failed to send message. Please try again.",
      },
    );

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Let's
            discuss how we can work together!
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information with Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of these channels. I
                typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Info List */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229376.55246094102!2d72.71412823032126!3d19.082482211550346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1760372963094!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229376.55246094102!2d72.71412823032126!3d19.082482211550346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1760372963094!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                    <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <div>
                          <p className="font-medium text-sm">Mumbai</p>
                          <p className="text-xs text-muted-foreground">
                            Maharashtra, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                  autoComplete="off"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter first name"
                        {...register("firstName")}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500"
                        >
                          {errors.firstName.message}
                        </motion.p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter last name"
                        {...register("lastName")}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-500"
                        >
                          {errors.lastName.message}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Project Collaboration"
                      {...register("subject")}
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.subject.message}
                      </motion.p>
                    )}
                    {containsVulgarWords(watchedSubject) && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-orange-500"
                      >
                        ⚠️ Please use professional language in your subject
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                    {containsVulgarWords(watchedMessage) && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-orange-500"
                      >
                        ⚠️ Please use professional language in your message
                      </motion.p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {watchedMessage.length}/1000 characters
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
