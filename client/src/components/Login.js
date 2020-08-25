import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/userActions";
import { Redirect } from "react-router-dom";

function Login({ users, user, login }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(form);
  };
  return (
    <>
      {user ? <Redirect to="/home" /> : null}
      <form onSubmit={submitHandler} style={{ textAlign: "center" }}>
        <h3>Login</h3>
        <input
          onChange={changeHandler}
          name="email"
          value={form.email}
          placeholder="email"
        />
        <input
          onChange={changeHandler}
          name="password"
          value={form.password}
          placeholder="password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.users.user
  };
};

export default connect(mapStateToProps, { login })(Login);
