import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { UpdateTransactionForm } from "../../../components";
import { getTransaction, updateTransaction } from "../../../api/transaction";
import { useSelector } from "react-redux";

const UpdateStock = ({ history }) => {
  const initialValues = {
    stock_name: "",
    avg_buy: "",
    current_price: "",
    track: "",
    allocation: "",
    user: "",
    country: "",
    status: "",
    last_buy_date: "",
  };
  const [values, setValues] = useState(initialValues);
  const { user } = useSelector((state) => ({ ...state }));
  const { id } = useParams();

  useEffect(() => {
    loadStock(id);
  }, []);
  const loadStock = (id) => {
    getTransaction(id)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTransaction(user.token, id, values)
      .then((res) => {
        history.push("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid">
      <div className="text-center">
        <h2>Update Transaction</h2>
      </div>
      <div className="col mt-5">
        <UpdateTransactionForm
          handleSubmit={handleSubmit}
          values={values}
          setValues={setValues}
        />
      </div>
    </div>
  );
};

export default UpdateStock;
