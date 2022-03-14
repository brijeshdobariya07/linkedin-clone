import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://img.freepik.com/free-vector/abstract-background_53876-43362.jpg?t=st=1647259559~exp=1647260159~hmac=ad1dc8fb48d09d6f67ad7c7611278688e3c3b31a6f0cbf3ea40c9310216a5d46&w=996"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Brijesh Dobariya</h2>
        <h4>email@email.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewed on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
