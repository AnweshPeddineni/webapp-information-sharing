import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getStocks } from "../../api/stock";
import StockByMonthAccordion from "../Accordion/StockByMonthAccordion";

const StockByMonth = () => {
  const [stocks, setStocks] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadStocks(user._id);
  }, []);

  const loadStocks = (id) => {
    getStocks(id)
      .then((res) => {
        setStocks(res.data);
        console.log(stocks);
      })
      .catch((err) => {
        // history.push("/");
        toast.error("Some error in fetching the data");
      });
  };

  const getModifiedMonth = (date1) => {
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
    var month = months[created_date.getMonth()];
    return month;
  };
  const getModifiedYear = (date1) => {
    var created_date = new Date(date1);
    var year = created_date.getFullYear();
    return year;
  };

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Buy Date</th>
            <th scope="col">Stock Name</th>
            <th scope="col">Buy Price</th>
            <th scope="col">Allocation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="4">
              <h4>Jun, 2021</h4>
            </td>
          </tr>
          {stocks && stocks.length
            ? stocks.map((each) => {
                if (getModifiedMonth(each.updatedAt) == "Jun") {
                  return (
                    <>
                      <StockByMonthAccordion key={each._id} eachStock={each} />
                    </>
                  );
                }
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default StockByMonth;
