import { Hero } from "./containers/Hero";
import { Skills } from "./containers/Skills";
import { Contact } from "./containers/Contact";

import "./styles/animations.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
