import React from "react";

function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between rounded-lg flex-wrap bg-slate-800 p-6 mb-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6" >
            <span className="lg:text-4xl sm:text-2xl font-extralight hover:text-green-900 tracking-tight">
                MET Art Project
            </span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-4 py-3 border rounded hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path

                        d="M0 0h20v20H0z"/>
                </svg>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
            <div className="text-sm lg:flex-grow">
                {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 ml-5 text-white hover:text-white mr-4">
                    ABOUT
                </a> */}
               
            </div>
            <div>
                {/* <a href="/about" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-900 hover:bg-white mt-4 lg:mt-0">
                    ABOUT
                </a> */}
            </div>
        </div>

      </nav>
    </>
  );
}

export default NavBar;
