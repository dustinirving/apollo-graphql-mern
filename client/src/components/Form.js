import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createPost } from "../store/actions/postActions";
import { getUser } from "../store/actions/userActions";

// import { gql, useMutation } from '@apollo/client'

// const CREATE_POST = gql`
//   mutation createPost($title: String!, $body: String!) {
//     createPost(title: $title, body: $body) @client {
//       title
//       body
//     }
//   }
// `

// const [createPost, { data }] = useMutation(CREATE_POST)
// createPost({ variables: { title: form.title, body: form.body } })

const Form = ({ users, createPost, getUser }) => {
  const [form, setForm] = useState({ title: "", body: "" });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    createPost(form);
    setForm({ title: "", body: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={changeHandler}
        name="title"
        value={form.title}
        placeholder="title"
      />
      <input
        onChange={changeHandler}
        name="body"
        value={form.body}
        placeholder="body"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, { createPost, getUser })(Form);
