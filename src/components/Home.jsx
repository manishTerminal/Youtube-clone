import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";
import { useSelector } from "react-redux";

const Home = () => {
  const toggle = useSelector((state) => state.hamburger.toggle);
  console.log(toggle)
  return (
    <div className="flex">
      {toggle === true ? <Sidebar /> : null}
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
