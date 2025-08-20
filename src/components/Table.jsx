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

// import React, { useEffect, useState } from "react";

// function Table() {
//   const [carts, setCarts] = useState();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((json) => setCarts(json.products))
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <div>Loading....</div>
//       ) : (
//         <>
//             <table border={1}>
//           <thead>
//             <tr>
//               <th>"title"</th>
//               <th>description</th>
//               <th>"category"</th>
//               <th>""price""</th>
//               <th>""discountPercentage""</th>
//               <th>""rating""</th>
//               <th>"""stock"""</th>
//             </tr>

//             {carts?.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.title}</td>
//                 <td>{item.description}</td>
//                 <td>{item.category}</td>
//                 <td>{item.price}</td>
//                 <td>{item.discountPercentage}</td>
//                 <td>{item.rating}</td>
//                 <td>{item.stock}</td>
//               </tr>
//             ))}
//           </thead>
//         </table>
//         </>
//       )}
//     </div>
//   );
// }

// export default Table;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Table() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {/* <table border={1}>
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
          </table> */}

          {/* {users?.map((item) => (
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
            </div> */}

            
             <div className="cop">
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
    </div>
  );
}

export default Table;
