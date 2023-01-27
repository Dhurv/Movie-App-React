import React from "react";

import Image from "../utils/thumbnail.jpg";

import { AiOutlineCheckCircle } from "react-icons/ai";

function viewCountFormatter(count) {
  if (count < 1000000) {
    let val = count.slice(0, 3);
    val += "K";
    return val;
  } else if (count > 1000000) {
    let val = count.slice(0,1);
    let val1 = count.slice(1,2);
    let val2 = val + '.' +val1;
    return val2 += 'M';
  }
}


function Movie({ video }) {
  return (
    <>
      <div className="container">
        <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_b">
          <img
            src={video.thumbnail[0].url}
            alt="image"
            className="rounded-lg mb-1 special"
          />
        </a>
        <div className="flex gap-2">
          <a href="#" className="h-15 w-15">
            {" "}
            <img
              className="rounded-full h-13 w-13"
              src={ !video.channelThumbnail ? video.thumbnail[0].url : video.channelThumbnail[0].url}
            ></img>
          </a>
          <div className="flex flex-col">
            <h1 className="mb-1">{`${video.title.slice(0, 55)}...`}</h1>
            <span className="text-sm text-gray-600 hover:text-black cursor-pointer">
              {video.channelTitle}{" "}
              <AiOutlineCheckCircle className="inline-block" />{" "}
            </span>
            <span className="text-sm text-gray-600">
              {viewCountFormatter(video.viewCount)} Views -{" "}
              {video.publishedText}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
