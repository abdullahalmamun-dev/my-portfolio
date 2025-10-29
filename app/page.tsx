"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Contact from "../components/Contact";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      {/* Animated Background Elements - More Vibrant */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Purple Glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 blur-3xl opacity-30"
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: "10%", left: "-10%" }}
        />
        {/* Pink Glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-600 to-rose-400 blur-3xl opacity-30"
          animate={{ x: [100, -100, 100], y: [100, 0, 100] }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: "10%", right: "-10%" }}
        />
        {/* Cyan Glow */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-3xl opacity-30"
          animate={{ x: [-100, 0, -100], y: [-50, 50, -50] }}
          transition={{ duration: 30, repeat: Infinity }}
          style={{ top: "50%", left: "50%" }}
        />
        {/* Yellow Glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 blur-3xl opacity-25"
          animate={{ x: [50, -50, 50], y: [100, -100, 100] }}
          transition={{ duration: 22, repeat: Infinity }}
          style={{ top: "70%", right: "5%" }}
        />
        {/* Green Glow */}
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 blur-3xl opacity-25"
          animate={{ x: [-50, 50, -50], y: [-100, 100, -100] }}
          transition={{ duration: 28, repeat: Infinity }}
          style={{ bottom: "5%", left: "10%" }}
        />
      </div>

      <Hero />
      <Services />
      <Skills />
      <Projects />
      <CTA />
      <Contact />
    </div>
  );
}
