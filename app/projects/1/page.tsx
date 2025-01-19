"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code2, Database, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 5,
    title: "Event Planner BD-Event Management",
    description:
      "A dynamic platform uniting Bangladesh's artistic and creative community by showcasing diverse cultural events. From art and dance to technology and cuisine, it serves as a central hub for discovering and participating in cultural activities. Built with React, Tailwind CSS, Express.js, MongoDB, and Firebase, the platform delivers a seamless, engaging experience on all devices.",
    image: "/Event-Planner-BD-Mockup.webp",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    description:
      "Real-time social media analytics dashboard with data visualization.",
    image: "https://source.unsplash.com/random/800x600?dashboard",
    tags: ["React", "Firebase", "D3.js"],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Collaborative task management platform with real-time updates.",
    image: "https://source.unsplash.com/random/800x600?task",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool for marketers and writers.",
    image: "https://source.unsplash.com/random/800x600?ai",
    tags: ["Next.js", "OpenAI", "TailwindCSS"],
  },
];

export default function Home() {
  return (
    <>
      <div className="min-h-screen hero-gradient md:max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="md:flex">
          <div className="md:w-1/2 flex justify-center ">
            <Image
            className="md:px-20 md:py-20 p-4  "
              alt=""
              height={100}
              width={1000}
              src="/IMG_20220814_133023_Bokeh.jpg"
            ></Image>
          </div>
          <div className="container mx-auto px-4 md:py-56 md:w-1/2">
            <div className="flex flex-col items-center text-center space-y-6">
              <h1 className="text-6xl font-bold tracking-tight gradient-text">
                Abdullah Al Mamun
              </h1>
              <p className="text-2xl text-primary">MERN Stack Web Developer</p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="card-hover">
                  <Link href="https://github.com/abdullahalmamun-dev">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="card-hover">
                  <Link href="https://www.linkedin.com/in/abdullahalmamundev/">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="card-hover">
                  <Link href="mailto:abdullah.cto@allinfozone.tech">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <Button asChild className="mt-8 bg-accent hover:bg-accent/90">
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              My Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 card-hover border-primary/20">
                <Code2 className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h3>
                <p className="text-muted-foreground">
                  Next.js, React.js, HTML, CSS, JavaScript
                </p>
              </Card>
              <Card className="p-6 card-hover border-accent/20">
                <Database className="w-12 h-12 mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-2">
                  Backend Development
                </h3>
                <p className="text-muted-foreground">
                  Node.js, Express.js, MongoDB, Firebase
                </p>
              </Card>
              <Card className="p-6 card-hover border-secondary/20">
                <Globe2 className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  RESTful APIs, Git, Best Practices
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="md:py-20">
          <div className="container mx-auto px-4 ">
            <h2 className="text-4xl font-bold text-center md:mb-12 gradient-text">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden card-hover h-fit">
                  <Image
                  
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  ></Image>

                  <div className="p-6">
                    <h3 className="text-lg text-center md:text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-muted-foreground mb-4 text-justify">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      asChild
                      className="hover:bg-primary/5 "
                    >
                      <Link href={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-t from-primary/5 via-accent/5 to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12 gradient-text">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always interested in hearing about new projects and
              opportunities. Feel free to reach out if you&apos;d like to
              collaborate!
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="mailto:your.email@example.com">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
