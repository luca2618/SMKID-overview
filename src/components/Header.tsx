import React from 'react';
import { Logo } from './Logo';
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-custom-navy via-custom-slate to-custom-navy opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-8">
          <img src="SMKID-Logo.png" alt="SMKID Logo" />
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-custom-blue">SMKID</span>
              <span className="block text-2xl mt-3 text-gray-300">Studieråd for Software, Mat-Tek og Kunstig Intelligens og Data</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Her finder du en oversigt over alle SM/KID's apps og ressourcer.
            </p>
            <div className="mt-6 flex items-center space-x-6">
              <span className="text-gray-300">Find os her:</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/SMKIDCouncil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-custom-blue transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/smkidraadetdtu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-custom-blue transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              
                <a
                  href="https://github.com/SMKIDRaadet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-custom-blue transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
