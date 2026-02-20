import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header=()=>{
  const[btnName,setBtnName]=useState("Login");

  const onlinestatus= useOnlineStatus();

    return(
      <div className="header">
        <div className="logo">
          <img src={LOGO_URL} alt="applogo" className="img1"></img>
          
        </div>
         <div className="nav">
        <ul>
          <li>Online Status : {onlinestatus ? "🟢" : "🔴"}</li>
            <Link to="/"><li>Home </li></Link>
            <Link to="/about"><li>About us </li></Link>
             <Link to="/contact"><li>Contact Us</li></Link>
             <li>Cart </li>
             <button
             className="btn2"
             onClick={()=>{
              // Conditional (Ternary) Operator => conditional ? exprIfTrue : exprIfFalse
              btnName==="Login"?setBtnName("Logout"):setBtnName("Login");
             }}
             >{btnName}</button>
       </ul>
         </div>

      </div>
    );
};

export default Header;