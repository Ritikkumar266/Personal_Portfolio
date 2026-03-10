'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © {currentYear} Ritik Kumar. Built with{' '}
              <FaHeart className="inline text-red-500" /> using Next.js
            </p>
          </div>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/ritikkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/ritikkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/ritikkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
