import React, { useEffect } from "react";
import "./Single.scss";
import { Charts, Navbar, Sidebar, Tables } from "../../components";
import { images } from "../../assets";
const Single = () => {
  return (
    <div className="app__user-Single">
      <Sidebar />
      <div className="app__user-Single_container">
        <Navbar />
        <div className="app__user-Single_container-top">
          <div className="app__user-Single_container-top_left">
            <button>Edit</button>
            <h1 className="app__user-Single_container-top_left_title">
              Information
            </h1>
            <div className="app__user-Single_container-top_left_item">
              <img src={images.person1} />
              <div className="app__user-Single_container-top_left_item-details">
                  <span className="details-key">Name </span>
                  <span className="details-value">Abrar Muthana Rakea </span>
                  <span className="details-key">Age: </span>
                  <span className="details-value">24 </span>
                  <span className="details-key">Email: </span>
                  <span className="details-value">
                    abraralrawi997@gmail.com{" "}
                  </span>
                  <span className="details-key">phone Number </span>
                  <span className="details-value">+964783119025444 </span>
              </div>
            </div>
          </div>
          <div className="app__user-Single_container-top_right">
            <Charts aspect={3 / 1} title="User Spending (Last six Months )" />
          </div>
        </div>
        <div className="app__user-Single_container-bottom">
          <p className="title">Last Transactions</p>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
