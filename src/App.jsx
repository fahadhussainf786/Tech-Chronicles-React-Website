import {Routes, Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/pages/Home';
import Blogs from './component/pages/Blogs';
import Blogdetail from './component/pages/Blogdetail';
import About from './component/pages/About';
import Footer from './component/Footer';

// Main App component with routing
const App = () => {
  return (
    <>
      {/* Navbar always visible at top */}
      <Navbar />
      
      {/* Routes determine which page shows */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<Blogdetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      {/* Footer always visible at bottom */}
      <Footer />
    </>
  );
};

export default App;
