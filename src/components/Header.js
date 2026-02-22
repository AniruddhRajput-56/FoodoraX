// import { LOGO_URL } from "../utils/constants";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";



// const Header=()=>{
//   const[btnName,setBtnName]=useState("Login");

//   const onlinestatus= useOnlineStatus();

//     return(
//       <div className="header">
//         <div className="logo">
//           <img src={LOGO_URL} alt="applogo" className="img1"></img>
          
//         </div>
//          <div className="nav">
//         <ul>
//           <li>Online Status : {onlinestatus ? "🟢" : "🔴"}</li>
//             <Link to="/"><li>Home </li></Link>
//             <Link to="/about"><li>About us </li></Link>
//              <Link to="/contact"><li>Contact Us</li></Link>
//              <Link to="/grocery"><li>Grocery</li></Link>
//              <li>Cart </li>
//              <button
//              className="btn2"
//              onClick={()=>{
//               // Conditional (Ternary) Operator => conditional ? exprIfTrue : exprIfFalse
//               btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
//              }}
//              >{btnName}</button>
//        </ul>
//          </div>

//       </div>
//     );
// };

// export default Header;

import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();

  return (
    <div className=" m-4 h-24 bg-[#fbfefc] shadow-md rounded-lg">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2 md:py-3 font-['Gill_Sans','Gill_Sans_MT',Calibri,'Trebuchet_MS',sans-serif]">
        
        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="applogo"
          className="h-20 sm:h-14 md:h-20 transition-all duration-200 hover:scale-105"
        />

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-[17px] font-medium">
          <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>

          <Link to="/" className="hover:text-blue-500">
            <li>Home</li>
          </Link>

          <Link to="/about" className="hover:text-blue-500">
            <li>About</li>
          </Link>

          <Link to="/contact" className="hover:text-blue-500">
            <li>Contact</li>
          </Link>

          <Link to="/grocery" className="hover:text-blue-500">
            <li>Grocery</li>
          </Link>

          <li>Cart</li>

          <button
            className="px-4 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition"
            onClick={() =>
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-3 px-4 pb-4 text-[16px] font-medium">
          <li>Online: {onlineStatus ? "🟢" : "🔴"}</li>

          <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>

          <Link to="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            <li>About</li>
          </Link>

          <Link to="/contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            <li>Contact</li>
          </Link>

          <Link to="/grocery" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>
            <li>Grocery</li>
          </Link>

          <li>Cart</li>

          <button
            className="px-4 py-1 border rounded-md hover:bg-orange-500 hover:text-white transition"
            onClick={() =>
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      )}
    </div>
  );
};

export default Header;