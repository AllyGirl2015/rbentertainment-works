'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Home, Info, Briefcase, Users, Mail, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <Image
                src="/RBEW_logo.jpg"
                alt="RBEW Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.parentElement?.querySelector('.fallback-logo') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="fallback-logo w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                <span className="text-white font-bold text-2xl">R</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xl md:text-2xl font-bold text-white tracking-wide" style={{ WebkitTextStroke: '1px #89BFFE' }}>
                RBEW
              </div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-medium">
                Reality Builders
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link href="/team" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <Users className="w-4 h-4" />
              Team
            </Link>
            
            {/* Projects Dropdown */}
            <div className="relative group">
              <button 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] py-2"
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
              >
                <Briefcase className="w-4 h-4" />
                Projects
                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
              </button>
              
              <div 
                className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
              >
                <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-2 space-y-1">
                    <Link href="/projects" className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      All Projects
                    </Link>
                    <div className="h-px bg-white/10 my-1"></div>
                    <Link href="/projects/games" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors">
                      Games & Mods
                    </Link>
                    <Link href="/projects/stories" className="block px-4 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-colors">
                      Stories & Novels
                    </Link>
                    <Link href="/projects/audio" className="block px-4 py-2 text-sm text-gray-300 hover:text-pink-400 hover:bg-white/5 rounded-lg transition-colors">
                      Audio & Music
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/store" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
              <ShoppingBag className="w-4 h-4" />
              Store
            </Link>
            
            <Link href="/contact" className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col p-4 space-y-2">
            <Link href="/" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link href="/team" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <Users className="w-5 h-5" />
              Team
            </Link>
            <div className="space-y-1">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Projects</div>
              <Link href="/projects" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors pl-8" onClick={() => setIsMobileMenuOpen(false)}>
                All Projects
              </Link>
              <Link href="/projects/games" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-xl transition-colors pl-8" onClick={() => setIsMobileMenuOpen(false)}>
                Games & Mods
              </Link>
            </div>
            <Link href="/store" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              <ShoppingBag className="w-5 h-5" />
              Store
            </Link>
            <Link href="/contact" className="flex items-center gap-3 px-4 py-3 mt-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-xl font-semibold justify-center shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
