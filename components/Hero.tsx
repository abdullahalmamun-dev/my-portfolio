"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <motion.div
              className="mb-4 inline-block w-fit"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 backdrop-blur-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold text-sm">
                  👋 Welcome to my digital space
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              I'm{" "}
              <span className="gradient-text animate-pulse">
                Abdullah Al Mamun
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Full-Stack Developer crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                beautiful & scalable
              </span>{" "}
              web applications. Specializing in MERN stack with a passion for
              exceptional UX and clean code.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-600/50"
                >
                  View My Work
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400"
                >
                  <Download className="mr-2" />
                  Download CV
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="flex gap-4" variants={itemVariants}>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 hover:from-purple-600/40 hover:to-pink-600/40 flex items-center justify-center transition-all border border-purple-500/30 hover:border-purple-400/60"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="text-purple-400" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/40 hover:to-blue-600/40 flex items-center justify-center transition-all border border-cyan-500/30 hover:border-cyan-400/60"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="text-cyan-400" />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-600/20 to-yellow-600/20 hover:from-orange-600/40 hover:to-yellow-600/40 flex items-center justify-center transition-all border border-orange-500/30 hover:border-orange-400/60"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(249, 115, 22, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="text-orange-400" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual - Colorful Animated Card */}
          <motion.div
            variants={itemVariants}
            className="hidden md:flex justify-center items-center"
          >
            <motion.div
              className="w-full max-w-md aspect-square rounded-3xl overflow-hidden shine-effect"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 p-1 rounded-3xl">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
                  {/* Inner gradient elements */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-600/20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-8xl mb-4"
                      animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      👨‍💻
                    </motion.div>
                    <p className="text-2xl font-bold gradient-text">
                      Full-Stack Developer
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Building the web 🚀
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
