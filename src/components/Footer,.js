import React from "react";

const Footer =()=>{
    return(
        <div className="footer">
             <p>© {new Date().getFullYear()} React Project. All rights reserved.</p>
            <p>Made with ❤️ by Aniruddh</p>
        </div>
    );
};

export default Footer;