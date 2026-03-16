import { LOGO_URL } from "../utils/constants";
import { useState , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  const {loggedinuser} = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items);
  


  return (
    <header className="bg-green-100 shadow-lg px-3 py-1 top-0 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-2 py-1 font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]">
        
        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="applogo"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full cursor-pointer object-cover"
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
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          <li><Link to="/cart" className="hover:text-blue-500">Cart - ({cartItems.length} items)</Link></li>

          <li><Link to="/grocery" className="hover:text-blue-500">Grocery</Link></li>
          <li>
            <Link to="/login">
           <button
              className="px-4 py-1 border rounded-md bg-orange-500 text-white"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
            </Link>
           
          </li>
          <li> 
            {loggedinuser}</li>
        </ul>
      </div>

  
     {/* Mobile Menu */}
{menuOpen && (
  <ul className="md:hidden flex flex-col gap-5 px-6 py-6 
  text-[16px] font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif] 
  font-medium bg-white rounded-xl shadow-xl mx-4 mt-2">

    <li className="text-center">Online: {onlineStatus ? "🟢" : "🔴"}</li>

    <li>
      <Link to="/" className="block text-center hover:text-blue-500" onClick={() => setMenuOpen(false)}>
        🏠 Home
      </Link>
    </li>

    <li>
      <Link to="/about" className="block text-center hover:text-blue-500" onClick={() => setMenuOpen(false)}>
        ℹ️ About Us
      </Link>
    </li>

    <li>
      <Link to="/contact" className="block text-center hover:text-blue-500" onClick={() => setMenuOpen(false)}>
        📞 Contact Us
      </Link>
    </li>

    <li>
      <Link to="/grocery" className="block text-center hover:text-blue-500" onClick={() => setMenuOpen(false)}>
        🛍️ Grocery
      </Link>
    </li>

    <li className="text-center">
      <Link to="/cart" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
        Cart - ({cartItems.length} items)
      </Link>
    </li>

    <li className="flex justify-center">
      <Link to="/login">
        <button
          className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          onClick={() =>
            setBtnName(btnName === "Login" ? "Logout" : "Login")
          }
        >
          {btnName}
        </button>
      </Link>
    </li>
  </ul>
)}
    </header>
  );
};

export default Header;
