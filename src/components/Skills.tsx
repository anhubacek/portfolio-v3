import React from 'react';
import { Code2, Database, Globe2, Server, Cpu, Shield } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6 text-indigo-600" />,
    title: 'Frontend Development',
    description: 'React, TypeScript, Tailwind CSS, Next.js',
  },
  {
    icon: <Server className="w-6 h-6 text-indigo-600" />,
    title: 'Backend Development',
    description: 'Node.js, Express, Python, Django',
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-600" />,
    title: 'Database Management',
    description: 'PostgreSQL, MongoDB, Redis',
  },
  {
    icon: <Globe2 className="w-6 h-6 text-indigo-600" />,
    title: 'API Development',
    description: 'RESTful APIs, GraphQL, WebSockets',
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-600" />,
    title: 'Security',
    description: 'Authentication, Authorization, Data Protection',
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-600" />,
    title: 'DevOps',
    description: 'Docker, CI/CD, Cloud Platforms',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}