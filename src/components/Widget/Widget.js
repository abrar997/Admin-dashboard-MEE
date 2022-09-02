import React from "react";
import "./widget.scss";
import { icons } from "../../assets";
const Widget = ({ title, link, counter, percent, icon, caption }) => {
  return (
    <div className="home__widget">
      <div className="home__widget-left">
        <span className="home__widget-left_title">{title}</span>
        <span className="home__widget-left_counter">{counter} </span>
        <span className="home__widget-left_link">
          <a href={link}>{caption}</a>
        </span>
      </div>
      <div className="home__widget-right">
        <div className="home__widget-right_percentage">
          <icons.MdOutlineKeyboardArrowUp />
          {
            <span className={percent < 50 ? "positive" : "negative"}>
              {percent}
            </span>
          }
        </div>
        <span className="home__widget-right-icon"> {icon} </span>
      </div>
    </div>
  );
};

export default Widget;
