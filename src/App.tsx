import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { MarkdownTest } from './pages/MarkdownTest';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-custom-navy text-white flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<MarkdownTest />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}