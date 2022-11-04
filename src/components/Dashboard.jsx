import React, { useContext, useEffect, useState } from "react";

import { Chart } from "primereact/chart";

import LastClicked from "./LastClicked";
import { AppContext } from "../context/AppContext";
import { randomColor } from "../utils/randomColors";
import { Button } from "primereact/button";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { data } = useContext(AppContext);
  const { logoutUser } = useContext(AuthContext);

  // console.log(data);

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
        <div className='flex justify-content-center gap-1'>
          <Button
            label='Logout'
            className='p-button-danger'
            onClick={logoutUser}
          />
          <Button
            label='Go Back'
            className='p-button-warning'
            onClick={logoutUser}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
