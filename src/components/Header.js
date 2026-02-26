

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-green-100 shadow-lg px-4 sticky top-0 z-50 py-2">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]">
        
        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="applogo"
          className="w-10 sm:w-14 md:w-18 rounded-full cursor-pointer"
        />

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-[17px] font-medium">
          <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>

          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/grocery" className="hover:text-blue-500">
              Grocery
            </Link>
          </li>

          <li>Cart</li>

          <li>
            <button
              className="px-4 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-5 pb-5 pt-2 text-[16px] font-medium border-t bg-[#fbfefc]">
          <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
               🏠 Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              ℹ️ About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              📞 Contact Us
            </Link>
          </li>

          <li>
            <Link to="/grocery" onClick={() => setMenuOpen(false)}>
            🛍️ Grocery
            </Link>
          </li>

          <li>Cart</li>

          <li>
            <button
              className="w-full px-4 py-2 border rounded-md hover:bg-orange-500 hover:text-white transition"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;