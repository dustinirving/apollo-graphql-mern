import React, { useState } from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      _id
      title
      body
    }
  }
`

const Form = () => {
  const [form, setForm] = useState({ title: '', body: '' })
  const [createPost, { data }] = useMutation(CREATE_POST)

  const changeHandler = event => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const submitHandler = event => {
    event.preventDefault()
    createPost({ variables: { title: form.title, body: form.body } })
  }
  return (
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler} name='title' placeholder='title' />
      <input onChange={changeHandler} name='body' placeholder='body' />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
