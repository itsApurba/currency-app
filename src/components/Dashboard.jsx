import React, { useContext, useEffect, useState } from "react";

import { Chart } from "primereact/chart";

import LastClicked from "./LastClicked";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { data } = useContext(AppContext);

  console.log(data);

  const curr = ["INR", "PKR", "AFN", "BTN", "GMD"];

  const [multiAxisData] = useState({
    labels: curr.map((el) => el),
    datasets: [
      {
        label: "Currency Exchange",
        backgroundColor: [
          "#EC407A",
          "#AB47BC",
          "#42A5F5",
          "#7E57C2",
          "#66BB6A",
          "#FFCA28",
          "#26A69A",
        ],
        yAxisID: "y",
        data: data.rates ? curr.map((el) => data.rates[el]) : null,
      },
    ],
  });
  let multiAxisOptions = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: "#495057",
        },
      },
      tooltips: {
        mode: "index",
        intersect: true,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#495057",
        },
        grid: {
          color: "#ebedef",
        },
      },
    },
  };
  return (
    <>
      <div className='card'>
        <h5>Currency Exchange</h5>
        <Chart type='bar' data={multiAxisData} options={multiAxisOptions} />
        <LastClicked />
      </div>
    </>
  );
};

export default Dashboard;
