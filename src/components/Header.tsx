import React from 'react';
import { Github, Linkedin, Mail, Code2, Database, Globe2 } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl">DevPortfolio</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}