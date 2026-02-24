import React from "react";
import Navbar from "./navbar";

// header wrap for the navbar and background boarder
const Header = ({ showWanted, onToggle }) => {
  return (
    <header className="site-navbar bg-orange-600 shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4">
        <Navbar showWanted={showWanted} onToggle={onToggle} />
      </div>
    </header>
  );
};

export default Header;