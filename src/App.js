import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact'
import Calculator from './Calculator';
import Home from './Home'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
