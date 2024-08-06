import React from "react";
import user from "../assets/img/user.png";

const LiveMessage = ({ name, message }) => {
  return (
    <>
      <div className="m-1 my-2 flex items-center shadow-sm">
        <img className="w-6 mr-1" src={user} />
        <span className="font-bold">{name}</span>
        <span className="ml-2">{message}</span>
      </div>
    </>
  );
};

export default LiveMessage;
