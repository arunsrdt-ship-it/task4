import React, { useContext, useEffect, useState } from "react";
import { CartProvider } from "../context/cart";
import { CartContext } from "../context/cart";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Table2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setShowModal((prev) => !prev);
    setOpen(true);
  };

  return (
    <CartProvider>
      <Table2Content toggle={toggle} showModal={showModal} />
    </CartProvider>
  );
};

function Table2Content({ toggle, showModal }) {
  const [carts, setCarts] = useState();
  const [loading, setLoading] = useState(false);

  const { cartItems, addToCart, removeOne } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((json) => setCarts(json.carts))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddTocart = (item) => {
    addToCart(item);
    toggle();
  };

  const handleRemoveOne = (id) => {
    removeOne(id);
  };

  return (
    <>
      <div className="top-navbar">
        <ul className="nav-list">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Main</a>
          </li>
          <li>
            <a href="">Footer</a>
          </li>
          <li className="dropdown">
            <a href="">DropDown</a>
            <div className="drop-list">
              <a>Products</a>
              <a>Link2</a>
              <a href="">Link3</a>
            </div>
          </li>
        </ul>

        <div className="right-side">
          {!showModal && (
            <div className="bml">
              <button onClick={toggle}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <div className="za">
                <span className="qw">{cartItems.length}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Cart showModal={showModal} toggle={toggle} />
      <Cart />

      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          {
            !showModal && (
              <div className="cop">
            {carts?.map((item) =>
              item.products.map((ele) => (
                <div className="wrapper" key={ele.id}>
                  <div className="box i">
                    <img className="gfe" src={ele.thumbnail} />
                  </div>
                  <div className="box a">
                    {ele.title} ({ele.quantity})
                  </div>
                  <div className="box b ">
                    <div>
                      <span className="price">${ele.price + " "}</span>
                      <span className="original-price"> ${ele.total}</span> <span className="dis">({ele.discountPercentage}% OFF)</span>
                    </div>
                  </div>
                  <div className="box c">
                    {cartItems.some((cu) => cu.id === ele.id) ? (
                      <button onClick={() => handleRemoveOne(ele.id)} className="btn remove">
                        Remove From Cart
                      </button>
                    ) : (
                      <button onClick={() => handleAddTocart(ele)} className="btn add">
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
            )
          }
        </>
      )}
    </>
  );
}

export default Table2;
