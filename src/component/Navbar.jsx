import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import Blogs from "./pages/Blogs";

export default function Navbar() {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 h-22 bg-amber-100 rounded-3xl shadow-md px-10 py-4 w-[90%] max-w-4xl flex justify-between items-center z-50">
      <div className="flex justify-between items-center w-full">
         <Link to="/">
          <img src={logo} alt="Logo" className="w-40" />
        </Link>
      <div className="flex items-center gap-6 pr-10">
        <Link to="/About" className="text-gray-600 hover:text-black">About</Link>
        <Link to="/Blogs" className="text-gray-600 hover:text-black">Blogs</Link>
        <Link to="/Contact" className="text-gray-600 hover:text-black">Contact</Link>
      </div>
      </div>
     

    </nav>
  );
}
