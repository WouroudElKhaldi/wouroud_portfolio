"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Figma,
  Calendar,
  FileText,
  Headset,
  ShieldBan,
  MonitorSmartphone,
  CreditCard,
  Link2,
  MessageCircleMore,
  //   PenTool,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import SocialIcon from "@/components/social-icon";
import { Button } from "@/components/ui/button";
import AboutMe from "@/components/about-me";
// import Loading from "@/components/loading";
import InteractiveShapes from "@/components/InteractiveShapes";
import AnimatedBoxes from "@/components/AnimatedBoxes";
import ProjectCarousel from "@/components/project-carousel";
import ContactForm from "@/components/contact-form";
import DottieAnimation from "@/components/dottie-animation";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchDepositAddress = async () => {
    try {
      const res = await fetch(`/api/deposit-address?coin=BTC&network=BTC`);
      const data = await res.json();
      if (res.ok) {
        console.log(res);
        console.log(data);
      } else {
        console.error("API Error:", data);
        alert("Failed to fetch deposit address.");
      }
    } finally {
    }
  };
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show loading for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;
  if (loading)
    return (
      <DottieAnimation src="https://lottie.host/bfdb0b16-4ff2-4a10-a133-4fce3d591edf/7ve6csy0VT.lottie" />
    );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              {`Hey! It's Wouroud EL Khaldi`}
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-gray-300">
              🌐 Full-Stack Developer | 🎨 UI/UX Designer | 🔐 Web Security
              Enthusiast{" "}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ScrollLink to="work" smooth={true} duration={500}>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  View Projects
                </Button>
              </ScrollLink>
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                onClick={() => fetchDepositAddress()}
              >
                Test
              </Button>
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  Contact Me
                </Button>
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-10 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container px-2 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                My Expertise
              </span>
              <span className="ml-2 text-white">🛠️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={
                  <MonitorSmartphone className="w-10 h-10 text-purple-500" />
                }
                title="Full Stack Development"
                description="Expert in building robust and scalable full-stack web applications using modern technologies like React, Next.js, Node.js, Express, and more. I focus on creating seamless experiences from front-end to back-end with clean, maintainable."
              />
              <ServiceCard
                icon={<Figma className="w-10 h-10 text-pink-500" />}
                title="UI/UX Design"
                description="Design intuitive and user-centric interfaces with a strong focus on usability and visual aesthetics. Using Figma to bring creative ideas to life, ensuring both functionality and beauty in web applications."
              />
              <ServiceCard
                icon={<ShieldBan className="w-10 h-10 text-purple-500" />}
                title="Web Security"
                description="Passionate about web security and protecting applications against vulnerabilities. Expertise in implementing best practices, ensuring data privacy, and securing both front-end and back-end layers of web applications."
              />
              <ServiceCard
                icon={<Link2 className="w-10 h-10 text-pink-500" />}
                title="API Design & Integration"
                description="Building and integrating APIs with a focus on performance, security, and scalability. Expert in handling RESTful APIs and ensuring smooth communication between different systems and services."
              />
              <ServiceCard
                icon={<Headset className="w-10 h-10 text-purple-500" />}
                title="Tech Consultation"
                description="Providing expert advice on software development, security practices, and technology stack selection. Helping teams optimize their workflows and build high-performance applications."
              />
              <ServiceCard
                icon={<CreditCard className="w-10 h-10 text-pink-500" />}
                title="Payment Integrations"
                description="Integrating various Payment Service Providers (PSPs) like Binance Pay, Pay Tree, Coinsbuy, and others to streamline secure payment solutions for e-commerce and Web3 applications."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section
        id="work"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container px-2 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                {`What I've Built`}
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="w-full">
              <ProjectCarousel />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Ping Me
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <ContactForm />
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">
                    Prefer to schedule a meeting?
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href="https://wouroudelkhaldi.youcanbook.me"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule a Meeting
                    </a>
                    <a
                      href="/CV-Wouroud-El-Khaldi.pdf"
                      download
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      View CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-12 bg-gradient-to-t from-gray-900 to-black">
        <div className="container px-2 mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <SocialIcon
              icon={<Github />}
              href="https://github.com/WouroudElKhaldi"
              label="GitHub"
            />{" "}
            <SocialIcon
              icon={<MessageCircleMore />}
              href="https://wa.me/+96181877217?text=Hello%20Wouroud!%20I%20would%20like%20to%20chat"
              label="Whatsapp"
            />
            <SocialIcon
              icon={<Linkedin />}
              href="https://www.linkedin.com/in/wouroud-el-khaldi-83016820b"
              label="LinkedIn"
            />
            {/* <SocialIcon
              icon={<Smartphone />}
              href="#"
              label="Mobile Apps"
              className="opacity-50 cursor-not-allowed"
              onClick={(e) => {
                e.preventDefault();
                // You can add a console.log here if you want to verify it's working
                console.log("Mobile icon click prevented");
              }}
            /> */}
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} Wouroud EL Khaldi. All rights
              reserved.
            </p>
            <ContactEmail />
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 text-center md:text-left">
      <div className="mb-4 flex justify-center md:justify-start">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ContactEmail() {
  return (
    <div className="mt-2">
      <a
        href="mailto:wouroudelkhaldi@gmail.com"
        className="text-purple-400 hover:text-purple-300"
      >
        wouroudelkhaldi@gmail.com
      </a>
    </div>
  );
}
