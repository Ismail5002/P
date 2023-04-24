import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center gap-10">
      <Link className="text-red-900" to="/POST">
        POST
      </Link>
      <Link className="text-red-900" to="/GET">
        GET
      </Link>
      <span>
        <button className="text-red-900" onClick={() => navigate(-1)}>
          goBack
        </button>
      </span>
    </div>
  );
};

export default Navbar;
