import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { connect } from 'react-redux'
import { creatPost, createPost } from '../actions/postActions'

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      title
      body
    }
  }
`

const Form = ({ createPost }) => {
  const [form, setForm] = useState({ title: '', body: '' })
  // const [createPost, { data }] = useMutation(CREATE_POST)

  const changeHandler = event => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const submitHandler = event => {
    event.preventDefault()
    createPost(form)
    // createPost({ variables: { title: form.title, body: form.body } })
  }

  return (
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler} name='title' placeholder='title' />
      <input onChange={changeHandler} name='body' placeholder='body' />
      <button type='submit'>Submit</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { createPost })(Form)
