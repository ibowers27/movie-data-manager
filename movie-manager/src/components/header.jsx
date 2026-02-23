import React from "react";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="site-navbar bg-orange-600 shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;