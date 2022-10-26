import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header/Header";
import LeftSideBar from "../pages/LeftSideBar/LeftSideBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-slate-100">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
