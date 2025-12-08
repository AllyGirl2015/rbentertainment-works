'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, Heart, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
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
              <div>
                <div className="text-2xl font-bold text-white tracking-wide" style={{ WebkitTextStroke: '1px #89BFFE' }}>
                  RBEW
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-medium">
                  Reality Builders
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              Where imagination isn&apos;t just explored, it&apos;s engineered. We are a creative studio dedicated to building immersive worlds across multiple mediums.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/rbentertainmemtworks?igsh=a3VvbGFqNmxzMWRx" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-pink-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@rbentertainmentworks?_r=1&_t=ZT-91KyKneaFRn" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-cyan-400 transition-colors">
                <span className="text-lg font-bold">t</span>
              </a>
              <a href="https://youtube.com/@r.b.e.w.?si=xq82NUDk5HaDz755" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-red-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/R27pqnfp5v" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 hover:text-indigo-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/team" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Team
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/store" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/policies/privacy" className="text-gray-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/policies/terms" className="text-gray-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/policies" className="text-gray-400 hover:text-purple-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Organization Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Reality Radio Network */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Reality Radio Network</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.realityradionetwork.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Website
                </a>
              </li>
              <li>
                <a href="discord.realityradionetwork.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Discord
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@rbewrrn?si=4P81JDgKlYuaZAR-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Reality Builders Entertainment Works. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Developed by</span>
            <a 
              href="https://github.com/Emerson-02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors flex items-center gap-1"
            >
              Emerson Rodrigues
              <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
