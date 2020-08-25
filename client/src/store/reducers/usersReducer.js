import {
  GET_ITEMS,
  GET_USER,
  CREATE_ITEM,
  ITEMS_LOADING,
  LOGIN,
  USER_FETCHED
} from '../actions/types'

const initState = {
  users: [],
  loading: false,
  userFetched: false
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, users: action.payload, loading: false }
    case CREATE_ITEM:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false
      }
    case LOGIN:
      return { ...state, user: action.payload, loading: false }
    case GET_USER:
      return { ...state, user: action.payload, loading: false, userFetched: true }
    case ITEMS_LOADING:
      return { ...state, loading: true }
    case USER_FETCHED:
      return { ...state, userFetched: true }
    default:
      return { ...state }
  }
}
