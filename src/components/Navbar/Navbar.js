import React from "react";
import "./navbar.scss";
import { icons } from "../../assets";
import { images } from "../../assets";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  const { dispatch } = React.useContext(DarkModeContext);

  return (
    <nav className="home__navbar">
      <div className="home__navbar_wrapper">
        <div className="home__navbar_wrapper-search">
          <input type="text" placeholder="search..." />
          <icons.AiOutlineSearch />
        </div>

        <div className="home__navbar_wrapper-items">
          <div className="home__navbar_wrapper_item">
            <icons.MdLanguage /> English
          </div>
          <div className="home__navbar_wrapper_item">
            <icons.BsFillMoonFill
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="home__navbar_wrapper_item">
            <icons.MdOutlineWorkspaces />
          </div>
          <div className="home__navbar_wrapper_item">
            <icons.MdOutlineNotificationsNone />
            <div className="counter">1</div>
          </div>
          <div className="home__navbar_wrapper_item">
            <icons.BiMessage />
            <div className="counter">1</div>
          </div>
          <div className="home__navbar_wrapper_item">
            <icons.BsListStars />
          </div>
          <div className="home__navbar_wrapper_item">
            <img
              src={images.person1}
              className="home__navbar_wrapper_item-img"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
