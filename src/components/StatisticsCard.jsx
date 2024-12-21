import React from "react";

const StatisticsCard = ({ title, value, icon }) => {
  return (
    <div className="col-md-3">
      <div className="card text-center">
        <div className="card-body">
          <i className={`${icon} display-4 mb-2`}></i>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;