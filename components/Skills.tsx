"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Shadcn/ui",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git & GitHub",
        "Vercel",
        "Docker",
        "Firebase",
        "AWS",
        "VS Code",
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Communication",
        "Agile",
        "Leadership",
        "Mentoring",
      ],
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

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills &<span className="text-pink-500 animate-pulse"> Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of development
            experience
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <h3 className="text-2xl tracking-wider font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-sm font-medium cursor-pointer hover:scale-110 transition-transform"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
