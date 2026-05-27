'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Kreeda AI",
      desc: "A web-based AI assistant designed to answer sports-related queries.",
      tags: ["Python", "Streamlit", "JavaScript", "Tailwind CSS", "Firebase Authentication", "Gemini API"],
      image: "/kreeda.png",
      github: "https://github.com/Ritikkumar266/Kreeda-ai-chatbot-ritik",
      demo: "#"
    },
    {
      title: "Pixel Craft",
      desc: "An innovative platform designed to bridge the gap between photographers and clients by streamlining studio bookings and operations.",
      tags: ["HTML", "CSS", "Tailwind", "JavaScript", "jQuery", "PHP", "MySQL"],
      image: "/pixelcraft.png",
      github: "https://github.com/Ritikkumar266/PixelCraft-Studio",
      demo: "#"
    },
    {
      title: "AgroGuard",
      desc: "A full-stack web application for identifying and managing insect pests in agricultural crops.",
      tags: ["JavaScript", "HTML5", "CSS3", "React", "Node.js", "Express", "MongoDB"],
      image: "/agroguard.png",
      github: "https://github.com/Ritikkumar266/Insect-Pest-Management",
      demo: "#"
    }
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="text-6xl">💻</div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 min-h-[60px]">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}