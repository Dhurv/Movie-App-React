import React, { useEffect, useState } from "react";

import "./index.css";

import Navbar from "./components/Navbar";
import Movie from "./components/Movie";

import { fetchFromAPI } from "./utils/fetchFromAPI";
import Tags from "./components/Tags";

function App() {
  const [search, setSearch] = useState("cat");
  const [videos, setVideos] = useState([]);

  const options = {
    params: { query: `${search}`, geo: "IN", lang: "en" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetchFromAPI(options).then((res) => setVideos(res.data));
  }, [search]);

  console.log(videos)

  return (
    <>
      <div>
        <Navbar setSearch={setSearch} />
        <Tags setSearch={setSearch} />
        <div className="flex flex-wrap justify-center mx-auto gap-3">
          {videos.map((video) => (
            <Movie video={video} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
