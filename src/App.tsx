import { useTheme } from "./hooks/useTheme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutCreds } from "./components/AboutCreds";
import { Philosophy } from "./components/Philosophy";
import { JourneyMap } from "./components/JourneyMap";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { RawReflection } from "./components/RawReflection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useTheme();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutCreds />
        <Philosophy />
        <JourneyMap />
        <Experience />
        <Skills />
        <RawReflection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
