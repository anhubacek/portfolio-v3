import { Hero } from "./containers/Hero";
import { Skills } from "./containers/Skills";
import { Contact } from "./containers/Contact";
import { Header } from "./components/Header";

import "./styles/animations.css";

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
