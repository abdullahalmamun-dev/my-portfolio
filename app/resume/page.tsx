"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>

        <Card className="max-w-4xl mx-auto p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Abdullah Al Mamun</h1>
              <p className="text-xl text-muted-foreground">MERN Stack Web Developer</p>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
            <p className="text-muted-foreground">
              Experienced MERN Stack Developer with 6 years of expertise in building scalable web applications.
              Proven track record of delivering high-quality solutions and leading development teams.
              Passionate about creating intuitive user experiences and implementing best practices in web development.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Next.js & React.js</li>
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript/TypeScript</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>Node.js & Express.js</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium">Senior Web Developer</h3>
                <p className="text-muted-foreground">Company Name • 2020 - Present</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Led development of multiple full-stack web applications</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Implemented CI/CD pipelines and improved deployment processes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium">Web Developer</h3>
                <p className="text-muted-foreground">Previous Company • 2018 - 2020</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>Developed and maintained client websites</li>
                  <li>Collaborated with design team to implement UI/UX improvements</li>
                  <li>Optimized application performance and loading times</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <div>
              <h3 className="text-xl font-medium">Bachelor of Science in Computer Science</h3>
              <p className="text-muted-foreground">University Name • 2014 - 2018</p>
            </div>
          </section>
        </Card>
      </div>
    </main>
  );
}