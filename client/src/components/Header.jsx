import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <header className="bg-red-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl text-slate-700">
              <span className="text-slate-500">Your</span>
              <span className="text-slate-700">Company</span>
            </h1>
          </Link>
          <form className="flex bg-slate-100 p-3 rounded-lg items-center">
            <input
              className="bg-transparent focus:outline-none w-24 sm:w-64"
              type="text"
              placeholder="Search..."
            />
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="#">
              <li>About</li>
            </Link>
            <Link to="/profile">
              {currentUser ? (
                <img
                  className="rounded-full h-7 w-7 object-cover"
                  src={currentUser.avatar}
                  alt="profile_img"
                />
              ) : (
                <li className="text-slate-700 hover:underline">Sign In</li>
              )}
            </Link>
          </ul>
        </div>
      </header>
    </div>
  );
}
