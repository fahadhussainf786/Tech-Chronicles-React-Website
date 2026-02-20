import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    // Dark background with subtle gradient for depth
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-8">
        
        {/* Top section: Logo and navigation */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
          <img src={logo} alt="Logo" className="w-32 opacity-200" />
          <div className="flex gap-8">
            <Link to="/" className="text-stone-400 hover:text-orange-400 transition-colors">Home</Link>
            <Link to="/About" className="text-stone-400 hover:text-orange-400 transition-colors">About</Link>
            <Link to="/Blogs" className="text-stone-400 hover:text-orange-400 transition-colors">Blogs</Link>
            <Link to="/Contact" className="text-stone-400 hover:text-orange-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Divider line */}
        <div className="h-px bg-stone-700 mb-8" />

        {/* Bottom section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm">
          <p>© 2026 Tech Chronicles. All rights reserved.</p>
          <p>Built with passion for technology</p>
        </div>

      </div>
    </footer>
  );
}
