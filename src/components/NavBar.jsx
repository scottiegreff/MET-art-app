import React from "react";

function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between rounded-lg flex-wrap bg-slate-800 p-6 mb-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="lg:text-4xl sm:text-2xl font-extralight hover:text-green-900 tracking-tight">
            MET Art Project
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-4 py-3 border rounded hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 0h20v20H0z" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
