import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Features from './components/features';
import CopyCa from './components/ca';
import Contact from './components/contact';
import Footer from './components/footer';
import LeaderBoard from './components/leaderboard';
import ImageGlitchUploader from './components/ImageGlitchUploader'; 
import MainLeaderboard from './components/mainLeaderboard'; 
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
                <LeaderBoard />
                <CopyCa />
                <Contact />
               
              </>
            }
          />
          <Route path="/glitch" element={<ImageGlitchUploader />} />
          <Route path="/main-leaderboard" element={<ImageGlitchUploader />} />
        </Routes>
         <Footer />
      </div>
    </Router>
  );
}

export default App;
