import React, { useState, useEffect } from "react";
import { AnalyticsDashboard } from "react-analytics-charts";
import { SessionsByDateChart, SessionsGeoChart } from "react-analytics-charts";
import { FiUsers } from "react-icons/fi";
import { FcMoneyTransfer } from "react-icons/fc";
import { getAllIndianSubscribers, getAllUsSubscribers } from "../../api/user";
import MyCalendar from "../../components/calender/calender";

const AdminDashboard = () => {
  const [num_indian_subs, setNum_indian_subs] = useState([]);
  const [num_us_subs, setNum_us_subs] = useState([]);

  useEffect(() => {
    loadSubscriberData();
  }, []);

  const loadSubscriberData = (id) => {
    getAllIndianSubscribers(id)
      .then((res) => {
        setNum_indian_subs(res.data);
        console.log(res.data);
      })

      .catch((err) => {
        // history.push("/");
        console.error("Some error in fetching the data");
      });
  };
  // const loadSubscriberData = () => {
  //   const res = getAllIndianSubscribers;
  //   setNum_indian_subs(res);
  //   const response = getAllUsSubscribers;
  //   setNum_us_subs(response);
  // };
  // console.log("hi", num_indian_subs);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="details-section">
                  <h4>Total Revenue</h4>
                  <h6 className="text-info">50000</h6>
                </div>
                <div className="icon-section">
                  <FcMoneyTransfer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="details-section">
                  <h4>No. of Indian Subscriber</h4>
                  <h6 className="text-info">
                    {
                      num_indian_subs.filter((arr) => arr.country === "India")
                        .length
                    }
                  </h6>
                </div>
                <div className="icon-section">
                  <FiUsers />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div className="details-section">
                  <h4>No. of US Subscriber</h4>
                  <h6 className="text-info">
                    {
                      num_indian_subs.filter((arr) => arr.country === "Us")
                        .length
                    }
                  </h6>
                </div>
                <div className="icon-section">
                  <FiUsers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnalyticsDashboard
        authOptions={{
          clientId:
            "3544190393-5k8ndh3knt2hcsk2m5ba26qqc7hp2ibk.apps.googleusercontent.com",
        }}
        renderCharts={(gapi, viewId = "ga:252872311") => {
          const chartStyles = {
            margin: "15px",
            maxWidth: 400,
          };
          return (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <SessionsByDateChart
                gapi={gapi}
                viewId={viewId}
                style={chartStyles}
                showPageViews
                showUsers
              />
              <SessionsGeoChart
                gapi={gapi}
                viewId={viewId}
                style={chartStyles}
                showPageViews
                options={{ width: 400 }}
              />
            </div>
          );
        }}
      />
      <div className="mt-4">
        <MyCalendar />
      </div>
    </div>
  );
};

export default AdminDashboard;
