import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

import './styles/animations.css';
import { Header } from './components/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header/>
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;