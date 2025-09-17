import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ExperimentLogs } from './components/ExperimentLogs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <Skills />
        <Projects />
        <ExperimentLogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}