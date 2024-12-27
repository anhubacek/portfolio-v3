import React from 'react';
import { Code2, Database, Globe2, Server, Layout, TestTube2 } from 'lucide-react';
import { Card3D } from '../ui/Card3D';
import { GradientText } from '../ui/GradientText';

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Frontend Development',
    description: 'Creating responsive and intuitive interfaces with React, Next.js, and modern CSS frameworks',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend Architecture',
    description: 'Building robust server-side solutions with Node.js, Express, and TypeScript',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Database Management',
    description: 'Designing efficient database structures using PostgreSQL, MongoDB, and Redis',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: 'API Development',
    description: 'Crafting scalable APIs using REST and GraphQL with comprehensive documentation',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <TestTube2 className="w-8 h-8" />,
    title: 'Quality Assurance',
    description: 'Ensuring code quality through Jest, Cypress, and comprehensive testing strategies',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'UX/UI Design',
    description: 'Creating intuitive user experiences with Figma, user research, and modern design principles',
    color: 'from-yellow-500 to-amber-500',
  },
];

export function Skills() {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          <GradientText>Technical Expertise</GradientText>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card3D key={index}>
              <div className={`p-8 rounded-xl bg-gradient-to-r ${skill.color} backdrop-blur-lg bg-opacity-10 h-full`}>
                <div className="text-white mb-6">{skill.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{skill.title}</h3>
                <p className="text-white/90">{skill.description}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}