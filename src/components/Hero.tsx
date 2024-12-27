import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Full Stack Developer Building Modern Web Experiences
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            I craft robust and scalable applications using cutting-edge technologies.
            From responsive frontends to powerful backends, I bring ideas to life.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg flex items-center space-x-2 hover:bg-indigo-700 transition-colors"
            >
              <span>Let's work together</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}