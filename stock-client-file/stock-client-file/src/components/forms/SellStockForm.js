import React from "react";

const SellStockForm = ({ handleSubmit, values, setValues }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <div className="form-group">
        <label for="exampleFormControlSelect1">Select Country</label>
        <select
          className="form-control"
          value={values.status}
          name="status"
          id="exampleFormControlSelect1"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        >
          <option>-Select-</option>
          <option>Sell</option>
        </select>
      </div>
      <label>Final Current Price</label>
      <input
        type="text"
        placeholder="Enter Average Buy Price"
        className="form-control"
        value={values.current_price}
        name="current_price"
        onChange={(e) =>
          setValues({ ...values, [e.target.name]: e.target.value })
        }
        autoFocus
      />
      <br />

      <button className="btn btn-outline-primary">Sell</button>
    </div>
  </form>
);

export default SellStockForm;
