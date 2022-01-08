import React from "react";
import "./CreateStockForm.css";
import { Radio } from "antd";

const CreateTransactionForm = ({ handleSubmit, values, setValues }) => {
  return (
    <div className="react-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6 mb-4">
            <label>Stock Name</label>
            <input
              type="text"
              placeholder="Enter stock name"
              className="form-input"
              value={values.stock_name}
              name="stock_name"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              autoFocus
              required={true}
            />
          </div>
          <br />
          <div className="form-group col-md-6 mb-4">
            <label for="exampleFormControlSelect1">Select Country</label>
            <select
              className="form-control"
              value={values.country}
              name="country"
              id="exampleFormControlSelect1"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            >
              <option>-Select-</option>
              <option>Indian</option>
              <option>US</option>
            </select>
          </div>
          <div className="form-group col-md-6 mb-4">
            <label>Average Buy/Sell Price</label>
            <input
              type="text"
              placeholder="Enter Average Buy/Sell Price"
              className="form-input"
              value={values.avg_buy}
              name="avg_buy"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              autoFocus
            />
          </div>
          <div className="form-group col-md-6 mb-4">
            <label>Allocation</label>
            <input
              type="text"
              placeholder="Enter Allocaion"
              className="form-input"
              value={values.allocation}
              name="allocation"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              autoFocus
            />
          </div>
          <div className="form-group col-md-6 mb-4">
            <label>Last Buy/Sell Date</label>
            <input
              type="date"
              placeholder="Enter last buy date"
              className="form-input"
              value={values.last_buy_date}
              name="last_buy_date"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              autoFocus
            />
          </div>
          <div className="form-group col-md-6 mb-4">
            <label className="d-block mb-3">Select Status</label>

            <Radio.Group
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
              value={values.status}
              name="status"
            >
              <Radio value={"Buy"} className="mr-4">
                Buy
              </Radio>
              <Radio value={"Sell"} className="mr-4">
                Sell
              </Radio>
            </Radio.Group>
          </div>
        </div>
        <label>Add Notes</label>
        <input
          type="text"
          placeholder="Add Note"
          className="form-input"
          value={values.notes}
          name="notes"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
          autoFocus
        />
        <button className="btn-form">Save</button>
      </form>
    </div>
  );
};

export default CreateTransactionForm;
