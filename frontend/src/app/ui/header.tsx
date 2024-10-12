"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">Logo</span>
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</Link></li>
              <li><Link href="/about" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</Link></li>
              <li><Link href="/services" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Services</Link></li>
              <li><Link href="/contact" className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact</Link></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Home</Link>
            <Link href="/about" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">About</Link>
            <Link href="/services" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Services</Link>
            <Link href="/contact" className="hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}