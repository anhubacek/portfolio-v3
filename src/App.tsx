import { Hero } from "./containers/Hero";
import { Skills } from "./containers/Skills";
import { Contact } from "./containers/Contact";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

import "./styles/animations.css";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
