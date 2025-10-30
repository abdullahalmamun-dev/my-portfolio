"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@example.com",
      href: "mailto:contact@example.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+880 1XXX XXXXXX",
      href: "tel:+8801XXXXXXXXX",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-pink-500 animate-pulse">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to start your next project? I would love to
            hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all cursor-pointer">
                <motion.div
                  className="w-12 flex justify-center h-12 mx-auto mb-4 items-center text-primary"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {method.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-muted-foreground">{method.value}</p>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-primary/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-input border-primary/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-input border-primary/20"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="bg-input border-primary/20"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="bg-input border-primary/20 min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
