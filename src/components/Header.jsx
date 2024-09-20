import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <>
        <div className="head">
          <div className="icons bg-gray-400">

          </div>
          <div className="searchbar bg-blue-400">

          </div>
        </div>
      </>
  );
};

export default Header;



// <header className="bg-green-800 text-white p-4 flex items-center justify-between shadow-lg">
// <div className="flex items-center space-x-4">
//   <h1 className="text-3xl font-extrabold">
//     <Link to="/">Herbal India</Link>
//   </h1>
// </div>

// <div className="flex items-center space-x-4">
//   <div className="relative">
//     <input
//       type="text"
//       placeholder="Search..."
//       className="bg-white text-black rounded-full py-2 px-4 pl-10 outline-none focus:ring-2 focus:ring-green-500"
//     />
//     <svg
//       className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//       width="20"
//       height="20"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         d="M13.928 12.072a5.5 5.5 0 1 0-1.396 1.396l3.5 3.5a1 1 0 0 0 1.414-1.414l-3.5-3.5zM5.5 9.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"
//         fill="#000"
//       />
//     </svg>
//   </div>

//   <button className="p-2 bg-white text-green-800 rounded-full hover:bg-green-100 transition ease-in-out duration-300">
//     🎤
//   </button>

//   <div className="space-x-4">
//     <Link
//       to="/profile"
//       className="p-2 bg-white text-green-800 rounded-full hover:bg-green-100 transition ease-in-out duration-300"
//     >
//       Profile
//     </Link>
//     <Link
//       to="/signin"
//       className="p-2 bg-white text-green-800 rounded-full hover:bg-green-100 transition ease-in-out duration-300"
//     >
//       Sign In
//     </Link>
//   </div>
// </div>
// </header>
