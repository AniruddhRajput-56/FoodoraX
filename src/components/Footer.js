import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-center text-sm  py-4 shadow-inner border-t border-gray-300">
      © {new Date().getFullYear()} FoodoraX. All rights reserved.
    </footer>
  );
};

export default Footer;