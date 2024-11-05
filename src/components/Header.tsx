import React from 'react';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-custom-navy via-custom-slate to-custom-navy opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-8">
          <Logo />
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-custom-blue">SMKID</span>
              <span className="block text-2xl mt-3 text-gray-300">Studieråd for Software, Matematik og Kunstig Intelligens</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Din portal til avancerede beregningsværktøjer og forskningsressourcer
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}