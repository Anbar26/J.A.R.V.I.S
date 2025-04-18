"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-800 border-r border-blue-500/20 z-50"
      >
        <div className="p-6">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            J.A.R.V.I.S
          </Link>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-colors"
          >
            <span className="material-icons mr-3">dashboard</span>
            Dashboard
          </Link>
          <Link
            href="/about"
            className="flex items-center px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-blue-400 transition-colors"
          >
            <span className="material-icons mr-3">info</span>
            About
          </Link>
        </nav>
      </motion.aside>

      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg border border-blue-500/20 hover:bg-gray-700 transition-colors"
      >
        <span className="material-icons text-blue-400">
          {isSidebarOpen ? "menu_open" : "menu"}
        </span>
      </button>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        {children}
      </main>
    </div>
  )
} 