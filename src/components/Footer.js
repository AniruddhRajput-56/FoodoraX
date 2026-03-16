import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 text-center text-sm py-4 shadow-inner border-t border-gray-300">
      <p className="text-gray-600">
        Created by{" "}
        <span className="font-bold text-green-700 hover:text-green-900 hover:scale-110 transition-transform duration-300 inline-block cursor-pointer">
          Aniruddh
        </span>
      </p>
      <p>© {new Date().getFullYear()} FoodoraX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
