import React, { useState } from "react";
import { validateLogin } from "./authenticator";

// usestate hooks to track components of user input and status
export default function Authenticator() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");

//   handle log in using username and password
  function handleLogin(e) {
    e.preventDefault();
    const result = validateLogin(username, password);
    alert(result.message);
    if (result.Login) {
      setIsLoggedIn(true);
      setDisplayName(username);
    }
  }
  
// handle google log in
  function handleGoogleLogin(e) {
    e.preventDefault();
    const result = validateLogin("google", "");
    alert(result.message);
    if (result.Login) {
      setIsLoggedIn(true);
      setDisplayName("Logged in with Google");
    }
  }
// set fields to blank when log out
  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setDisplayName("");
  }

  return (
    <div className="flex-none flex items-center">
      {isLoggedIn ? (
        <>
          <span className="font-semibold mr-3">{displayName}</span>
          <button
            className="btn btn-error text-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <details className="dropdown dropdown-end">
          <summary className="btn btn-square btn-ghost">
            ☰
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-80 p-4 shadow-sm mt-2">
            
            
            {/* Username */}
            <li className="mb-3">
              <input
                type="text"
                className="input w-full"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 5 characters
              </p>
            </li>


            {/* Password */}
            <li className="mb-3">
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 5 characters
              </p>
            </li>


            {/* Login Button */}
            <li>
              <button
                className="btn btn-primary w-full"
                onClick={handleLogin}
              >
                Log in
              </button>
            </li>


            {/* Google Login */}
            <li className="mt-3">
              <button
                className="btn bg-white text-black border border-gray-300 w-full"
                onClick={handleGoogleLogin}
              >
                Login with Google
              </button>
            </li>
          </ul>
        </details>
      )}
    </div>
  );
}
