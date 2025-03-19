"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowLeft, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export default function Resume() {
  const resumeRef = useRef(null);



  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>

        <Card className="  max-w-4xl mx-auto p-8 shadow-lg" ref={resumeRef}>
          <div className="md:px-10 flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-5 justify-center">
              {/* Profile Photo */}
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-md">
                <Image
                  src="/IMG_20220814_133023_Bokeh.jpg" 
                  alt="Abdullah Al Mamun"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="pt-16">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Abdullah Al Mamun</h1>
                <p className="text-xl text-muted-foreground">Aspiring Backend Developer || MERN Stack</p>
              </div>
            </div>
            
          </div>

          {/* Contact Information */}
          <section className="mb-8 flex flex-wrap gap-4 bg-primary/5 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span>+88 01571504613</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span>mdabdullah.allinfozone@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span>House 95, Road 13, Nabinagar Housing, Mohammadpur, Dhaka-1207</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Linkedin className="h-4 w-4 text-primary" />
              <a href="https://www.linkedin.com/in/abdullahalmamundev/"><span>abdullahalmamundev</span></a>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Github className="h-4 w-4 text-primary" />
              <a href="https://github.com/abdullahalmamun-dev"><span>abdullahalmamun-dev</span></a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Professional Summary</h2>
            <p className="text-muted-foreground">
              A motivated individual skilled in backend development with the MERN stack, seeking an opportunity to apply my skills and support company growth. Excited to contribute effectively and grow in a collaborative team environment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2 text-primary">Backend Development</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Express JS, Node JS, and MongoDB</li>
                  <li>RESTful APIs and scalable server-side solutions</li>
                  <li>Database design and optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-primary">Frontend Development</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Next JS, React JS, Typescript and Tailwind CSS</li>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Responsive UI design</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-medium mb-2 text-primary">Additional Skills</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Full-stack development and seamless integration of frontend and backend</li>
                <li>Cross-browser compatibility optimization</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
            <div className="space-y-6">
              <div className="bg-accent/5 p-4 rounded-lg">
                <h3 className="text-xl font-medium text-accent">Investment Tracker System</h3>
                <p className="text-sm text-muted-foreground mb-2">Next JS, Express JS, TypeScript, MongoDB</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Built a full-stack Investment Tracker with Next.js, TypeScript, and MongoDB, featuring CRUD and authentication.</li>
                  <li>Developed an interactive dashboard with dynamic investment analytics and automated email reports.</li>
                </ul>
                <div className="flex gap-2 mt-2">
                  <Link href="#" className="text-xs text-primary hover:underline">Live Link</Link>
                  <Link href="#" className="text-xs text-primary hover:underline">Source Code</Link>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg">
                <h3 className="text-xl font-medium text-primary">Mediore - Medicine Store</h3>
                <p className="text-sm text-muted-foreground mb-2">React JS, Express JS</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Developed &quot;Mediore,&quot; an e-commerce site for medical products with secure login, smooth checkout, and real-time price updates.</li>
                  <li>Built a responsive design with Firebase authentication and automatic price calculations for a seamless user experience.</li>
                </ul>
                <div className="flex gap-2 mt-2">
                  <Link href="#" className="text-xs text-primary hover:underline">Live Link</Link>
                  <Link href="#" className="text-xs text-primary hover:underline">Source Code</Link>
                </div>
              </div>

              <div className="bg-secondary/5 p-4 rounded-lg">
                <h3 className="text-xl font-medium text-secondary">Foodies Restaurant - A Restaurant Management System</h3>
                <p className="text-sm text-muted-foreground mb-2">React JS, Express JS</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Built a restaurant management site with React, Tailwind CSS, and MongoDB for easy menu updates.</li>
                  <li>Designed a responsive UI with Firebase authentication for secure access.</li>
                </ul>
                <div className="flex gap-2 mt-2">
                  <Link href="#" className="text-xs text-primary hover:underline">Live Link</Link>
                  <Link href="#" className="text-xs text-primary hover:underline">Source Code</Link>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium">Bachelor in Computer Science and Engineering</h3>
                <p className="text-primary font-medium">International University of Business Agriculture and Technology</p>
                <p className="text-muted-foreground">2021 - 2024 (Final Year) • CGPA: 3.55</p>
              </div>
              <div>
                <h3 className="text-xl font-medium">Higher Secondary Certificate</h3>
                <p className="text-primary font-medium">Govt. Science College, Tejgaon</p>
                <p className="text-muted-foreground">2018 - 2020 • GPA: 5.00</p>
              </div>
            </div>
          </section>
        </Card>
      </div>
    </main>
  );
}
