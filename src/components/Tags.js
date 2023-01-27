import React from "react";

const tags = ["cat", "tiger", "airforce"];

export default function Tags({ setSearch }) {

   
  return (
    <div className="w-4/5 mx-auto mb-2">
      {tags.map((tag, idx) => (
        <button onClick={() => setSearch(tag)} className="mx-2 bg-white p-1 px-2 cursor-pointer rounded-xl text-gray-700 hover:font-bold font-mono" key={idx}>{tag}</button>
      ))} 
    </div>
  );
}
