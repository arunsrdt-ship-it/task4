import { useContext } from "react";
import { CartContext } from "../context/cart";
import PropTypes from "prop-types";

function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

  if (!showModal) return null;
  return (
    <div className="ki">
      <h1>Cart</h1>
      <div>
        <button className="bnm" onClick={toggle}>
          Close
        </button>
      </div>
      <div className="bh">
        {cartItems.map((item) => (
          <div className="wrapper" key={item.id}>
            <div className="box cd">
              <img className="nht" src={item.thumbnail} alt={item.title} />
            </div>

            <div className="box sa">
              {item.title},({item.quantity})
            </div>
            <div className="box wq">${item.price}</div>

            <div className="mlk">
              <div className="nj">
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? (
        <div>
          <h1 className="ko">Total: ${getCartTotal()} </h1>
          
          <div className="vf">
            <button
              className="bnm"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
}
Cart.PropTypes = {
  showModal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default Cart;
