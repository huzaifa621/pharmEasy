// import "./App.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

function Payment() {
  const value = useContext(AuthContext);
  useEffect(() => {
    handlePayment();
  }, []);

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_hWn45h7vbMk9ZG",
      amount: data.amount,
      currency: data.currency,
      name: value.formData.fname,
      description: "PharmEasy.in",
      image: "https://pharmeasy.in/pe_logo_2x.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:8080/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
        let redirect_url;
        if (
          typeof response.razorpay_payment_id == "undefined" ||
          response.razorpay_payment_id < 1
        ) {
          redirect_url = "/you-owe-money.html";
        } else {
          redirect_url = "/thnx-you-paid";
        }
        window.location.href = redirect_url;
      },
      theme: {
        color: "#5DC6AD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:8080/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: value.total });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      {/* <div className="book_container">
        <img src={book.img} alt="book_img" className="book_img" />
        <p className="book_name">{book.name}</p>
        <p className="book_author">By {book.author}</p>
        <p className="book_price">
          Price : <span>&#x20B9; {book.price}</span>
        </p>
        <button onClick={handlePayment} className="buy_btn">
          buy now
        </button>
      </div> */}
    </div>
  );
}

export default Payment;
