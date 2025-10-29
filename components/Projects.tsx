"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Event Planner BD",
      description:
        "A dynamic platform uniting Bangladesh's artistic and creative community by showcasing diverse cultural events.",
      image: "🎪",
      tags: ["React.js", "MongoDB", "Node.js", "Firebase"],
      github: "https://github.com",
      demo: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Emperal Travels",
      description:
        "Online travel management platform with tourist spot listings and user-generated content features.",
      image: "✈️",
      tags: ["React.js", "MongoDB", "Express.js"],
      github: "https://github.com",
      featured: true,
    },
    {
      id: 3,
      title: "Mediore - Medicine Store",
      description:
        "E-commerce platform for medical products with secure payment integration and user authentication.",
      image: "💊",
      tags: ["React.js", "SSLCommerz", "MongoDB", "Node.js"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Foodies Restaurant",
      description:
        "Restaurant management system with dynamic menu management and order processing capabilities.",
      image: "🍽️",
      tags: ["React.js", "MongoDB", "Express.js", "Firebase"],
      github: "https://github.com",
    },
    {
      id: 5,
      title: "Nautical Nexus",
      description:
        "Boat booking system with extensive vessel listings and real-time availability management.",
      image: "⛵",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com",
    },
    {
      id: 6,
      title: "Computers Corner",
      description:
        "Point of Sale software with inventory management and sales reporting features.",
      image: "💻",
      tags: ["PHP", "MySQL", "Tailwind CSS"],
      github: "https://github.com",
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

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and
            problem-solving approaches
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <Card className="h-full overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/50 transition-all">
                <div className="relative h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="text-6xl group-hover:scale-125 transition-transform duration-300"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {project.image}
                  </motion.div>
                  {project.featured && (
                    <Badge className="absolute top-4 right-4 bg-accent text-foreground">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" className="flex-1" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="outline" className="group">
            View All Projects
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
