import React, { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

function Navbar({ setSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function searchTermHandler(e) {
    setSearchTerm(e.target.value);
  }

  function handleSetSearch() {
    setSearch(searchTerm);
    setSearchTerm("");
  }
  return (
    <>
      <div className="flex mb-2 justify-between items-center  bg-red-700 h-50 p-5 text-gray-200">
        <div className="text-3xl font-bold">
          <div className="flex items-center gap-2">
            <BiCameraMovie /> Movie
          </div>
        </div>
        <div>
          <div className="flex items-center ">
            <input
              type="text"
              className="p-2 font-mono rounded-md mx-2 outline-none hover:shadow-md text-gray-800 text-xl "
              placeholder="Search for Movie..."
              value={searchTerm}
              onChange={searchTermHandler}
            />
            <button
              onClick={handleSetSearch}
              className="hover:scale-110 duration-300 ease-in-out"
            >
              <AiOutlineSearch className="text-2xl -ml-10 bg-white text-blue-700" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
