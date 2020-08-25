import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function ProtectedRoute({ component: Component, user, userFetched, ...rest }) {
  return (
    <>
      {!userFetched ? <div>loading...</div> : <Route
        {...rest}
        render={props =>
          user ? (
            <Component {...props} />
          ) : (
              <Redirect to='/login' />
            )
        }
      />}
    </>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    user: state.users.user,
    userFetched: state.users.userFetched
  }
}

export default connect(mapStateToProps)(ProtectedRoute)
