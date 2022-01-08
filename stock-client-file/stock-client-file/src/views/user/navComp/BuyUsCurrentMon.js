import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllTransactions } from "../../../api/transaction";

import StockNoteModel from "../../../components/modal/StockNoteModel";

const BuyIndCurrentMon = () => {
  const [stocks, setStocks] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadStocks(user._id);
  }, []);

  const loadStocks = (id) => {
    getAllTransactions(id)
      .then((res) => {
        setStocks(res.data);
        console.log(res.data);
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
    return date + "," + month + " " + year;
  };

  return (
    <>
      <div className="container-fluid">
        <div className="mb-5">
          <h3>Buy Transactions</h3>
        </div>
        <Card>
          <Card.Body>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Stock Name</th>
                  <th scope="col">Buy Date</th>
                  <th scope="col">Buy Price</th>
                  <th scope="col">Allocation</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {stocks
                  .filter(
                    (each) =>
                      new Date(each.last_buy_date).getMonth() ===
                        new Date().getMonth() &&
                      each.status === "Buy" &&
                      each.country === "US"
                  )
                  .map((each) => {
                    if (each.length !== 0) {
                      return (
                        <>
                          <tr>
                            <td>{getModifiedDate(each.last_buy_date)}</td>
                            <React.Fragment key={each._id}>
                              <td>{each.stock_name}</td>
                              <td>{each.avg_buy}</td>
                              <td>{each.allocation}</td>
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
                            </React.Fragment>
                          </tr>
                        </>
                      );
                    } else
                      return (
                        <tr>
                          <td colspan="4" className="text-center bg-white">
                            No Buy transaction this month
                          </td>
                        </tr>
                      );
                  })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </div>
      <div className="container-fluid mt-5">
        <div className="mb-5">
          <h3>Sell Transactions</h3>
        </div>
        <Card>
          <Card.Body>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Stock Name</th>
                  <th scope="col">Sell Date</th>
                  <th scope="col">Sell Price</th>
                  <th scope="col">Allocation</th>
                  <th scope="col">Notes</th>
                </tr>
              </thead>
              <tbody>
                {stocks
                  .filter(
                    (each) =>
                      new Date(each.last_buy_date).getMonth() ===
                        new Date().getMonth() &&
                      each.status === "Sell" &&
                      each.country === "US"
                  )
                  .map((each) => {
                    if (each.length !== 0) {
                      return (
                        <>
                          <tr>
                            <React.Fragment key={each._id}>
                              <td>{each.stock_name}</td>
                              <td>{getModifiedDate(each.last_buy_date)}</td>
                              <td>{each.avg_buy}</td>
                              <td>{each.allocation}</td>
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
                            </React.Fragment>
                          </tr>
                        </>
                      );
                    } else {
                      return (
                        <tr>
                          <td colspan="4" className="text-center bg-white">
                            No Sell transaction this month
                          </td>
                        </tr>
                      );
                    }
                  })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default BuyIndCurrentMon;
