import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { getAllStocks } from "../../../api/stock";
import StockData from "../../../components/table/StockData";
import { FcCheckmark } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import StockNoteModel from "../../../components/modal/StockNoteModel";

const UserConsolidatePortfolioUs = () => {
  const [stocks, setStocks] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadStocks(user._id);
  }, []);

  const loadStocks = (id) => {
    getAllStocks(id)
      .then((res) => {
        setStocks(res.data);
        console.log(res);
      })
      .catch((err) => {
        // history.push("/");
        toast.error("Some error in fetching the data");
      });
  };

  const getModifiedDate = (date1) => {
    var created_date = new Date(date1);

    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = created_date.getFullYear();
    var month = months[created_date.getMonth()];
    var date = created_date.getDate();
    var hour = created_date.getHours();
    var min = created_date.getMinutes();
    var sec = created_date.getSeconds();
    return date + "," + month + " " + year + " " + hour + ":" + min + ":" + sec; // final date with time, you can use this according your requirement
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <h2>US Stocks - Consolidate Portfolio</h2>
          </div>
        </div>
        <div className="col">
          <div className="portfolio card">
            <div className="card-body">
              <table class="table table-striped portfolio-table">
                <thead>
                  <tr style={{ fontWeight: 600, fontSize: 18 }}>
                    <th scope="col">Stock Name</th>
                    <th scope="col">Last Buy Date</th>
                    <th scope="col">Avg. Buy Price</th>
                    <th scope="col">Current Price</th>
                    <th scope="col">Gain/Loss</th>
                    <th scope="col">Allocation</th>
                    <th scope="col">Entry Status</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks && stocks.length
                    ? stocks
                        .filter((each) => each.country == "US")
                        .map((each) => {
                          return (
                            <tr>
                              <td>{each.stock_name}</td>
                              <td>{getModifiedDate(each.last_buy_date)}</td>
                              <td>{each.avg_buy}</td>
                              <StockData
                                nasdaq={each.nasdaq}
                                country={each.country}
                                avg_buy={each.avg_buy}
                              />
                              <td>{each.allocation}%</td>
                              {each.entry_status == true ? (
                                <td>
                                  <FcCheckmark style={{ fontSize: "20px" }} />
                                </td>
                              ) : each.entry_status == false ? (
                                <td>
                                  <MdCancel
                                    className="text-danger"
                                    style={{ fontSize: "20px" }}
                                  />
                                </td>
                              ) : (
                                <td>{null}</td>
                              )}
                              <td>
                                {each.notes.length ? (
                                  <StockNoteModel
                                    count={each.notes.length}
                                    content={
                                      each.notes.length > 0
                                        ? each.notes.map((index) => {
                                            return <p>{index}</p>;
                                          })
                                        : null
                                    }
                                  />
                                ) : (
                                  <>No notes</>
                                )}
                              </td>
                            </tr>
                          );
                        })
                    : ""}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserConsolidatePortfolioUs;
