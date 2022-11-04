import React, { useContext, useEffect, useState } from "react";

import { Chart } from "primereact/chart";

import LastClicked from "./LastClicked";
import { AppContext } from "../context/AppContext";

const Dashboard = () => {
  const { data } = useContext(AppContext);

  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);

  console.log(randomColor());
  console.log(data);

  const [curr] = useState(["INR", "PKR", "AFN", "BTN", "GMD"]);

  const [multiAxisData] = useState({
    labels: curr.map((el) => el),
    datasets: [
      {
        label: "Currency Exchange",
        backgroundColor: curr.map(randomColor),
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
        display: false,
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
        <h3>Currency Exchange</h3>
        <Chart type='bar' data={multiAxisData} options={multiAxisOptions} />
        <LastClicked />
      </div>
    </>
  );
};

export default Dashboard;
