import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="px-6 mx-auto py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h2 className="text-xl font-semibold tracking-wide">
          Manajemen Data Mahasiswa
        </h2>

        {/* Menu */}
        <div className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-blue-200 transition duration-200"
          >
            Home
          </Link>

          <Link
            to="/mahasiswa"
            className="hover:text-blue-200 transition duration-200"
          >
            Data Mahasiswa
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
