import React from "react";
import "./featured.scss";
import { icons } from "../../assets";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const Featured = () => {
  return (
    <div className="home__featured">
      <div className="home__featured-top">
        <div className="home__featured-top_title">
          <h1>Total Revenue</h1>
          <icons.MdOutlineMoreVert title="more" />
        </div>
      </div>
      <div className="home__featured-bottom">
        <div className="home__featured-bottom_chart">
          <CircularProgressbar
            value={80}
            text="80%"
            strokeWidth={3}
            styles={buildStyles({
              textSize: "14px",
              textColor: "#f88",
            })}
          />
        </div>
        <p className="home__featured-bottom_title">Total Sales made today</p>
        <span className="home__featured-bottom_amount">420$</span>
        <p className="home__featured-bottom_dexcription">
          previous transition proccessing .Last payments may nit be include{" "}
        </p>
        <div className="home__featured-bottom_summery">
          <div className="home__featured-bottom_summery-item">
            <div className="home__featured-bottom_summery-item_title">
              Target
            </div>
            <div className="home__featured-bottom_summery-item_result">
              <span>
                <icons.MdKeyboardArrowDown fontSize="small" />
              </span>
              <span>$12.4k</span>
            </div>
          </div>
          <div className="home__featured-bottom_summery-item">
            <div className="home__featured-bottom_summery-item_title">
              Last week
            </div>
            <div className="home__featured-bottom_summery-item_result">
              <span>
                <icons.MdKeyboardArrowDown fontSize="small" />
              </span>
              <span>$12.4k</span>
            </div>
          </div>
          <div className="home__featured-bottom_summery-item">
            <div className="home__featured-bottom_summery-item_title">
              Last Month
            </div>
            <div className="home__featured-bottom_summery-item_result">
              <span>
                <icons.MdKeyboardArrowDown fontSize="small" />
              </span>
              <span>$12.4k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
