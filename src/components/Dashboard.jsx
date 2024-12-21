import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid  bg-light vh-100">
      <div className="d-flex justify-content-between align-items-center my-2">
        <h2>Dashboard</h2>
        {/* <button className="btn btn-primary">Add Customer</button> */}
      </div>
      {/* <div className="row">
        <StatisticsCard title="Visitors" value="1,294" icon="bi bi-people" />
        <StatisticsCard title="Subscribers" value="1,303" icon="bi bi-person-check" />
        <StatisticsCard title="Sales" value="$1,345" icon="bi bi-cart" />
        <StatisticsCard title="Orders" value="576" icon="bi bi-box" />
      </div> */}
      {/* <div className="row mt-4">
        <div className="col-md-8">
          <ChartComponent />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Daily Sales</h5>
              <p className="card-text">$4,578.58</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;