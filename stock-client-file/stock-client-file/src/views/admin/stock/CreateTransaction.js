import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createTransaction } from "../../../api/transaction";
import CreateTransactionForm from "../../../components/forms/CreateTransactionForm";
import { Col, Container, Row } from "react-bootstrap";

const CreateTransaction = ({ history }) => {
  const initialValues = {
    stock_name: "",
    avg_buy: "",
    current_price: "",
    track: "",
    allocation: "",
    user: "",
    country: "",
    last_buy_date: "",
    status: "Buy",
  };
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.table(user);
    console.table(values);
    createTransaction(user.token, values, user._id)
      .then((res) => {
        setLoading(false);
        setValues(initialValues);
        toast.success(`"${res.data.stock_name}" is created`);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data);
        console.log(err);
      });
  };

  return (
    <div className="col">
      <Container className="stock-section">
        <Row>
          <Col md={12}>
            <div className="text-center">
              <h3>Create new transaction </h3>
            </div>
          </Col>
          <Col md={12} sm={12}>
            <CreateTransactionForm
              handleSubmit={handleSubmit}
              values={values}
              setValues={setValues}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateTransaction;
