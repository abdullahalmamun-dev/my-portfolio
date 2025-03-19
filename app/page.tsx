"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Code2, Database, Globe2, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Event Planner BD",
    description:
      "A dynamic platform uniting Bangladesh's artistic and creative community by showcasing diverse cultural events. From art and dance to technology and cuisine, it serves as a central hub for discovering and participating in cultural activities.",
    image: "/Event-Planner-BD-Mockup.webp",
    tags: ["Next.js", "SSLCommerz", "MongoDB"],
    github: "https://github.com/abdullahalmamun-dev/event-planner-bd",
    demo: "https://event-planner-bd.vercel.app/"
  },
  {
    id: 2,
    title: "Emperal Travels",
    description:
      "The website offers users access to an extensive list of tourist spots, with detailed descriptions to aid decision-making. In addition, the platform encourages user contributions, allowing individuals to share their favorite travel destinations and experiences. ",
    image: "/Emperal-Travels-Mockup.webp",
    tags: ["React", "Firebase", "D3.js"],
    github: "https://github.com/abdullahalmamun-dev/emperal-travels-client",
  },
  {
    id: 3,
    title: "Mediore - Medicine Store",
    description:
      "An e-commerce platform created to offer a seamless and user-friendly online shopping experience for medical products. Designed to allow users to browse, add to cart, and purchase medicines with ease, also includes a secure login system, a streamlined checkout process, and automatic price calculations.",
    image: "/Mediore-Mockup.webp",
    tags: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/abdullahalmamun-dev/task-management",
  },
  {
    id: 4,
    title: "Foodies Restaurant",
    description:
      "Foodies Restaurant is a restaurant management website designed to streamline the process of managing a dynamic menu. The platform enables the restaurant to efficiently add, update, and remove various types of dishes, allowing for a constantly updated menu that meets customer expectations.",
    image: "/foodies-mockup.webp",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com/abdullahalmamun-dev/investment-tracker-system",
  },
  {
    id: 4,
    title: "Foodies Restaurant",
    description:
      "Foodies Restaurant is a restaurant management website designed to streamline the process of managing a dynamic menu. The platform enables the restaurant to efficiently add, update, and remove various types of dishes, allowing for a constantly updated menu that meets customer expectations.",
    image: "/foodies-mockup.webp",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com/abdullahalmamun-dev/investment-tracker-system",
  },
  {
    id: 4,
    title: "Foodies Restaurant",
    description:
      "Foodies Restaurant is a restaurant management website designed to streamline the process of managing a dynamic menu. The platform enables the restaurant to efficiently add, update, and remove various types of dishes, allowing for a constantly updated menu that meets customer expectations.",
    image: "/foodies-mockup.webp",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com/abdullahalmamun-dev/investment-tracker-system",
  },
  {
    id: 4,
    title: "Foodies Restaurant",
    description:
      "Foodies Restaurant is a restaurant management website designed to streamline the process of managing a dynamic menu. The platform enables the restaurant to efficiently add, update, and remove various types of dishes, allowing for a constantly updated menu that meets customer expectations.",
    image: "/foodies-mockup.webp",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    github: "https://github.com/abdullahalmamun-dev/investment-tracker-system",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto bg-gradient-to-br from-background via-background/95 to-background">
      {/* Hero Section*/}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-8 text-center md:text-left order-2 md:order-1">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">MERN Stack Developer</span>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Abdullah Al Mamun
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Fullstack Web Developer with a focus on backend architecture. Building scalable web applications that deliver efficient and reliable performance.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                  <Link href="https://github.com/abdullahalmamun-dev" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                  <Link href="https://www.linkedin.com/in/abdullahalmamundev/" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                  <Link href="mailto:mdabdullah.allinfozone@gmail.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="pt-4">
                <Button asChild className="rounded-full bg-accent hover:bg-accent/90 transition-all">
                  <Link href="/resume" className="flex items-center gap-2">
                    View Resume <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="relative h-80 md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  alt="Abdullah Al Mamun"
                  fill
                  src="/IMG_20220814_133023_Bokeh.jpg"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section*/}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">What I Do</span>
            <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 border-none bg-gradient-to-br from-background to-primary/5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Code2 className="w-12 h-12 mb-6 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <p className="text-muted-foreground mb-4">
                Building responsive and intuitive user interfaces with modern frameworks and libraries.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">Next.js</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">TypeScript</span>
              </div>
            </Card>
            
            <Card className="p-8 border-none bg-gradient-to-br from-background to-accent/5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Database className="w-12 h-12 mb-6 text-accent" />
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <p className="text-muted-foreground mb-4">
                Creating robust server-side applications and RESTful APIs for seamless data management.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Node.js</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">Express</span>
                <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs">MongoDB</span>
              </div>
            </Card>
            
            <Card className="p-8 border-none bg-gradient-to-br from-background to-secondary/5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Globe2 className="w-12 h-12 mb-6 text-secondary" />
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-4">
                Implementing best practices and modern development workflows for high-quality web applications.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">REST APIs</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Git</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs">Docker</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects Section*/}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background/90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">My Work</span>
            <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      className="rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                      variant="outline"
                      asChild
                    >
                      <Link href={`/projects/${project.id}`} className="flex items-center gap-2">
                        View Details <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                    {project.github && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                        asChild
                      >
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section*/}
      <section className="py-20 bg-gradient-to-t from-background to-primary/5 rounded-t-3xl">
        <div className="container mx-auto px-4 text-center">
          <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium">Get In Touch</span>
          <h2 className="text-4xl font-bold mt-4 mb-8 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out if you&apos;d like to
            collaborate or discuss how I can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              <Link href="mailto:mdabdullah.allinfozone@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" /> Email Me
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full hover:bg-primary/10 hover:text-primary transition-all">
              <Link href="/contact" className="flex items-center gap-2">
                Contact Form <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
