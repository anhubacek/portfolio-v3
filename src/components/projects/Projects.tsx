import React from "react";
import { ExternalLink, Github, Camera, Compass, Palette } from "lucide-react";
import { Card3D } from "../Card3D";
import { GradientText } from "../GradientText";

const projects = [
  {
    title: "Astral Gallery",
    description: "Digital art platform inspired by celestial photography",
    image:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1600",
    tech: ["Next.js", "Three.js", "WebGL"],
    color: "from-pink-500 to-rose-500",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: "Fashion Forecast",
    description: "AI-powered trend prediction using cosmic patterns",
    image:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1600",
    tech: ["Python", "TensorFlow", "React"],
    color: "from-purple-500 to-indigo-500",
    icon: <Compass className="w-6 h-6" />,
  },
  {
    title: "Stellar Studio",
    description: "Creative collaboration platform for digital artists",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1600",
    tech: ["React", "WebRTC", "Node.js"],
    color: "from-cyan-500 to-blue-500",
    icon: <Palette className="w-6 h-6" />,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-black relative">
      <div className="absolute inset-0 star-field opacity-30"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          <GradientText>Creative Portfolio</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card3D key={index} className="group">
              <div className="relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transform transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <div className="text-white mb-3">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href="#"
                      className="text-white hover:text-pink-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-pink-400 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
