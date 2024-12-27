import { ArrowRight, Sparkles } from 'lucide-react';
import { GradientText } from '../ui/GradientText';

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <div className="absolute inset-0 star-field opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="container mx-auto px-4 pt-[22vh] md:pt-60 pb-20 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6 flex justify-center space-x-4"></div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4">
            <GradientText className="text-3xl md:text-5xl">
              Hello! this is
            </GradientText>
            <br />
            <GradientText>Andrea Hubacek</GradientText>
          </h1>
          <h2 className="text-xl md:text-4xl font-semibold mb-6 md:mb-10 md:mt-8">
            Full Stack Developer crafting digital experiences that merge
            technical precision with a creative vision.
          </h2>
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Full Stack Developer crafting digital experiences that merge
            technical precision with a creative vision.
          </p> */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group px-4 py-3 md:px-8 md:py-4 w-[184px] md:w-fit bg-gradient-to-r from-black to-purple-500  backdrop-blur-md text-white rounded-full flex items-center gap-2 hover:bg-white/20 transition-all hover:gap-4 "
            >
              <span>Let's get in touch</span>
              <ArrowRight className="w-5 h-5 transition-all" />
            </a>
            <a
              href="#projects"
              className=" px-4 py-3 md:px-8 md:py-4 w-[184px] md:w-fit bg-gradient-to-r from-pink-700 to-purple-500 rounded-full flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>More about me</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
}