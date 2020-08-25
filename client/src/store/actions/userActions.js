import {
  GET_USER,
  CREATE_ITEM,
  ITEMS_LOADING,
  LOGIN,
  USER_FETCHED
} from "./types";
import { loginQuery, createUserQuery, getUserQuery } from "./queries";
import axios from "axios";
// { headers: { Authorization: `Bearer ${token}` } }

// export const getUsers = () => dispatch => {
//   dispatch(setItemsLoading())
//   axios
//     .post('/', { query: getUsersQuery })
//     .then(res => {
//       dispatch({
//         type: GET_ITEMS,
//         payload: res.data.data.users
//       })
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }

export const getUser = () => (dispatch) => {
  dispatch(setItemsLoading())
  axios.post('/graphql', { query: getUserQuery }).then((res) => {
    console.log(res.data.data.user)
    dispatch({
      type: GET_USER,
      payload: res.data.data.user
    })
  }).catch(err => {
    dispatch(userFetched())
  })
};

export const createUser = ({ email, password }) => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .post("/graphql", {
      query: createUserQuery,
      variables: { email, password },
    })
    .then((res) => {
      dispatch({
        type: CREATE_ITEM,
        payload: res.data.data.createUser,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = ({ email, password }) => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .post("/graphql", { query: loginQuery, variables: { email, password } })
    .then((res) => {
      dispatch({
        type: LOGIN,
        payload: res.data.data.login,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
export const userFetched = () => {
  return {
    type: USER_FETCHED
  };
};
