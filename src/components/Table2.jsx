// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import Navbar from "./Navbar";

// function Table() {
//   const [carts, setCarts] = useState();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://dummyjson.com/carts")
//       .then((res) => res.json())
//       .then((json) => setCarts(json.carts))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

// //   ar.map((ele) => console.log(111));

//   return (
//     <div className="App">
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <Navbar />
//           <h1>Carts</h1>
//           <table border={1}>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>Quantity</th>
//                 <th>Total</th>
//                 <th>Discount Percentage</th>
//                 <th>Discounted Total</th>
//               </tr>
//             </thead>

//             {carts === undefined && <p>No Data</p>}
//             {carts?.map((item) =>
//               item.products.map((ele) => (
//                 <tr key={ele.id}>
//                   <td>{ele.title}</td>
//                   <td>{ele.price}</td>
//                   <td>{ele.quantity}</td>
//                   <td>{ele.total}</td>
//                   <td>{ele.discountPercentage}</td>
//                   <td>{ele.discountedTotal}</td>
//                 </tr>
//               ))
//             )}
//           </table>
//         </>
//       )}
//     </div>
//   );
// }

// export default Table;

// import React, { useEffect, useState } from "react";

// function Table2() {
//   const [carts, setCarts] = useState();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://dummyjson.com/carts")
//       .then((res) => res.json())
//       .then((json) => setCarts(json.carts))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <>
//           <h2>My Carts</h2>
//           <table border={1}>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>price</th>
//                 <th>quantity</th>
//                 <th>total</th>
//                 <th>discount Percentage</th>
//                 <th>discountedTotal</th>
//               </tr>
//             </thead>

//             {carts?.map((item) =>
//               item.products.map((ele) => (
//                 <tr key={ele.id}>
//                   <td>{ele.title}</td>
//                   <td>{ele.price}</td>
//                   <td>{ele.quantity}</td>
//                   <td>{ele.total}</td>
//                   <td>{ele.discountPercentage}</td>
//                   <td>{ele.discountedTotal}</td>
//                 </tr>
//               ))
//             )}
//           </table>
//         </>
//       )}
//     </div>
//   );
// }

// export default Table2;

import React, { useContext, useEffect, useState } from "react";
import { CartProvider } from "../context/cart";
import { CartContext } from "../context/cart";
import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Table2 = () => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal((prev) => !prev);

  return (
    <CartProvider>
      <Table2Content toggle={toggle} showModal={showModal} />
    </CartProvider>
  );
};

function Table2Content({ toggle, showModal }) {
  const [carts, setCarts] = useState();
  const [loading, setLoading] = useState(false);

  const { cartItems, addToCart } = useContext(CartContext);

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
              <button onClick={toggle}><FontAwesomeIcon icon={faCartShopping} /></button>
              <div className="za">
                <span className="qw">{cartItems.length}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <Cart showModal={showModal} toggle={toggle} />
      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          {/* <table border={1}>
            <thead>
              <tr>
                <th>Title</th>
                <th>"price"</th>
                <th>"quantity"</th>
                <th>"total"</th>
                <th>"discountPercentage"</th>
                <th>"discountedTotal"</th>
              </tr>
            </thead>

            {carts?.map((item) =>
              item.products.map((ele) => (
               
                  <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <td>{ele.price}</td>
                  <td>{ele.quantity}</td>
                  <td>{ele.total}</td>
                  <td>{ele.discountPercentage}</td>
                  <td>{ele.discountedTotal}</td>
                </tr>
               
                
              ))
            )}
          </table> */}

          <div className="cop">
            {carts?.map((item) =>
              item.products.map((ele) => (
                <div className="wrapper" key={ele.id}>
                  <div className="box i">
                    <img className="gfe" src={ele.thumbnail} />
                  </div>
                  <div className="box a">
                    {ele.title} ({ele.quantity}){" "}
                  </div>
                  <div className="box b ">
                    <div>
                      <span className="price">${ele.price + " "}</span>
                      <span className="original-price"> ${ele.total}</span> <span className="dis">({ele.discountPercentage}% OFF)</span>
                    </div>
                  </div>
                  <div className="box c">
                    <button onClick={() => handleAddTocart(ele)} className="btn">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Table2;
