"use client";

import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Mail, Code2, Database, Github, ExternalLink, Calendar, Clock, User, Anchor, Ship, Shield, Navigation } from "lucide-react";
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
    "/images/projects/nautical_nexus/1.webp",
    "/images/projects/nautical_nexus/2.webp",
    "/images/projects/nautical_nexus/3.webp",
    "/images/projects/nautical_nexus/4.webp",
    "/images/projects/nautical_nexus/5.webp",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-blue-950">
      {/* Header with Navigation */}
      <header className="bg-white dark:bg-slate-900 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
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
            className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent"
          >
            Nautical Nexus
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Nautical Nexus Boat Booking System Mockup"
              src="/images/projects/nautical_nexus/5.webp"
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
              <p className="text-gray-700 dark:text-gray-300">Nautical Nexus</p>
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
                href="http://boatbookingservice.emperaltech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline truncate max-w-[200px]"
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
                href="https://github.com/abdullahalmamun-dev/nautical-nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:underline truncate max-w-[200px]"
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
                  <Ship className="h-6 w-6" />
                </span>
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Nautical Nexus is an online boat booking platform designed to simplify the process of finding and booking boats for 
                travel and leisure. The platform offers users an extensive listing of available boats across various locations, with 
                detailed information about each vessel, its amenities, and availability.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Users can easily book boats for short or extended trips, manage bookings, and explore various boat types, ranging from 
                personal yachts to luxury cruises. Additionally, the platform provides an Admin Dashboard for administrators to manage 
                boat listings, bookings, user accounts, and reviews.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Nautical Nexus aims to provide a seamless experience for boat enthusiasts, with a focus on convenience, user-friendly design, 
                and reliable booking systems. The platform was developed using PHP, MySQL, and Tailwind CSS to ensure optimal performance, 
                smooth user experience, and high scalability across devices.
              </p>
            </motion.section>

            {/* Challenges Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400 flex items-center">
                <span className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded-full mr-3">
                  <Database className="h-6 w-6" />
                </span>
                Challenges
              </h2>
              <div className="space-y-4">
                <div className="bg-cyan-50 dark:bg-cyan-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Extensive Boat Listings and Availability Management</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With numerous boats available for booking across multiple locations, the platform needed a robust system to list boats 
                    by type, availability, location, and amenities. Efficiently managing boat schedules and preventing double bookings 
                    required a reliable backend structure.
                  </p>
                </div>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Detailed Boat Descriptions and Imagery</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Each boat required detailed information, including size, amenities, pricing, and availability. Displaying this content 
                    attractively and accessibly posed a design challenge, while ensuring the site&apos;s performance remained optimal for a 
                    smooth browsing experience.
                  </p>
                </div>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">User-Generated Content and Reviews</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The platform allowed users to rate and review boats after their trips. Managing this user-generated content required 
                    an easy-to-use submission system, coupled with moderation to ensure that all reviews were genuine and met quality standards.
                  </p>
                </div>
                
                <div className="bg-cyan-50 dark:bg-cyan-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">Seamless Booking Process with Secure Payment</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The booking system needed to be user-friendly and capable of handling various booking parameters such as dates, 
                    boat types, and payment methods. Ensuring a smooth and secure payment process was essential to build trust with 
                    users and encourage repeat bookings.
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
              <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400 flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full mr-3">
                  <Code2 className="h-6 w-6" />
                </span>
                Solutions
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      Organized Boat Listings and Availability Filters
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      PHP and MySQL were used to manage boat listings, categorized by location, type, and amenities. A robust filtering 
                      system was developed to allow users to search and sort boats based on specific criteria such as availability, boat type, and price.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                      Detailed Boat Information and Engaging Layout
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Each boat listing included a comprehensive set of details, including photos, descriptions, pricing, and features. 
                      The front end, built with Tailwind CSS, was designed to present this information in a clean and visually engaging way.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      User Reviews and Ratings System
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      A simple and secure review submission system was developed using PHP to allow users to leave ratings and feedback 
                      on their boat experiences. MySQL stored these reviews, and a moderation workflow was implemented to ensure quality standards.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                      Seamless Booking and Payment Integration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The booking system was designed to allow users to easily select dates, boat types, and locations. PHP integrated 
                      secure payment gateways to ensure that users could complete their bookings and payments smoothly.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                      Responsive and Performance-Optimized Design
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The front end, styled with Tailwind CSS, was designed to be fully responsive, ensuring that Nautical Nexus 
                      functioned seamlessly on all devices. This allowed for rapid development of a mobile-optimized layout.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                      Comprehensive Admin Dashboard
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      An Admin Dashboard was developed to enable administrators to manage boat listings, monitor bookings, and handle 
                      user accounts. The dashboard provides real-time analytics on bookings, user activity, and customer reviews.
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
              <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Results & Impact</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Comprehensive Booking Experience</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nautical Nexus has established itself as a valuable resource for boat enthusiasts, offering an extensive list of 
                    boats with detailed descriptions, user reviews, and an intuitive booking process.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Enhanced Cross-Device Accessibility</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The responsive design ensures that users can easily browse, filter, and book boats on any device, enhancing 
                    accessibility and usability for users worldwide.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Streamlined Management Operations</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Admin Dashboard has empowered administrators to efficiently manage listings and bookings, ensuring smooth 
                    operations and real-time updates to the platform.
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
              <h2 className="text-2xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">Technologies</h2>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full text-sm">
                  PHP
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full text-sm">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded-full text-sm">
                  HTML5
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full text-sm">
                  CSS3
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
              <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Key Features</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-2 mt-1">
                    <Ship className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive boat listing and filtering system</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-2 mt-1">
                    <Calendar className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Advanced booking and availability management</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-2 mt-1">
                    <Navigation className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">User review and rating system</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-2 mt-1">
                    <Shield className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Secure payment processing integration</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-2 mt-1">
                    <Anchor className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive admin dashboard for boat management</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent">
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
                        alt={`Nautical Nexus Image ${index}`}
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
          className="bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-2xl overflow-hidden shadow-xl p-12 text-white text-center"
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
