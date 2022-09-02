import React from "react";
import { Sidebar, Navbar, All } from "../../components";
import "./list.scss";

const List = ({ dataList, link, btn, title }) => {
  return (
    <div className="app__list">
      <Sidebar />
      <div className="app__list_container">
        <Navbar />
        <All dataList={dataList} link={link} title={title} btn={btn} />
      </div>
    </div>
  );
};

export default List;
