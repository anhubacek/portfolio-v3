export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <GradientText className="font-bold text-1xl">
              AH
            </GradientText> */}

            {/*   <span className="font-bold text-xl">DevPortfolio</span> */}
          </div>
          <div className="flex items-center space-x-6 text-white">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
