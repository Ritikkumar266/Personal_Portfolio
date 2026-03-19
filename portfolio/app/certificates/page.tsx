'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft, FaAward } from 'react-icons/fa';
import Link from 'next/link';

export default function CertificatesPage() {
  const certificates = [
    {
      title: "Certificate Title 1",
      issuer: "Issuing Organization",
      date: "Month Year",
      description: "Add your certificate details here"
    },
    {
      title: "Certificate Title 2",
      issuer: "Issuing Organization",
      date: "Month Year",
      description: "Add your certificate details here"
    },
    {
      title: "Certificate Title 3",
      issuer: "Issuing Organization",
      date: "Month Year",
      description: "Add your certificate details here"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/" className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors">
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Certificates</span>
          </h1>
          <p className="text-gray-400 text-lg">Professional certifications and achievements</p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="text-4xl text-purple-500 mb-4">
                <FaAward />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-blue-400 text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
              <p className="text-gray-400 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -left-48 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
