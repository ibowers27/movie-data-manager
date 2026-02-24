import React, { useState } from "react";
import Authenticator from "./authenticator.jsx";

export default function Navbar({ showWanted, onToggle }) {
  return (
    // used daisy circle button and styling for logo
    <div className="navbar bg-base-100 shadow-sm flex items-center px-4 py-2 border border-gray-300 rounded-lg">
      {/* Logo */}
      <div className="flex-none flex items-center mr-4">
        <div className="btn btn-circle h-16 w-16 flex items-center justify-center">
          <img
            src="/movie-manager-icon.png"
            alt="Logo"
            className="h-11 w-11 object-contain"
          />
        </div>
        <span className="text-xl ml-2 font-semibold">
          Movie Manager
        </span>
      </div>
      <div className="flex-1" />
      {/* Swap toggle */}
      <label className="swap border border-gray-300 rounded-lg px-3 py-1 mr-4">
        <input
          type="checkbox"
          checked={showWanted}
          onChange={onToggle}
        />
        <div className="swap-on">View your liked videos </div>
        <div className="swap-off">Display your wanted List</div>
      </label>
      {/* username password and log in with google */}
      <Authenticator />
    </div>
  );
}

