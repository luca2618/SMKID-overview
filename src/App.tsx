import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppCard } from './components/AppCard';
import { apps } from './data/apps';

export default function App() {
  return (
    <div className="min-h-screen bg-custom-navy text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}