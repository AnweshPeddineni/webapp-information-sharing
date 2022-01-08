import React from "react";
import PaymentGateway from "../../components/paymentGateway";

const History = () => {
  return (
    <div>
      <h1 className="mb-3">User Dashboard</h1>
      <div className="accept-payment">
        <PaymentGateway />
      </div>
    </div>
  );
};

export default History;
