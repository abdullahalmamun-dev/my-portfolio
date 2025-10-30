"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code2, Database, Globe2, Zap, Shield, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description:
        "Beautiful, responsive interfaces with React, Next.js, and modern CSS frameworks.",
      gradient: "from-purple-600 to-pink-600",
      color: "from-purple-600/20 to-pink-600/20",
      border: "border-purple-500/30 hover:border-purple-400/60",
      shadow: "shadow-purple-600/30",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description:
        "Robust APIs and server solutions using Node.js, Express, and MongoDB.",
      gradient: "from-cyan-600 to-blue-600",
      color: "from-cyan-600/20 to-blue-600/20",
      border: "border-cyan-500/30 hover:border-cyan-400/60",
      shadow: "shadow-cyan-600/30",
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description:
        "Complete web applications from concept to deployment with seamless integration.",
      gradient: "from-emerald-600 to-green-600",
      color: "from-emerald-600/20 to-green-600/20",
      border: "border-emerald-500/30 hover:border-emerald-400/60",
      shadow: "shadow-emerald-600/30",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description:
        "Lightning-fast applications with optimized code, caching, and CDN integration.",
      gradient: "from-orange-600 to-yellow-600",
      color: "from-orange-600/20 to-yellow-600/20",
      border: "border-orange-500/30 hover:border-orange-400/60",
      shadow: "shadow-orange-600/30",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Best Practices",
      description:
        "Secure applications with authentication, encryption, and industry standards.",
      gradient: "from-red-600 to-pink-600",
      color: "from-red-600/20 to-pink-600/20",
      border: "border-red-500/30 hover:border-red-400/60",
      shadow: "shadow-red-600/30",
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Deployment & Maintenance",
      description:
        "Smooth deployments and ongoing support on cloud platforms like Vercel and AWS.",
      gradient: "from-indigo-600 to-purple-600",
      color: "from-indigo-600/20 to-purple-600/20",
      border: "border-indigo-500/30 hover:border-indigo-400/60",
      shadow: "shadow-indigo-600/30",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -15,
    },
  };

  return (
    <section id="services" className="py-20 px-4 md:px-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Services & <span className="text-pink-500 animate-pulse">Expertise</span>
          </h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to your business
            needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card
                className={`h-full p-8 bg-gradient-to-br ${service.color} border transition-all hover:shadow-2xl hover:${service.shadow} backdrop-blur-sm ${service.border}`}
              >
                <motion.div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} p-3 mb-6 text-white group-hover:scale-110 transition-transform`}
                  whileHover={{ rotate: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
