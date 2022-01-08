import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import StockData from "./StockData";
import { FcCheckmark } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import StockNoteModel from "../modal/StockNoteModel";

const StockCard = ({ eachStock, handleRemove }) => {
  const {
    _id,
    stock_name,
    avg_buy,
    nasdaq,
    allocation,
    country,
    entry_status,
    last_buy_date,
    notes,
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
    // var hour = created_date.getHours();
    // var min = created_date.getMinutes();
    // var sec = created_date.getSeconds();
    return date + "," + month + " " + year; // final date with time, you can use this according your requirement
  };

  return (
    <>
      <tr>
        <td>{stock_name}</td>
        <td>{getModifiedDate(last_buy_date)}</td>
        <td>{avg_buy}</td>
        {/* <td>{current_price}</td> */}
        <StockData nasdaq={nasdaq} country={country} avg_buy={avg_buy} />
        <td>{allocation}%</td>

        {entry_status == true ? (
          <td>
            <FcCheckmark />
          </td>
        ) : entry_status == false ? (
          <td>
            <MdCancel className="text-danger" />
          </td>
        ) : (
          <td>{null}</td>
        )}
        <td>
          {notes.length ? (
            <StockNoteModel
              count={notes.length}
              content={
                notes.length > 0
                  ? notes.map((index) => {
                      return <p>{index}</p>;
                    })
                  : null
              }
            />
          ) : (
            <>No notes</>
          )}
        </td>
        <td>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <HiOutlineDotsVertical />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={`/stock/edit/${_id}`}>
                  <i className="fas fa-edit mr-3"></i> Edit
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="text-danger" onClick={() => handleRemove(_id)}>
                  <i className="fas fa-trash-alt mr-3"></i> Delete
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </>
  );
};

export default StockCard;
