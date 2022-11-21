import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="vh-100 d-flex justify-content-center gap-3 align-items-center flex-column">
      <h1 className="fw-bold">This is not the page you are looking for.</h1>
      <button className="border-0 px-4 py-3 rounded-3" style={{ backgroundColor: "#1861AA" }}>
        <Link to="/" className="fs-2 text-decoration-none" style={{ color: "white" }}>
          Go Back to Home
        </Link>
      </button>
    </div>
  );
};

export default Error;
