import React from 'react';

export function Footer() {
  return (
    <footer className="bg-custom-slate mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-gray-300">
          <p>© {new Date().getFullYear()} SMKID Studieråd. Alle rettigheder forbeholdes.</p>
        </div>
      </div>
    </footer>
  );
}