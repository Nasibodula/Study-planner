import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "User Statistics",
      data: [400, 500, 700, 800, 600, 900],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const ChartComponent = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">User Statistics</h5>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
