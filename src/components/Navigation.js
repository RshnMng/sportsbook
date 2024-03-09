import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Link className="nav-links" to="/">
        Home
      </Link>
      <Link className="nav-links" to="/NBA">
        NBA
      </Link>
      <Link className="nav-links" to="/NFL">
        NFL
      </Link>
      <Link className="nav-links" to="/NHL">
        NHL
      </Link>
      <Link className="nav-links" to="/MLB">
        MLB
      </Link>
      <Link className="nav-links" to="/NCAAF">
        College Football
      </Link>
      <Link className="nav-links" to="/NCAAB">
        College Hoops
      </Link>
    </>
  );
}
