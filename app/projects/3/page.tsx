"use client";

import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Mail, Code2, Database, Globe2, Github, ExternalLink, Calendar, Clock, User, ShoppingCart, CreditCard, Shield, PackageCheck } from "lucide-react";
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
    "/images/projects/mediore/1.webp",
    "/images/projects/mediore/2.webp",
    "/images/projects/mediore/3.webp",
    "/images/projects/mediore/4.webp",

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-900 dark:to-green-950">
      {/* Header with Navigation */}
      <header className="bg-white dark:bg-slate-900 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 dark:from-teal-400 dark:to-emerald-400 bg-clip-text text-transparent"
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
            className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-teal-600 via-emerald-500 to-green-500 dark:from-teal-400 dark:via-emerald-400 dark:to-green-400 bg-clip-text text-transparent"
          >
            Mediore - Medicine Store
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              alt="Mediore Medicine Store Website Mockup"
              src="/Mediore-Mockup.webp"
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
              <div className="flex items-center text-teal-600 dark:text-teal-400 mb-2">
                <User className="h-5 w-5 mr-2" />
                <span className="font-semibold">Client</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">Mediore</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-teal-600 dark:text-teal-400 mb-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="font-semibold">Duration</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">2 Weeks</p>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700">
              <div className="flex items-center text-teal-600 dark:text-teal-400 mb-2">
                <ExternalLink className="h-5 w-5 mr-2" />
                <span className="font-semibold">Live Demo</span>
              </div>
              <a 
                href="https://mediore-client.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline truncate max-w-[200px]"
              >
                View Website
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start p-4">
              <div className="flex items-center text-teal-600 dark:text-teal-400 mb-2">
                <Github className="h-5 w-5 mr-2" />
                <span className="font-semibold">Source Code</span>
              </div>
              <a 
                href="https://github.com/abdullahalmamun-dev/mediore-medicine-client"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 hover:underline truncate max-w-[200px]"
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
              <h2 className="text-2xl font-bold mb-4 text-teal-600 dark:text-teal-400 flex items-center">
                <span className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-full mr-3">
                  <ShoppingCart className="h-6 w-6" />
                </span>
                Project Overview
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Mediore is an e-commerce platform created to offer a seamless and user-friendly online shopping experience for medical products. 
                Designed to allow users to browse, add to cart, and purchase medicines with ease, the platform also includes a secure login 
                system, a streamlined checkout process, and automatic price calculations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Developed using React, Tailwind CSS, Express.js, MongoDB, and Firebase, Mediore is tailored to simplify the process of 
                buying medicines online, ensuring accessibility, responsiveness, and security across all devices.
              </p>
            </motion.section>

            {/* Challenges Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 flex items-center">
                <span className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-full mr-3">
                  <Database className="h-6 w-6" />
                </span>
                Challenges
              </h2>
              <div className="space-y-4">
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Product Inventory and Price Calculation</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    With an extensive selection of medical products available, it was essential to organize them effectively, ensuring accurate 
                    price listings, detailed product descriptions, and efficient inventory management.
                  </p>
                </div>
                
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Responsive and Secure User Experience</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Given the sensitivity of medical transactions, Mediore required an interface that was not only fully responsive across 
                    devices but also highly secure to protect users&apos; personal and payment information.
                  </p>
                </div>
                
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">User Authentication and Data Privacy</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The platform required a secure login system with user authentication, enabling only verified users to access their accounts 
                    and make purchases. Privacy and data security were primary concerns, especially considering health-related transactions.
                  </p>
                </div>
                
                <div className="bg-emerald-50 dark:bg-emerald-900/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Efficient Checkout and Payment Flow</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    A frictionless checkout process was essential to maintain high conversion rates and ensure customer satisfaction. This 
                    included integrating secure payment gateways and implementing features like price calculations and shipping cost estimation.
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
              <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400 flex items-center">
                <span className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                  <Code2 className="h-6 w-6" />
                </span>
                Solutions
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">
                      Organized Product Listings with Price Calculations
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The platform includes a well-structured product catalog with categories for different types of medicines and healthcare items. 
                      Each product listing is complete with a detailed description, available quantities, and price details with real-time calculation.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
                      Responsive and Intuitive UI Design
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Using React and Tailwind CSS, we created a fully responsive, mobile-first interface. This ensures customers can shop for 
                      medicines comfortably, whether they&apos;re using a desktop, tablet, or mobile phone, promoting ease of use across all screen sizes.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">
                      Secure Login and User Authentication
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Firebase was integrated for secure user authentication, enabling users to create accounts, log in, and manage their profiles 
                      with ease. This adds an extra layer of security, ensuring that users&apos; data remains protected and inaccessible to unauthorized parties.
                    </p>
                  </div>
                  
                  <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-5 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">
                      Streamlined Checkout and Payment Process
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Mediore&apos;s checkout process is straightforward and efficient. With automatic price calculations for selected products, shipping fees, 
                      and any applicable discounts, the checkout interface clearly displays all relevant payment information.
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
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Seamless Shopping Experience</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Mediore provides a smooth and reliable online shopping experience for users looking to purchase medical products with 
                    organized product listings and an efficient checkout process.
                  </p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Enhanced Medical Accessibility</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The launch of Mediore has significantly improved accessibility to medical products, especially for users who prefer 
                    online shopping or need quick access to medicines.
                  </p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-2">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Trust Through Transparency</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    By offering a safe, user-friendly platform with real-time price transparency and a secure checkout system, Mediore 
                    has established itself as a reliable option for purchasing medical supplies online.
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
              <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">Key Features</h2>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-1">
                    <PackageCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Comprehensive medical product catalog</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-1">
                    <CreditCard className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Secure payment processing</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-1">
                    <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">User authentication and account management</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-1">
                    <ShoppingCart className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Shopping cart with real-time price calculations</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mr-2 mt-1">
                    <Globe2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">Responsive design for all devices</span>
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
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-teal-600 via-emerald-500 to-green-500 dark:from-teal-400 dark:via-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
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
                        alt={`Mediore Medicine Store Image ${index}`}
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
          className="bg-gradient-to-br from-teal-500 to-emerald-500 dark:from-teal-600 dark:to-emerald-600 rounded-2xl overflow-hidden shadow-xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Build Something Amazing?</h2>
          <p className="text-lg text-teal-50 mb-10 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you&apos;d like to collaborate on building exceptional digital experiences!
          </p>
          <Button 
            size="lg" 
            className="bg-white text-teal-600 hover:bg-teal-50 transition-colors px-8 py-6 rounded-full text-lg font-semibold"
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
              className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullahalmamundev/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:mdabdullah.allinfozone@gmail.com" 
              className="text-gray-600 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
