"use client";

import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Linkedin, Mail, Code2, Database, Globe2, Github, ExternalLink, Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/projects/event/1.webp",
  "/images/projects/event/4.webp",
  "/images/projects/event/2.webp",
  "/images/projects/event/4.webp",
  "/images/projects/event/6.webp",
  "/images/projects/event/5.webp",
];

export default function ProjectDetails() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen max-w-screen-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header with Navigation */}
      <header className="bg-white dark:bg-slate-900 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent"
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
            className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          >
            Event Planner BD
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Event Planner BD Mockup"
              src="/Event-Planner-BD-Mockup.webp"
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
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-2">
                <User className="h-5 w-5 mr-2" />
                <span className="font-semibold">Client</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Event Planner BD</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">2 Weeks</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-2">
                <ExternalLink className="h-5 w-5 mr-2" />
                <span className="font-semibold">Live Demo</span>
              </div>
              <a 
                href="https://event-planner-bd-657bc.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline truncate max-w-[200px]"
              >
                View Website
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4">
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 mb-2">
                <Github className="h-5 w-5 mr-2" />
                <span className="font-semibold">Source Code</span>
              </div>
              <a 
                href="https://github.com/abdullahalmamun-dev/event-planner-bd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 dark:text-purple-400 hover:underline truncate max-w-[200px]"
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
              <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-3">
                  <Globe2 className="h-6 w-6" />
                </span>
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Event Planner BD is a cultural events platform dedicated to bringing together the artistic and creative 
                community by showcasing diverse cultural events in Bangladesh. From art and dance to technology and 
                culinary arts, the website caters to enthusiasts of various interests, acting as a central hub where 
                users can discover, explore, and participate in cultural events.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The platform was built with a robust tech stack, including React, Tailwind CSS, Express.js, MongoDB, 
                and Firebase, to ensure a seamless and engaging user experience across all devices.
              </p>
            </motion.section>

            {/* Challenges Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400 flex items-center">
                <span className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-full mr-3">
                  <Database className="h-6 w-6" />
                </span>
                Challenges
              </h2>
              <div className="space-y-4">
                <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Diverse Event Listings</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The platform needed to manage an extensive array of event categories, from art and music to 
                    photography and fashion. Ensuring intuitive organization and categorization was essential to help 
                    users efficiently navigate through the various listings.
                  </p>
                </div>
                
                <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Detailed Event Information</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Each event required an array of information, including detailed descriptions, dates, times, and 
                    venues, presented in an accessible format. Balancing this rich information with a clean interface 
                    was key.
                  </p>
                </div>
                
                <div className="bg-pink-50 dark:bg-pink-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Responsive and Accessible Design</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With a diverse user base accessing the platform across devices, it was crucial to design a fully 
                    responsive website that provided an equally satisfying experience on mobile phones, tablets, and 
                    desktops.
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
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full mr-3">
                  <Code2 className="h-6 w-6" />
                </span>
                Solutions
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      Structured Event Listings
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Using MongoDB as the database for event data, events were categorized by type, enabling users to 
                      filter listings based on their interests. Tailwind CSS paired with React components allowed for a 
                      dynamic front-end experience.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                      Detailed Event Pages
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Each event page includes full descriptions, dates, times, and location details. The React 
                      front-end is designed to display this information in a visually engaging way while ensuring 
                      quick loading times.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-2">
                      Responsive Design
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Tailwind CSS and React components ensured that the platform design was mobile-friendly, providing 
                      an optimal experience across devices. The responsive layout adapts to varying screen sizes.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                      User Communication System
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Integrated contact forms allow users to inquire about specific events, submit interest forms 
                      for event participation, and request further assistance. Firebase handles real-time storage for 
                      these inquiries.
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
              <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Results & Impact</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Community Hub</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Successfully established as a comprehensive resource for users interested in cultural engagement in 
                    Bangladesh.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Enhanced Accessibility</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The seamless integration of event listings, artist profiles, and responsive design elements has 
                    enhanced accessibility across all devices.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Cultural Growth</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Effectively supports the growth of a cultural community and stands as an efficient model for event 
                    management platforms.
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
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technologies</h2>
              
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
          </div>
        </div>

        {/* Project Gallery */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 0.7 }}
          className="my-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Project Gallery
          </h2>
          
          <PhotoProvider>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <PhotoView key={index} src={src}>
                  <div className="relative overflow-hidden rounded-xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video">
                      <Image
                        src={src}
                        alt={`Event Gallery Image ${index + 1}`}
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
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700 rounded-2xl overflow-hidden shadow-xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you&apos;d like to collaborate on building exceptional digital experiences!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors px-8 py-6 rounded-full text-lg font-semibold"
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
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullahalmamundev/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:mdabdullah.allinfozone@gmail.com" 
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
