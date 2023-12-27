import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="content">
      <p>
        Click here To
        <br />
        <Link to="/SignUp" className="signUpBtn">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default HomePage;
