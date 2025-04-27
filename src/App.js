import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
