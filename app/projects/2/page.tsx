"use client";

import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Linkedin, Mail, Code2, Database, Globe2, Github, ExternalLink, Calendar, Clock, User, MapPin, Plane } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/images/projects/travels/1.webp",
  "/images/projects/travels/2.webp",
  "/images/projects/travels/3.webp",
  "/images/projects/travels/4.webp",
  "/images/projects/travels/5.webp",
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
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      {/* Header with Navigation */}
      <header className="bg-white dark:bg-slate-900 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent"
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
            className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 dark:from-blue-400 dark:via-teal-400 dark:to-cyan-300 bg-clip-text text-transparent"
          >
            Emperal Travels
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Emperal Travels Website Mockup"
              src="/Emperal-Travels-Mockup.webp"
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
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                <User className="h-5 w-5 mr-2" />
                <span className="font-semibold">Client</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Emperal Travels</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">2 Weeks</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                <ExternalLink className="h-5 w-5 mr-2" />
                <span className="font-semibold">Live Demo</span>
              </div>
              <a 
                href="https://emperal-travels-server.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline truncate max-w-[200px]"
              >
                View Website
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4">
              <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                <Github className="h-5 w-5 mr-2" />
                <span className="font-semibold">Source Code</span>
              </div>
              <a 
                href="https://github.com/abdullahalmamun-dev/emperal-travels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline truncate max-w-[200px]"
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
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Plane className="h-6 w-6" />
                </span>
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Emperal Travels is an online travel management platform designed to inspire and assist travelers in discovering 
                new destinations and planning memorable trips. The website offers users access to an extensive list of tourist 
                spots, with detailed descriptions to aid decision-making.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                In addition, the platform encourages user contributions, allowing individuals to share their favorite travel 
                destinations and experiences. Emperal Travels&apos; community-focused approach aims to build a collaborative resource 
                for travelers around the world. The platform was developed using React, Tailwind CSS, Express.js, MongoDB, and 
                Firebase to ensure smooth performance, accessibility, and engagement across all devices.
              </p>
            </motion.section>

            {/* Challenges Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400 flex items-center">
                <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
                  <Database className="h-6 w-6" />
                </span>
                Challenges
              </h2>
              <div className="space-y-4">
                <div className="bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Extensive Tourist Spot Listings</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With numerous tourist spots to feature, the platform required an efficient system to categorize destinations 
                    by location and type. Users needed an easy way to filter spots based on interests and location, necessitating a 
                    streamlined navigation and database structure.
                  </p>
                </div>
                
                <div className="bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Rich Content Display</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Each tourist spot required detailed descriptions covering attractions, historical insights, tips, and other valuable 
                    information. Displaying this content in a way that was visually appealing and easily accessible required careful design 
                    and development.
                  </p>
                </div>
                
                <div className="bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">User-Generated Content</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    One of the platform&apos;s goals was to promote a sense of community by allowing users to submit their favorite destinations. 
                    This feature required user permissions, content moderation, and a review process to ensure submission quality.
                  </p>
                </div>
                
                <div className="bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Responsive User Experience</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With users accessing the platform on various devices, from desktops to mobile phones, it was essential to create a 
                    fully responsive design with consistent functionality and aesthetic design across all screen sizes.
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
              <h2 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400 flex items-center">
                <span className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded-full mr-3">
                  <Code2 className="h-6 w-6" />
                </span>
                Solutions
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      Organized Tourist Spot Listings
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Using MongoDB for data management and Express.js for backend routing, tourist spots were categorized by both location 
                      and type. This structure enabled efficient filtering, while React provided a dynamic and interactive front-end experience.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                      Detailed Descriptions with Enhanced Layout
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Each tourist spot listing includes rich information, such as attractions, historical background, and travel tips. The platform&apos;s 
                      front end, built with React and styled with Tailwind CSS, displays this content in a user-friendly layout.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      User Submissions with Content Moderation
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The platform allows users to submit their own favorite tourist spots, creating a collaborative space for travel enthusiasts. 
                      Firebase is used to manage user accounts and track submissions, while MongoDB stores the user-contributed content.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                      Responsive and Performance-Optimized Design
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Tailwind CSS and React were used to ensure a responsive design that adjusts to all devices without compromising functionality. 
                      The design approach allows for rapid loading times and ensures seamless function across different screen sizes.
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
              <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Results & Impact</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Comprehensive Travel Resource</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Successfully established as a valuable resource for travelers looking to discover new destinations with well-organized 
                    tourist spot listings and rich descriptions.
                  </p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Community Engagement</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Fostered a growing community of travel enthusiasts, providing a platform for users to both explore 
                    and contribute travel information.
                  </p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Global Accessibility</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The platform&apos;s responsive design guarantees a seamless browsing experience across devices, enhancing 
                    accessibility and engagement for users worldwide.
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
            
            {/* Additional Features */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-violet-600 dark:text-violet-400">Key Features</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-violet-100 dark:bg-violet-900/30 p-1 rounded-full mr-2 mt-1">
                    <svg className="h-3 w-3 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced search and filtering options for tourist spots</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-100 dark:bg-violet-900/30 p-1 rounded-full mr-2 mt-1">
                    <svg className="h-3 w-3 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">User destination submissions with approval workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-100 dark:bg-violet-900/30 p-1 rounded-full mr-2 mt-1">
                    <svg className="h-3 w-3 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Interactive maps for exploring tourist locations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-100 dark:bg-violet-900/30 p-1 rounded-full mr-2 mt-1">
                    <svg className="h-3 w-3 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">User reviews and ratings for tourist spots</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-violet-100 dark:bg-violet-900/30 p-1 rounded-full mr-2 mt-1">
                    <svg className="h-3 w-3 text-violet-600 dark:text-violet-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Integrated contact and inquiry system</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 dark:from-blue-400 dark:via-teal-400 dark:to-cyan-300 bg-clip-text text-transparent">
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
                        alt={`Travel Gallery Image ${index + 1}`}
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
          className="bg-gradient-to-br from-blue-500 to-teal-500 dark:from-blue-600 dark:to-teal-600 rounded-2xl overflow-hidden shadow-xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-blue-50 mb-10 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you&apos;d like to collaborate on building exceptional digital experiences!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors px-8 py-6 rounded-full text-lg font-semibold"
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
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullahalmamundev/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:mdabdullah.allinfozone@gmail.com" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
