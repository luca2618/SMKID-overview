import React from 'react';
import { AppCard } from '../components/AppCard';
import { apps } from '../data/apps';

export function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="block text-2xl mt-3 font-bold">Oversigt</h1>
      <p className="mt-6 text-xl text-gray-300">
              Her finder du en oversigt over SMKID's apps, ressourcer, nyheder, kommende begivenheder og nyttige værktøjer til dine studier og projekter.
            </p> <br></br>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app, index) => (
          <AppCard key={index} {...app} />
        ))}
      </div>
    </div>
  );
}