import React from "react";
import "./home.scss";
import {
  Charts,
  Featured,
  Navbar,
  Sidebar,
  Tables,
  Widget,
} from "../../components";
import { icons } from "../../assets";

const Home = () => {
  return (
    <div className="app__home">
      {/* left side */}
      <Sidebar />
      {/* right side */}
      <div className="app__home-container">
        <Navbar />
        {/* Data */}
        <div className="app__home-widget">
          <Widget
            title="users"
            counter="199710"
            link="https://www.facebook.com/"
            percent="20%"
            icon={<icons.MdOutlinePerson />}
            caption="see all users"
          />
          <Widget
            title="Orders"
            counter="199731"
            link="https://www.facebook.com/"
            percent="80%"
            icon={<icons.IoCardSharp />}
            caption="view all users"
          />
          <Widget
            title="Earnings"
            counter="31010"
            link="https://www.facebook.com/"
            percent="10%"
            icon={<icons.SiFuturelearn />}
            caption="view net earning"
          />
          <Widget
            title="balance"
            counter="197"
            link="https://www.facebook.com/"
            percent="20%"
            icon={<icons.FaBalanceScale />}
            caption="see details"
          />
        </div>

        {/* charts */}
        <div className="app__home-container_charts-featured">
          <Featured />
          <Charts aspect={2 / 1} title="Last 6 months (Revenue)" />
        </div>

        {/* List */}
        <div className="app__home-container_list">
          <div className="app__home-container_list-title">
            Latest Transactions
          </div>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Home;
