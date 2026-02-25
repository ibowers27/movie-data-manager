import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { validateLogin } from "./authenticator";

export default function Authenticator() {
  // useState hooks to track user input and login status
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const audioRef = React.useRef(null);

  // Handle login with username and password
  function handleLogin(interactedTarget) {
    interactedTarget.preventDefault();
    const result = validateLogin(username, password);
    alert(result.message);
    if (result.Login) {
      setIsLoggedIn(true);
      setDisplayName(username);
      if (username === "thien" && password === "thien" && audioRef.current) {
        audioRef.current.play();
      }
    }
  }

  // Handle Google login shortcut
  function handleGoogleLogin(interactedTarget) {
    interactedTarget.preventDefault();
    const result = validateLogin("google", "");
    alert(result.message);
    if (result.Login) {
      setIsLoggedIn(true);
      setDisplayName("Logged in with Google");
    }
  }

  // Reset fields on logout
  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
    setDisplayName("");
  }

  let content;
  if (isLoggedIn) {
    // Logged-in view: display name + logout button
    content = (
      <>
        <span className="font-semibold mr-3">{displayName}</span>
        {/* btn-error = dark red (#7f2d31) */}
        <button className="btn bg-[#be9859] text-white" onClick={handleLogout}>
          Logout
        </button>
      </>
    );
  } else {
    // Logged-out view: profile icon dropdown with login form
    content = (
      <details className="dropdown dropdown-end">
        <summary className="btn btn-square btn-ghost">
          {/* Profile icon instead of hamburger menu */}
          <FaUserCircle className="text-2xl" />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-80 p-4 shadow-sm mt-2">
          {/* Username input */}
          <li className="mb-3">
            <input
              type="text"
              className="input w-full"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="text-xs text-base-content/50 mt-1">
              Must be at least 5 characters
            </p>
          </li>

          {/* Password input */}
          <li className="mb-3">
            <input
              type="password"
              className="input w-full"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-base-content/50 mt-1">
              Must be at least 5 characters
            </p>
          </li>

          {/* Login button */}
          <li>
            <button className="btn bg-[#be9859] w-full" onClick={handleLogin}>
              Log in
            </button>
          </li>

          {/* Google login */}
          <li className="mt-3">
            <button
              className="btn btn-ghost border border-base-300 w-full"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </li>
        </ul>
      </details>
    );
  }

  return (
    <div className="flex-none flex items-center">
      <audio ref={audioRef} src="/public/totallyfordebug.MP3" style={{ display: "none" }} />
      {content}
    </div>
  );
}