import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart";
import { CartProvider } from "../context/cart";


const PaymentPage = () => {

  const navigation = useNavigate();

  const handlePay = () => {
    navigation("/last");
  };

  return (
    <>
      <div className="nmm">
        <form className="df">
          <div className="uppaer-items">
            <button>Apple Pay</button>
            <button>GPay</button>
          </div>

          <div className="vvv">
            <h3>Card</h3>
            <img />
            <img />
            <img />

            <label>
              Name on card:
              <input required type="text" placeholder="Enter Name" />
            </label>
            <label>
              Card Number:
              <input required type="text" placeholder="Card Number" />
            </label>
            <div className="ccc">
              <label>
                Expiry Date
                <input required type="date" placeholder="MM/YYYY" />
              </label>
              <label>
                Security Code(CVV)
                <input required type="password" placeholder="CVV" />
              </label>
            </div>
            
            <button type="submit" onClick={handlePay} className="pay">
              Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentPage;
