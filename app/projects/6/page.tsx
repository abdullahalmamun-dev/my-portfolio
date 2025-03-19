"use client";

import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Mail, Code2, Database, Github, ExternalLink, Calendar, Clock, User, Monitor, ShoppingBag, Receipt, BarChart } from "lucide-react";
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
    "/images/projects/computers_corner/1.webp",
    "/images/projects/computers_corner/2.webp",
    "/images/projects/computers_corner/3.webp",
    "/images/projects/computers_corner/4.webp",
  ];

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-900 dark:to-green-950">
      {/* Header with Navigation */}
      <header className="bg-white dark:bg-slate-900 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-500 dark:from-green-400 dark:to-teal-400 bg-clip-text text-transparent"
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
            className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 via-teal-500 to-emerald-500 dark:from-green-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent"
          >
            Computers Corner
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Computers Corner POS System Mockup"
              src="/POS-Mockup-1.webp"
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
              <div className="flex items-center text-green-600 dark:text-green-400 mb-2">
                <User className="h-5 w-5 mr-2" />
                <span className="font-semibold">Client</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Computers Corner</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-green-600 dark:text-green-400 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">2 Weeks</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-green-600 dark:text-green-400 mb-2">
                <ExternalLink className="h-5 w-5 mr-2" />
                <span className="font-semibold">Live Demo</span>
              </div>
              <a 
                href="https://computercorner.emperaltech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:underline truncate max-w-[200px]"
              >
                View Website
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4">
              <div className="flex items-center text-green-600 dark:text-green-400 mb-2">
                <Github className="h-5 w-5 mr-2" />
                <span className="font-semibold">Source Code</span>
              </div>
              <a 
                href="https://github.com/abdullahalmamun-dev/ComputersCorner_POS"
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
              <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
                <span className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                  <Monitor className="h-6 w-6" />
                </span>
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Computers Corner is a retail POS (Point of Sale) system designed to streamline retail operations with efficient tools 
                for product management, customer tracking, and sales processing. The platform offers a centralized system for managing 
                inventory, recording transactions, and generating insightful sales reports.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Built using PHP for backend processing, MySQL for secure data storage, and Tailwind CSS for responsive styling, 
                Computers Corner is tailored to deliver a smooth and accessible POS experience, enhancing both operational 
                efficiency and customer engagement.
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
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Comprehensive Product and Inventory Management</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With a wide range of products, Computers Corner needed an organized system to categorize items by type, brand, 
                    and availability. Efficient inventory tracking was essential to prevent overstocking or shortages, requiring a 
                    robust database structure for seamless access and updates.
                  </p>
                </div>
                
                <div className="bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Detailed Customer Data Management</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The system required a secure way to store customer profiles and purchase histories, allowing staff to access 
                    and manage customer information efficiently. This was critical for providing personalized service and handling 
                    transactions like returns and exchanges.
                  </p>
                </div>
                
                <div className="bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Real-Time Sales Tracking and Reporting</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    For effective sales and inventory management, the POS system needed real-time updates on each transaction, ensuring 
                    that inventory counts were accurate and records were current. Additionally, the system required a reporting function 
                    to offer insights on sales patterns, popular products, and customer preferences.
                  </p>
                </div>
                
                <div className="bg-teal-50 dark:bg-teal-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Responsive User Experience Across Devices</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Since the POS system would be accessed on a range of devices, from desktops to mobile devices, it was crucial to 
                    ensure a responsive design. Consistent functionality and user-friendly design across all screen sizes were essential 
                    for smooth operations and accessibility.
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
              <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center">
                <span className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full mr-3">
                  <Code2 className="h-6 w-6" />
                </span>
                Solutions
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
                      Organized Product Listings with Category Filters
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Using MySQL for backend data management and PHP for processing, products were categorized by type and availability. 
                      This structured database allowed for easy filtering by category and quick access to inventory status, enabling 
                      staff to locate and manage products efficiently.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">
                      Detailed Customer Profiles and Purchase History
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Customer information, including profiles and purchase histories, was stored securely in MySQL. This setup allowed 
                      staff to access customer details instantly, enabling personalized recommendations and efficient returns handling.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
                      Real-Time Sales and Inventory Management
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      PHP was used to manage real-time sales processing, automatically updating inventory levels and recording transaction 
                      data in MySQL. This approach enabled faster checkout times and accurate tracking of inventory, reducing discrepancies 
                      and enhancing stock management.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">
                      Responsive, Mobile-Optimized Interface
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The frontend, built with Tailwind CSS, ensured that the POS system was fully responsive and functional across desktops, 
                      tablets, and mobile devices. This flexibility allowed retail staff to assist customers on the sales floor, enhancing 
                      service efficiency.
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
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Streamlined Retail Operations</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The Computers Corner POS system has successfully positioned itself as a valuable tool for retail management, 
                    streamlining product, inventory, and customer handling processes.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Enhanced User Experience</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Its responsive design ensures a seamless user experience across all devices, enhancing accessibility and 
                    productivity for staff throughout the store.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Improved Business Analytics</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    By providing detailed sales reports and customer insights, the system has become an invaluable asset for 
                    data-driven decision making and strategic planning.
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
              <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400">Technologies</h2>
              
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
              <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">Key Features</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2 mt-1">
                    <ShoppingBag className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive inventory management system</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2 mt-1">
                    <User className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Customer profile and purchase history tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2 mt-1">
                    <Receipt className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Streamlined sales processing and checkout</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2 mt-1">
                    <BarChart className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive sales reports and analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 p-1 rounded-full mr-2 mt-1">
                    <Monitor className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Multi-device compatible interface</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-600 via-teal-500 to-emerald-500 dark:from-green-400 dark:via-teal-400 dark:to-emerald-400 bg-clip-text text-transparent">
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
                        alt={`Computers Corner POS Image ${index}`}
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
          className="bg-gradient-to-br from-green-500 to-teal-500 dark:from-green-600 dark:to-teal-600 rounded-2xl overflow-hidden shadow-xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-green-50 mb-10 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you&apos;d like to collaborate on building exceptional digital experiences!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-green-50 transition-colors px-8 py-6 rounded-full text-lg font-semibold"
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
              className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullahalmamundev/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:mdabdullah.allinfozone@gmail.com" 
              className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
