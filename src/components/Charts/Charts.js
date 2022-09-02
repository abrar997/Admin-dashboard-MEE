import React from "react";
// Rechart
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./charts.scss";
import { data } from "../../assets";

const Charts = ({ aspect, title }) => {
  return (
    <div className="home__charts">
      <div className="home__charts-title">{title} </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data.chart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="5 2 " /> */}
          <XAxis dataKey="name" stroke="gray" fontSize={10} />
          <YAxis stroke="gray" fontSize={10} />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="none" fill="lightblue" />
          <Area type="monotone" dataKey="uv" stroke="none" fill=" lightpink" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
