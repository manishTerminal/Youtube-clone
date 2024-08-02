import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Home;

/*
Header
Body
    Sidebar
    SubMenuButton
    CardContainer
        VideoCard  
*/
