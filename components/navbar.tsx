'use client';
import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import NavLink from './navlink';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-600/95 to-blue-600/95 backdrop-blur-md shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Leaf className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-300"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Climate<span className="text-green-200">Action</span>
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#action">Take Action</NavLink>
            <button className="ml-4 bg-white text-green-600 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#about" mobile>About</NavLink>
            <NavLink href="#action" mobile>Take Action</NavLink>
            <button className="w-full bg-white text-green-600 px-6 py-3 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors shadow-lg mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}