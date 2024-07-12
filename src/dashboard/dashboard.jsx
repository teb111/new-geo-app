import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import './dashboard.css'
import Navbar from "../components/navbar/Navbar";
import Widget from "../components/widget/Widget";
import Featured from "../components/featured/Featured";

const BusinessDashbaord = () => {
  return <div>
    <div className="dashboard">
        <>
          <Sidebar />
          <div className="dashContainer">
            <Navbar />
            <div className="widgets">
            <Widget type="customer" />
            <Widget type="order" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            {/* <Chart title="Last 6 months (Revenue)" aspect={2/1}/> */}
            </div>
          </div>
        </>
    </div>
  </div>;
};

export default BusinessDashbaord;
