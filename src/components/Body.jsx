import React, { useEffect, useState } from "react";
import VideoCard, { AdCard } from "./VideoCard.jsx";
import { API } from "../utils/constants.jsx";
import { Link } from "react-router-dom";

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

  // console.log(videos);
  return (
    <div className="flex flex-wrap ml-64 mt-14">
      {/* {videos[0] && <AdCard info={videos[0]} />} */}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
