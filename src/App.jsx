import Header from './components/Header';
import Hero from './components/Hero';
import WatchShowcase from './components/WatchShowcase';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WatchShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;