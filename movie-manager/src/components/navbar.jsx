import React from "react";

export default function Navbar() {
  return (
    // uses daisyui shadowsm. creates a circle logo. 
    // display web name "movie manager"
    <div className="navbar bg-base-100 shadow-sm flex items-center px-4 py-2 border border-gray-300 rounded-lg">
      {/* Logo*/}
      <div className="flex-none flex items-center mr-4">
        <div className="btn btn-circle flex flex-col items-center justify-center h-16 w-16" aria-label="logo">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.8em]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <img src="/movie-manager-icon.png" alt="Logo" className="h-11 w-11 -mt-2 object-contain" style={{ maxWidth: '52px', maxHeight: '52px' }} />
        </div>
        <span className="text-xl ml-2 font-semibold">Movie Manager</span>
      </div>

      <div className="flex-1" />

      {/* to change list types */}
      <label className="swap border border-gray-300 rounded-lg px-3 py-1">
        <input type="checkbox" />
        <div className="swap-on">View your watch List</div>

        <div className="swap-off">Display your Likes</div>
      </label>



      {/* Hamburger */}
      <div className="flex-none ml-auto">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-square btn-ghost" aria-label="menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-80 p-4 shadow-sm mt-2 right-0">
            <li>
              <input type="text" className="input validator w-full" required placeholder="Username"
                pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" />
              <p className="validator-hint text-xs text-gray-500 mt-1">
                Must be 3 to 30 characters<br />containing only letters, numbers or dash
              </p>
            </li>
            <li>
              <input type="password" className="input validator w-full" required placeholder="Password" minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
              <p className="validator-hint text-xs text-gray-500 mt-1">
                Must be more than 8 characters, including<br />At least one number<br />At least one lowercase letter<br />At least one uppercase letter
              </p>
              <button className="btn btn-active mb-7 mt-0">Log in</button>
            </li>

            



            <li>
              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
              </button>
            </li>
            
          </ul>
        </details>
      </div>
    </div>
  );
}
