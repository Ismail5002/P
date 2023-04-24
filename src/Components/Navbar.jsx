import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between">
      Hello
      <Link to="/POST">POST</Link>
      <Link to="/GET">GET</Link>
      <span>
        <button onClick={() => navigate(-1)}>goBack</button>
      </span>
    </div>
  );
};

export default Navbar;
