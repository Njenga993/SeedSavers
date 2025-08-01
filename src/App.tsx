// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional future pages */}
          {/* <Route path="/our-work" element={<OurWork />} /> */}
          {/* <Route path="/blog" element={<Blog />} /> */}

         
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default App;
