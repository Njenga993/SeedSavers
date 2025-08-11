// src/App.tsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NewsEvents from './pages/NewsEvents';
import BlogPage from './pages/Blog';
import Resources from './pages/Resources';
import BlogDetail from './pages/BlogDetail'; // NEW detail page

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog" element={<BlogPage />} />
            
            {/* Dynamic route for blog details */}
            <Route path="/blog/:slug" element={<BlogDetail />} />
            
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
