"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Button } from "@/components/ui/button";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Linkedin, Mail, Code2, Database, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const images = [
  "/images/projects/event/1.webp",
  "/images/projects/event/4.webp",
  "/images/projects/event/2.webp",
  "/images/projects/event/4.webp",
  "/images/projects/event/6.webp",
  "/images/projects/event/5.webp",


];
export default function Home() {
  return (
    <>
      <div className="min-h-screen hero-gradient md:max-w-7xl mx-auto">
        {/* Projects Section */}
        <section className="md:py-20">
          <div className="container mx-auto px-4 ">
            <h2 className="md:text-4xl font-bold text-center md:mb-12 gradient-text">
              <Link href="/">Abdullah Al Mamun</Link>
            </h2>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center py-5">
              Event Planner BD-Event Management
            </h1>
            <Image
              alt=""
              src="/Event-Planner-BD-Mockup.webp"
              height={500}
              width={2000}
            ></Image>
            <div className="flex justify-between text-2xl my-10 bg-white py-10">
              <div className="md:w-1/5">
                <h1 className="text-center">
                  <b>Client: </b>Event Planner BD
                </h1>
              </div>
              <div className="md:w-1/5">
                <b>Duration: </b>2 Week
              </div>
              <div className="md:w-1/5">
                <b>Website Link:</b> https://event-planner-bd-657bc.web.app/
              </div>
              <div className="md:w-1/5">
                <b>Github Link:</b>
                https://github.com/abdullahalmamun-dev/event-planner-bd
              </div>
            </div>
          </div>

          <div>
            <h1>Project Overview :</h1>
            <p>
              Event Planner BD is a cultural events platform dedicated to
              bringing together the artistic and creative community by
              showcasing diverse cultural events in Bangladesh. From art and
              dance to technology and culinary arts, the website caters to
              enthusiasts of various interests, acting as a central hub where
              users can discover, explore, and participate in cultural events.
              The platform was built with a robust tech stack, including React,
              Tailwind CSS, Express.js, MongoDB, and Firebase, to ensure a
              seamless and engaging user experience across all devices.
            </p>

            <h1>Challenges: </h1>
            <p>
              Creating a platform to support a thriving cultural events
              community presented several unique challenges: Diverse Event
              Listings with Comprehensive Organization The platform needed to
              manage an extensive array of event categories, from art and music
              to photography and fashion. Ensuring intuitive organization and
              categorization was essential to help users efficiently navigate
              through the various listings and quickly find events matching
              their interests. Detailed Event Information and Scheduling Each
              event required an array of information, including detailed
              descriptions, dates, times, and venues, presented in an accessible
              format. Balancing this rich information with a clean and
              responsive interface was key to providing users with a quick and
              easy way to plan event attendance. Showcasing Artist and
              Participant Profiles Since connecting the community with artists
              and participants was a primary objective, the platform needed to
              incorporate artist profiles that highlighted their backgrounds,
              expertise, and upcoming contributions. This required a profile
              management system that allowed for profile creation, updating, and
              retrieval. Responsive and Accessible Design for Community
              Engagement With a diverse user base accessing the platform across
              devices, it was crucial to design a fully responsive website that
              provided an equally satisfying experience on mobile phones,
              tablets, and desktops. Streamlined Communication and Inquiry
              System Providing users with a convenient method to inquire about
              specific events, express interest in participation, and request
              additional information was essential. Developing a secure and
              efficient contact and inquiry system was necessary to foster
              engagement and answer users’ questions.
            </p>

            <h1>Solutions: </h1>
            <p>
              The team implemented a comprehensive solution to address these
              challenges, focusing on functionality, user engagement, and
              streamlined event organization: Structured Event Listings and
              Category Filters Using MongoDB as the database for event data,
              events were categorized by type (art, dance, technology, etc.),
              enabling users to filter listings based on their interests.
              Tailwind CSS, paired with React components, allowed for a dynamic
              front-end experience, making the event listing page intuitive and
              engaging. Detailed Event Pages with Scheduling Information Each
              event page includes full descriptions, dates, times, and location
              details. The React front-end is designed to display this
              information in a visually engaging way while ensuring quick
              loading times. Express.js serves as the backend to manage data
              requests, while MongoDB handles the storage of all event-related
              data, supporting efficient data retrieval for users. Dynamic
              Artist and Participant Profiles Artist profiles highlight key
              information about individuals participating in or organizing
              events, including their artistic backgrounds and upcoming roles in
              the events. Firebase was integrated for secure and real-time data
              updates, allowing profile information to stay current and
              relevant. Responsive Design for Accessibility Across Devices
              Tailwind CSS and React components ensured that the platform design
              was mobile-friendly, providing an optimal experience across
              devices. The responsive layout adapts to varying screen sizes,
              ensuring that users can enjoy a seamless browsing experience
              regardless of the device they’re using. User Communication and
              Inquiry System Integrated contact forms allow users to inquire
              about specific events, submit interest forms for event
              participation, and request further assistance. Firebase handles
              real-time storage for these inquiries, ensuring user submissions
              are promptly addressed, which helps foster engagement and build
              community trust.
            </p>

            <h1>Result: </h1>
            <p>
              Event Planner BD has successfully established itself as a
              comprehensive resource for users interested in cultural engagement
              in Bangladesh. By offering an organized, detailed, and responsive
              platform, the website has become a valuable tool for discovering
              events, connecting with artists, and fostering community
              engagement around cultural experiences. The platform’s
              well-structured design and rich feature set, along with a fully
              responsive layout, make it an engaging resource for users across
              devices.
            </p>
            <h1>Impact: </h1>
            <p>
              Event Planner BD has cultivated a vibrant online space for
              individuals to discover and participate in cultural events,
              strengthening community connections and promoting artistic
              engagement. The seamless integration of event listings, artist
              profiles, and responsive design elements has enhanced
              accessibility, making the platform a go-to destination for anyone
              interested in cultural events in Bangladesh. Powered by a robust
              technology stack of React, Tailwind CSS, Express.js, MongoDB, and
              Firebase, Event Planner BD effectively supports the growth of a
              cultural community and stands as an efficient model for event
              management platforms.
            </p>
          </div>
          <div>
            <h1 className="text-center text-4xl my-10 font-bold">
              Project Gallery
            </h1>

            <section className="py-20">
              <h1 className="text-center text-4xl my-10 font-bold">
                Project Gallery
              </h1>
              <PhotoProvider>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                  {images.map((src, index) => (
                    <PhotoView key={index} src={src}>
                      <div className="relative overflow-hidden rounded-lg cursor-pointer">
                        <Image
                          src={src}
                          alt={`Event ${index + 1}`}
                          height={300}
                          width={400}
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </PhotoView>
                  ))}
                </div>
              </PhotoProvider>
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
                <button className="bg-accent hover:bg-accent/90 px-6 py-3 rounded text-white font-bold">
                  <a href="mailto:your.email@example.com">Get In Touch</a>
                </button>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
