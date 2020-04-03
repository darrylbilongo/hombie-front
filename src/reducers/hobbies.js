import { FETCH_HOBBIES_REQUEST, FETCH_HOBBIES_SUCCESS, FETCH_HOBBIES_FAILURE } from '../actionTypes'

const initialState = {
  loading: false,
  list: [],
  items: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_HOBBIES_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_HOBBIES_SUCCESS: {
      return {
        ...state,
        list: [...state.list, action.payload.items],
        items: action.payload.items.reduce((acc, val) => ({ ...acc, [val.id]: val }), state.items),
        loading: false
      }
    }
    case FETCH_HOBBIES_FAILURE: {
      return {
        ...state,
        loading: false
      }
    }
    default: {
      return state;
    }
  }
};