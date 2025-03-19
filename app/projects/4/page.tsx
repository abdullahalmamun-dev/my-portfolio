"use client";

import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Mail, Code2, Database, Github, ExternalLink, Calendar, Clock, User, Utensils, ListPlus, Shield, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const images = [
    "/images/projects/foodies/1.webp",
    "/images/projects/foodies/2.webp",
    "/images/projects/foodies/3.webp",
    "/images/projects/foodies/4.webp",
    "/images/projects/foodies/5.webp",
  ];

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-900 dark:to-amber-950">
      {/* Header with Navigation */}
      <header className="bg-white dark:bg-slate-900 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400 bg-clip-text text-transparent"
          >
            <Link href="/" className="flex items-center gap-2">
              <span>Abdullah Al Mamun</span>
            </Link>
          </motion.h2>
          <nav>
            <Button variant="ghost" asChild>
              <Link href="/">Back to Portfolio</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Project Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mb-16"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-orange-600 via-amber-500 to-red-500 dark:from-orange-400 dark:via-amber-400 dark:to-red-400 bg-clip-text text-transparent"
          >
            Foodies Restaurant
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Foodies Restaurant Management System Mockup"
              src="/foodies-mockup.webp"
              height={800}
              width={2000}
              className="w-full object-cover"
            />
          </motion.div>
          
          {/* Project Quick Info */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
          >
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-orange-600 dark:text-orange-400 mb-2">
                <User className="h-5 w-5 mr-2" />
                <span className="font-semibold">Client</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Foodie Restaurant</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-orange-600 dark:text-orange-400 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">2 Weeks</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-orange-600 dark:text-orange-400 mb-2">
                <ExternalLink className="h-5 w-5 mr-2" />
                <span className="font-semibold">Live Demo</span>
              </div>
              <a 
                href="https://foodies-restaurant-client.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline truncate max-w-[200px]"
              >
                View Website
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4">
              <div className="flex items-center text-orange-600 dark:text-orange-400 mb-2">
                <Github className="h-5 w-5 mr-2" />
                <span className="font-semibold">Source Code</span>
              </div>
              <a 
                href="https://github.com/abdullahalmamun-dev/foodies-restaurant-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 hover:underline truncate max-w-[200px]"
              >
                GitHub Repository
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            {/* Overview Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400 flex items-center">
                <span className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-full mr-3">
                  <Utensils className="h-6 w-6" />
                </span>
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Foodies Restaurant is a restaurant management website designed to streamline the process of managing a dynamic menu. 
                The platform enables the restaurant to efficiently add, update, and remove various types of dishes, allowing for a 
                constantly updated menu that meets customer expectations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The goal of the Foodies project is to provide restaurant staff with an easy-to-use, intuitive system to keep their 
                menu current, ensuring they can respond to seasonal changes, ingredient availability, and customer preferences in real-time.
              </p>
            </motion.section>

            {/* Challenges Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-amber-600 dark:text-amber-400 flex items-center">
                <span className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full mr-3">
                  <Database className="h-6 w-6" />
                </span>
                Challenges
              </h2>
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Efficient Menu Management</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With numerous dishes offered, the restaurant needed a solution to add, edit, or remove dishes seamlessly. Managing 
                    such a dynamic menu required a well-organized interface that staff could navigate quickly without extensive training.
                  </p>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Responsive Design for Various Devices</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Restaurant managers and staff may access the system from different devices, such as desktop computers, tablets, and 
                    mobile phones. Ensuring consistent functionality and accessibility across all devices was essential.
                  </p>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Data Accuracy and Security</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With frequent updates, it was crucial to implement a secure system for data management, ensuring that the menu 
                    reflected only the most accurate and current offerings while safeguarding sensitive business data.
                  </p>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">User-Friendly Interface for Non-Technical Users</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Many restaurant staff members may not be tech-savvy, so the platform needed an intuitive design to ensure that 
                    users could perform tasks without frustration or error.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Solutions Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400 flex items-center">
                <span className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full mr-3">
                  <Code2 className="h-6 w-6" />
                </span>
                Solutions
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2">
                      Intuitive Menu Management Interface
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Built using React for interactive components, the platform provides a user-friendly dashboard that allows staff to 
                      easily add, update, and remove dishes. MongoDB was implemented for data storage, organizing dishes by categories.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-2">
                      Responsive Design with Tailwind CSS
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Tailwind CSS was used to create a responsive design that adjusts seamlessly across desktops, tablets, and mobile devices, 
                      ensuring that the platform is accessible wherever staff need it.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-300 mb-2">
                      Secure Data Handling with Firebase Authentication
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Firebase authentication secures access to the platform, allowing only authorized users to make changes. This ensures that 
                      menu updates are managed by designated staff, maintaining data integrity and security.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-300 mb-2">
                      Visual Dashboard for Easy Navigation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The platform&apos;s dashboard uses a clear visual layout, with options for adding, updating, and deleting dishes that are 
                      accessible with minimal clicks. Dish entries display images, descriptions, and pricing at a glance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
          
          <div className="lg:col-span-4">
            {/* Results & Impact */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-amber-600 dark:text-amber-400">Results & Impact</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Simplified Menu Management</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Staff can now quickly adapt the menu to seasonal items, daily specials, and customer demands, enhancing 
                    operational efficiency.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Device-Agnostic Accessibility</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The responsive design has made the platform accessible across devices, increasing flexibility and convenience 
                    for managers and staff.
                  </p>
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Improved Operational Efficiency</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With a streamlined system, Foodies has reduced the time needed for menu adjustments, improving the restaurant&apos;s 
                    ability to deliver a high-quality dining experience.
                  </p>
                </div>
              </div>
            </motion.section>
            
            {/* Technologies Used */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.6 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">Technologies</h2>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">
                  React.js
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">
                  Express.js
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">
                  Firebase
                </span>
              </div>
            </motion.section>
            
            {/* Key Features */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Key Features</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-2 mt-1">
                    <ListPlus className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Dynamic menu management system</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-2 mt-1">
                    <Shield className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Secure staff authentication</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-2 mt-1">
                    <Utensils className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Category-based dish organization</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-2 mt-1">
                    <Workflow className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">User-friendly management dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-red-100 dark:bg-red-900/30 p-1 rounded-full mr-2 mt-1">
                    <Clock className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Real-time menu updates</span>
                </li>
              </ul>
            </motion.section>
          </div>
        </div>

        {/* Project Gallery */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.8 }}
          className="my-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-amber-500 to-red-500 dark:from-orange-400 dark:via-amber-400 dark:to-red-400 bg-clip-text text-transparent">
            Project Gallery
          </h2>
          
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src,index) => (
                <PhotoView key={index} src={src}>
                  <div className="relative overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video">
                      <Image
                        src={src}
                        alt={`Foodies Restaurant Image ${index}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-medium">View Fullscreen</p>
                    </div>
                  </div>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ delay: 0.9 }}
          className="bg-gradient-to-br from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600 rounded-2xl overflow-hidden shadow-xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-orange-50 mb-10 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you&apos;d like to collaborate on building exceptional digital experiences!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 transition-colors px-8 py-6 rounded-full text-lg font-semibold"
            asChild
          >
            <a href="mailto:mdabdullah.allinfozone@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Abdullah Al Mamun. All rights reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <Link href="https://github.com/abdullahalmamun-dev" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullahalmamundev/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:mdabdullah.allinfozone@gmail.com" 
              className="text-gray-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
