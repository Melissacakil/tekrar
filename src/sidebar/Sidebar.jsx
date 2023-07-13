import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> ABOUT ME</span>
     
        <img 
          className="sidebarImg" src="https://fastly.picsum.photos/id/546/200/300.jpg?hmac=WRVm_tMObPuM2HqJCr5D6N59Mboh73aqEno4MCuu5AE"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
          eligendi, debitis cum assumenda aperiam porro repudiandae quidem
          maxime dicta necessitatibus.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarIcons">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
