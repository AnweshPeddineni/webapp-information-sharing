import React, { useEffect, useState } from "react";

import StockByMonth from "../table/StockByMonth";

const StockSoldByMonthAccordion = ({ eachStock }) => {
  const {
    _id,
    stock_name,
    avg_buy,
    current_price,
    nasdaq,
    track,
    createdAt,
    updatedAt,
    allocation,
  } = eachStock;
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

  //   const convertValue = () => {
  //     if (getModifiedMonth(updatedAt) == "Jun") {
  //       return (
  //         <div>
  //           <h2>
  //             {getModifiedMonth(updatedAt)} , {getModifiedYear(updatedAt)}
  //           </h2>

  //           </table>
  //         </div>
  //       );
  //     }
  //   };
  return (
    <tr>
      <td>{getModifiedDate(updatedAt)}</td>
      <td>{stock_name}</td>
      <td>{avg_buy}</td>
      <td>{allocation}</td>
    </tr>
  );
};

export default StockSoldByMonthAccordion;
