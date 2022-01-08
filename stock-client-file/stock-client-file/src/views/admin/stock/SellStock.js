import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SellStockForm, AdminNav } from "../../../components";
import { getStock, updateStock } from "../../../api/stock";
import { useSelector } from "react-redux";

const SellStock = ({ history }) => {
  const initialValues = {
    stock_name: "",
    avg_buy: "",
    current_price: "",
    nasdaq: "",
    track: "",
    allocation: "",
    user: "",
    country: "",
    status: "",
  };
  const [values, setValues] = useState(initialValues);
  const { user } = useSelector((state) => ({ ...state }));
  const { id } = useParams();

  useEffect(() => {
    loadStock(id);
  }, []);
  const loadStock = (id) => {
    getStock(id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateStock(user.token, id, values)
      .then((res) => {
        history.push("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col text-center">
          <SellStockForm
            handleSubmit={handleSubmit}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </div>
  );
};

export default SellStock;
