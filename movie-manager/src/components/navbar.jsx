import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm flex items-center px-4 py-2 border border-gray-300 bg-gray-100 rounded-lg">
      {/* Logo*/}
      <div className="flex-none flex flex-col items-center mr-4">
        <button className="btn btn-circle flex flex-col items-center justify-center h-16 w-16" aria-label="logo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.8em]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <img src="/movie-manager-icon.png" alt="Logo" className="h-11 w-11 mt-1 object-contain" style={{maxWidth:'52px',maxHeight:'52px'}} />
        </button>
      </div>

      <div className="flex-1" />
      {/* Hamburger */}
      <div className="flex-none ml-auto">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-square btn-ghost" aria-label="menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-36 p-2 shadow-sm mt-2 right-0">
            <li>
              <button className="btn btn-wide px-4 py-2 mb-2">Wish List</button>
            </li>
            <li>
              <button className="btn btn-wide px-4 py-2 mb-2">Like List</button>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
