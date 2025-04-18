"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-blue-500/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              J.A.R.V.I.S
            </Link>
            <div className="flex gap-6">
              <Link href="/dashboard" className="text-gray-300 hover:text-blue-400 transition-colors">
                Dashboard
              </Link>
              <Link href="/about" className="text-blue-400">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-16">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About J.A.R.V.I.S
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your personal AI assistant, inspired by Tony Stark's JARVIS, bringing advanced AI capabilities to your fingertips.
          </p>
        </motion.section>

        {/* Creator Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col items-center mb-16"
        >
          <motion.div 
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/20 mb-6 shadow-lg shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/pfp.png"
              alt="Arhaan's Profile Picture"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-blue-400 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Created by Arhaan
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-center max-w-md text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A passionate developer who built J.A.R.V.I.S to bring the power of AI to everyone.
            This project combines cutting-edge technologies to create an intelligent assistant
            that can help with various tasks through natural interaction.
          </motion.p>
          <motion.div 
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/17arhaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://linkedin.com/in/arhaan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {/* Feature Cards */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Face Authentication</h3>
            <p className="text-gray-400">
              Secure access through advanced facial recognition technology, ensuring only authorized users can access the system.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Voice Commands</h3>
            <p className="text-gray-400">
              Natural voice interaction with advanced speech recognition and processing capabilities for hands-free control.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Computer Vision</h3>
            <p className="text-gray-400">
              Advanced object detection and image analysis powered by state-of-the-art computer vision models.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">AI Chat</h3>
            <p className="text-gray-400">
              Intelligent conversation powered by Google's Gemini model, providing contextual and helpful responses.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Cloud Integration</h3>
            <p className="text-gray-400">
              Seamless integration with AWS services for robust and scalable performance in processing and storage.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Modern UI</h3>
            <p className="text-gray-400">
              Beautiful and responsive interface built with Next.js and Tailwind CSS for an optimal user experience.
            </p>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Frontend</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Next.js 14 with App Router</li>
                <li>• React 19 with Server Components</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Framer Motion for animations</li>
                <li>• TypeScript for type safety</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Backend</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• Python with Flask</li>
                <li>• AWS Services Integration</li>
                <li>• Google Gemini AI</li>
                <li>• OpenCV for image processing</li>
                <li>• WebSocket for real-time communication</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in Touch</h2>
          <p className="text-gray-400 mb-8">
            Have questions or want to contribute? Feel free to reach out or check out the project on GitHub.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/17arhaan/J.A.R.V.I.S"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              GitHub Repository
            </a>
            <Link
              href="/dashboard"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
            >
              Try J.A.R.V.I.S
            </Link>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/50 border-t border-blue-500/20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} J.A.R.V.I.S AI Assistant. All rights reserved.</p>
            <p className="mt-2">Built with ❤️ using Next.js and Python</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 