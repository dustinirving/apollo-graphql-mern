import React, { useEffect } from "react";
import Signup from "../components/Signup";
import Login from "../components/Login";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Landing({ users }) {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <Signup />
        </div>
        <div className="col-6">
          <Login />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Landing);
