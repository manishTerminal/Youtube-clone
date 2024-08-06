import React from "react";
import WatchVideoComponent from "./WatchVideoComponent";
import { useSearchParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";

const WatchPage = () => {
  const toggle = useSelector((state) => state.hamburger.toggle);
  let [searchParam] = useSearchParams();
  const id = searchParam.get("v");
  return (
    <div className="flex ml-64 mt-16 flex-col">
      {toggle === true ? <Sidebar /> : null}
      <div className="flex">
      <WatchVideoComponent vid={id} />
      <LiveChatContainer/>
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
