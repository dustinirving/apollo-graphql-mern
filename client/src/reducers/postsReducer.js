import { GET_ITEMS, CREATE_ITEM, ITEMS_LOADING } from '../actions/types'

const initState = {
  posts: [],
  loading: false
}
export default (state = initState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, posts: action.payload, loading: false }
    case CREATE_ITEM:
      return { ...state, posts: [...state.posts, action.payload] }
    case ITEMS_LOADING:
      return { ...state, loading: true }
    default:
      return { ...state }
  }
}
