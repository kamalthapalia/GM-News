import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function Homepage() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Homepage;
