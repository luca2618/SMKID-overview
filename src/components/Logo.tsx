import React from 'react';
import { Brain, Code, Calculator } from 'lucide-react';

export function Logo() {
  return (
    <div className="relative inline-flex items-center justify-center w-24 h-24 flex-shrink-0">
      <div className="absolute -rotate-12 transform">
        <Brain className="w-12 h-12 text-custom-blue" />
      </div>
      <div className="absolute rotate-12 transform">
        <Calculator className="w-12 h-12 text-custom-slate" />
      </div>
      <Code className="w-14 h-14 text-custom-blue relative z-10" />
    </div>
  );
}