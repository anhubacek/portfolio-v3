import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}