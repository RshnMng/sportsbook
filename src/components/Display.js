import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Display() {
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="col-2 navbar d-flex flex-column">
          <Navigation />
        </div>
        <div className="col-10 main">
          <Outlet />
        </div>
      </div>
    </>
  );
}

// get api call to work before we do anymore on the layout/design
