import React from "react";

export default function Navbar() {
  return (

    // suppose to be the hamburger menu but isnt showing
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" aria-label="menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

    {/* header name button with daisyui design */}
      <div className="flex-1 flex items-center justify-start pl-4">
        <button className="btn btn-ghost text-xl btn-wide w-56">Movie Manager</button>
      </div>
      <div className="flex-none">
        <details className="dropdown dropdown-end">
        {/* droplist */}
          <summary className="btn m-1 pr-4">Droplist</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm right-0">
            <li>
              <button className="btn btn-wide px-4 py-2 mb-2">Wish List</button>
            </li>
            <li>
              <button className="btn btn-wide px-4 py-2 mb-2">Like List</button>
            </li>
          </ul>
        </details>
      </div>

      {/* ... menu was going to add sign in option here. not showing either */}
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" aria-label="more">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
