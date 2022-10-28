import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Sidebar.css";
import dashboard from "./images/dashboard.png";
import recents from "./images/recents.png";
import bookmark from "./images/bookmark.png";
import downloaded from "./images/downloaded.png";
import support from "./images/support.png";
import setting from "./images/setting.png";

export default function SideBar() {
  return (
    <nav className="nav">
      <div className="company">
        <div className="logo"></div>
        <h3>Company Logo</h3>
      </div>
      <ul>
        <CustomLink to="/Home">
          <img src={dashboard} alt="" />
          Home
        </CustomLink>
        <CustomLink to="/Recent">
          <img src={recents} alt="" />
          Recent
        </CustomLink>
        <CustomLink to="/Downloaded">
          <img src={downloaded} alt="" />
          Downloaded
        </CustomLink>
        <CustomLink to="/Bookmark">
          <img src={bookmark} alt="" />
          Bookmark
        </CustomLink>
        <CustomLink to="/Support">
          <img src={support} alt="" />
          Support
        </CustomLink>
        <CustomLink to="/Setting">
          <img src={setting} alt="" />
          Setting
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: false });

  return (
    <li className={isActive ? "active dot" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
