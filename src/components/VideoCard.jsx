import React from "react";

const VideoCard = ({info}) => {
    // console.log(info)
    const {snippet, statistics} = info

  return (
    <div className="w-60 m-2 shadow-md cursor-pointer">
      <div>
        <img src={snippet?.thumbnails?.medium?.url} />
      </div>
      <div className="object-contain">
        <h2 className="font-medium p-2">{snippet.title}</h2>
        <h3 className="text-gray-500 px-2">{snippet.channelTitle}</h3>
        <h4 className="text-gray-500 px-2">{statistics.viewCount} views</h4>
      </div>
    </div>
  );
};

export default VideoCard;
