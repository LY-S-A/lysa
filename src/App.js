import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import CopyCa from './components/ca';
import Contact from './components/contact';
import Footer from './components/footer';
import Waitlist from './components/waitlist';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Features />
                <CopyCa />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
