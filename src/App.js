import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import CopyCa from './components/ca';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
                <Hero />
                <About />
                <Features />
                <CopyCa />
                <Contact />
                <Footer />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
