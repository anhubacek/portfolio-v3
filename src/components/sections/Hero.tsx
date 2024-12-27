import React from 'react';
import { ArrowRight, Sparkles, Camera, Compass } from 'lucide-react';
import { GradientText } from '../ui/GradientText';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 star-field opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      
      <div className="container mx-auto px-6 pt-40 pb-20 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 flex justify-center space-x-4">
            <Camera className="w-12 h-12 text-pink-500 animate-twinkle" />
            <Compass className="w-12 h-12 text-purple-500 animate-twinkle" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            Andrea Hubacek
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Where Code Meets <GradientText>Artistry</GradientText>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Full Stack Developer crafting digital experiences that merge technical precision 
            with creative vision, inspired by fashion, photography, and cosmic innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center gap-2 hover:bg-white/20 transition-all hover:gap-4 border border-white/20"
            >
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5 transition-all" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>View Gallery</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
}