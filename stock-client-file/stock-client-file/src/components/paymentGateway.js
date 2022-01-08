import React from "react";
import { useSelector } from "react-redux";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const PaymentGateway = () => {
  const { user } = useSelector((state) => ({ ...state }));

  const displayRazorPay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay failed due to connection error");
      return;
    }
    const options = {
      key: "rzp_test_vfaeJZCkx4Ij7d",
      amount: "50000",
      currency: "INR",
      name: "Get Portfolio Access",
      description: "Test Transaction",
      //   image: "https://example.com/your_logo",
      //   order_id: "order_9A33XWu170gUtm",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: `${user.name}`,
        email: `${user.email}`,
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div>
      <button className="btn btn-info" onClick={displayRazorPay}>
        Complete Payment
      </button>
    </div>
  );
};

export default PaymentGateway;
