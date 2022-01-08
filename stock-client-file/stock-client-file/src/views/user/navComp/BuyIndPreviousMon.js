import { DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllTransactions } from "../../../api/transaction";

import StockNoteModel from "../../../components/modal/StockNoteModel";
import { GrPrevious, GrNext } from "react-icons/gr";

const BuyIndPreviousMon = () => {
  const [stocks, setStocks] = useState([]);
  const [pickDate, setPickDate] = useState(new Date().getMonth());

  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadStocks(user._id);
  }, []);

  const loadStocks = (id) => {
    getAllTransactions(id)
      .then((res) => {
        setStocks(res.data);
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

  const getModifiedMonth = () => {
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
    var month = months[pickDate];
    return month;
  };
  const datePicker = (dates, dateStrings) => {
    setPickDate(dateStrings - 1);
  };

  const handlePrevious = () => {
    const date = pickDate;
    if (date >= 1) {
      setPickDate(date - 1);
    }
  };
  const handleNext = () => {
    const date = pickDate;
    if (date <= 10) {
      setPickDate(date + 1);
    }
  };
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container-fluid">
        <div>
          <h4 className="text-center ">
            <span onClick={handlePrevious}>
              <GrPrevious />
            </span>
            <span style={{ marginLeft: "40", marginRight: "40" }}>
              {" "}
              {`${getModifiedMonth(pickDate)}`}
            </span>{" "}
            <span>{`${year}`}</span>{" "}
            <span onClick={handleNext}>
              <GrNext />
            </span>
          </h4>
        </div>
        <div className="mb-4">
          <span className="mr-4 font-weight-bold">Transaction by months</span>
          <DatePicker onChange={datePicker} picker="month" format="M" />
        </div>
        <div className="mb-5">
          <h3>Buy Transactions</h3>
        </div>
        <Card>
          <Card.Body>
            <table class="table table-striped text-center">
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
                      new Date(each.last_buy_date).getMonth() === pickDate &&
                      each.status === "Buy" &&
                      each.country === "Indian"
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
            <table class="table table-striped text-center">
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
                      new Date(each.last_buy_date).getMonth() === pickDate &&
                      each.status === "Sell" &&
                      each.country === "Indian"
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

export default BuyIndPreviousMon;
