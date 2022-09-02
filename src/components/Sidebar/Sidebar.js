import React, { useContext } from "react";
import "./Sidebar.scss";
import { icons } from "../../assets";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  // to dark mode
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="home__sidebar">
      <div className="home__sidebar-top">
        <Link to="/">
          <div className="home__sidebar-top_logo">Code/Mu.</div>
        </Link>
      </div>
      <hr />
      <div className="home__sidebar-center">
        <ul>
          <p className="home__sidebar-center-title">Main</p>
          <li>
            <icons.MdDashboard />
            <Link to="/">
              <span>Dashboard</span>
            </Link>
          </li>
          <p className="home__sidebar-center-title">Lists</p>
          <li>
            <icons.HiOutlineUserGroup />
            <Link to="/users">
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <icons.AiOutlineShop />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <icons.IoCardSharp />
            <span>Orders</span>
          </li>
          <li>
            <icons.TbTruckDelivery />
            <span>Delivery</span>
          </li>
          <p className="home__sidebar-center-title">Useful</p>
          <li>
            <icons.IoStatsChartOutline />
            <span>Stats</span>
          </li>
          <li>
            <icons.MdOutlineNotifications />
            <span>Notification</span>
          </li>
          <p className="home__sidebar-center-title">Service</p>
          <li>
            <icons.SiDwavesystems />
            <span>System Health</span>
          </li>
          <li>
            <icons.BsFillPersonCheckFill />
            <span>Log</span>
          </li>
          <li>
            <icons.IoSettingsOutline />
            <span>Settings</span>
          </li>
          <p className="home__sidebar-center-title">User</p>
          <li>
            <icons.BsFillPersonLinesFill />
            <span>Profile</span>
          </li>
          <li>
            <icons.MdOutlineLogout />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="home__sidebar-bottom">
        <div
          className="home__sidebar-bottom-color"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="home__sidebar-bottom-color"
          onClick={() => dispatch({ type: "DARK" })}
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
