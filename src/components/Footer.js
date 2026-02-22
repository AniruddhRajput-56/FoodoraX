import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f9f5ec] text-center text-sm text-gray-600 py-4 shadow-inner">
      © {new Date().getFullYear()} Food Zone. All rights reserved.
    </footer>
  );
};

export default Footer;