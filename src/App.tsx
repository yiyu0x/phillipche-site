import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gear from './pages/Gear';
import Gallery from './pages/Gallery';
import SpotifyCallback from './pages/SpotifyCallback';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <main className="pt-20 pb-12">
            <div className="container-width">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gear" element={<Gear />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/callback" element={<SpotifyCallback />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App; 