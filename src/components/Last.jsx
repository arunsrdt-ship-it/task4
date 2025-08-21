import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Last = () => {
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => navigation("/table2"), 5000);
  }, []);

  return <div className="fe">
    <h1>Your Order is complete!</h1>
  </div>;
};

export default Last;
