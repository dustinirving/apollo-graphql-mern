import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createUser } from "../store/actions/userActions";

function Signup({ createUser }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createUser(form);
  };
  return (
    <form onSubmit={submitHandler} style={{ textAlign: "center" }}>
      <h3>Sign up</h3>
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
      <button type="submit">Signup</button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { createUser })(Signup);
