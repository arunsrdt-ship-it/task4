// // import React from "react";
// // import { useEffect } from "react";
// // import { useState } from "react";
// // import Navbar from "./Navbar";

// // function Table() {
// //   const [carts, setCarts] = useState();
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     setLoading(true);
// //     fetch("https://dummyjson.com/products")
// //       .then((res) => res.json())
// //       .then((json) => setCarts(json.products))
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   }, []);

// //   console.log("first", carts);
// //   return (
// //     <div className="App">
// //       {loading ? (
// //         <div>Loading...</div>
// //       ) : (
// //         <>
// //         <Navbar />
// //           <h1>Carts</h1>
// //           <table border={1}>
// //             <thead>
// //               <tr>
// //                 <th>Title</th>
// //                 <th>Description</th>
// //                 <th>Category</th>
// //                 <th>Price</th>
// //               </tr>
// //             </thead>

// //             {carts === undefined && <p>No Data</p>}
// //             {carts?.map((item) => (
// //               <tr key={item.id}>
// //                 <td>{item.title}</td>
// //                 <td>{item.description}</td>
// //                 <td>{item.category}</td>
// //                 <td>{item.price}</td>
// //               </tr>
// //             ))}
// //           </table>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // export default Table;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Table() {
  const [carts, setCarts] = useState();
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({ title: "", price: "" });

  const [showModal, setShowModal] = useState(false);

  const toggle = (item) => {
    if (item) {
      setSelected({ title: item.title, price: item.price });
    }
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setCarts(json.products))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {showModal && (
        <form className="nh">
          <div className="dee">
            <label>
              Title:
              <input type="title" required value={selected.title} onChange={(e) => setSelected(...selected, { title: e.target.value })} />
            </label>
            <div>
              <label>
                Price:
                <input type="text" required value={selected.price} onChange={(e) => setSelected(...selected, { price: e.target.value })} />
              </label>
            </div>
          </div>
        </form>
      )}

      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          {!showModal && (
            <table border={1}>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Edit</th>
                </tr>

                {carts?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>

                    <button onClick={() => toggle(item)}>Edit</button>
                  </tr>
                ))}
              </thead>
            </table>
          )}  
        </>
      )}
    </div>
  );
}

export default Table;

// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";

// function Table() {
//   const [users, setUsers] = useState();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((json) => setUsers(json))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       {loading ? (
//         <h2>Loading...</h2>
//       ) : (
//         <>
{
  /* <table border={1}>
            <thead>
              <tr>
                <th>UserId</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>

            {users?.map((item) => (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            ))}
          </table> */
}

{
  /* {users?.map((item) => (
            {/* <div className="mobo">
              <div className="card-container" key={item.id}>
              <div className="card">
                <div className="card-content">
                  <h2 className="card-title">{item.userId}</h2>
                  <p className="card-description">
                    {item.title}
                  </p>
                  <button className="card-button">Read More...</button>
                </div>
              </div>
            </div>
            </div> */
}

{
  /* <div className="cop">
               {
                users?.map((item) => (
                 <div className="done">
                   <div className="wrappers">
                    <div className="boxi" key={item.id} >
                    <div className="box f">{item.userId}</div>
                    <div className="box g">{item.title}</div>
                  </div>
                  </div>
                 </div>
                ))
              }
             </div>
           
        </>
      )}
    </div> */
}
{
  /* );
}

export default Table; */
}
