import { GradientText } from "./GradientText";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GradientText className="font-bold text-1xl">AH</GradientText>
          </div>
          <div className="flex items-center space-x-8 text-white pr-[2rem] pt-[0.5rem]">
            <a href="#about" className="font-[500] text-sm">
              ABOUT
            </a>
            <a href="#skills" className="font-[500] text-sm  ">
              SKILLS
            </a>
            <a href="#contact" className="font-[500] text-sm  ">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
