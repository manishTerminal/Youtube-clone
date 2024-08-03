import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard.jsx";
import { API } from "../utils/constants.jsx";

const Body = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [setVideos]);

  const getVideos = async () => {
    const data = await fetch(API);
    const res = await data.json();
    setVideos(res.items);
  };
  console.log(videos);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default Body;
