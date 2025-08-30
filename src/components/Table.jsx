import React, { useEffect, useState } from "react";
import AddSVG from "../assets/plus-circle.svg";

function Table() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState({});
  const [isEdited, setIsEdited] = useState(null);
  const [searchHoga, setSearchHoga] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelected((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const normalizedSearch = searchHoga.toLowerCase();

  const handleAdd = (e) => {
    e.preventDefault();
    if (isEdited !== null) {
      setCarts((prevJoItem) => prevJoItem.map((item) => (item.id === isEdited.id ? { ...item, title: selected.title, price: selected.price } : item)));
    } else {
      setCarts((prevItems) => [
        {
          id: Date.now(),
          title: selected.title,
          price: selected.price,
        },
        ...prevItems,
      ]);
    }

    setIsEdited(null);
    setSelected({ title: "", price: "" });
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const toggle = (item) => {
    if (item) {
      setSelected({ title: item.title, price: item.price });
      setIsEdited(item);
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
      <div className="bhop">
        <div className="vffff">
          <input className="vgbg" type="text" placeholder="Search Your Element...." value={searchHoga} onChange={(e) => setSearchHoga(e.target.value)} />
        </div>

        {!showModal && (
          <div className="grew">
            <button className="vffv" onClick={() => toggle()}>
              <img src={AddSVG} />
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <form className="nh" onSubmit={handleAdd}>
          <div className="dee">
            <label>
              Title:
              <input name="title" type="text" required value={selected.title || ""} onChange={handleChange} />
            </label>
            <div>
              <label>
                Price:
                <input name="price" type="text" required value={selected.price || ""} onChange={handleChange} />
              </label>
            </div>
            <div>
              <button type="button" className="dreeee" onClick={handleCancel}>
                Cancel
              </button>
              <button className="dreeee" type="submit">
                Add
              </button>
            </div>
          </div>
        </form>
      )}

      {loading ? (
        <div>Loading....</div>
      ) : (
        <>
          {
            <table className="dew">
              <thead className="header-table">
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Edit</th>
                </tr>
              </thead>
              {carts
                ?.filter((item) => item.title.toLowerCase().includes(normalizedSearch))
                .map((item) => (
                  <tr className="tre" key={item.id}>
                    <td>{item.title}</td>
                    <td>₹{item.price}</td>

                    <td>
                      <button className="cdf" onClick={() => toggle(item)}>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </table>
          }
        </>
      )}
    </div>
  );
}

export default Table;
