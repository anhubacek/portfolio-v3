import React from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className = '' }: Card3DProps) {
  return (
    <div 
      className={`group perspective hover:z-50 cursor-pointer ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div className="relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(10deg)]">
        {children}
      </div>
    </div>
  );
}