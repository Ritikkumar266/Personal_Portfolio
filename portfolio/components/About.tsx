'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      desc: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: <FaRocket />,
      title: "Fast Performance",
      desc: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solver",
      desc: "Creative solutions to complex technical challenges"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building scalable web applications. 
            I specialize in the MERN stack and modern web technologies, creating seamless user experiences 
            and robust backend solutions. I love solving complex problems through clean, efficient code 
            and staying updated with the latest development trends.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-750 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}