import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <h5>Navbar</h5>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <Link to="/CreatePost">CreatePost</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
