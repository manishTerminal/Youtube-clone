import React from "react";
import WatchVideoComponent from "./WatchVideoComponent";
import { useSearchParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const WatchPage = () => {
  const toggle = useSelector((state) => state.hamburger.toggle);
  let [searchParam] = useSearchParams();
   const id =  searchParam.get("v")
  console.log(id);
  return (
    <div className="flex">
      {toggle === true ? <Sidebar /> : null}
      <WatchVideoComponent vid={id} />
    </div>
  );
};

export default WatchPage;
