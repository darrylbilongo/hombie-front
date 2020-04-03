import Api from '../api';
import { FETCH_HOBBIES_FAILURE, FETCH_HOBBIES_REQUEST, FETCH_HOBBIES_SUCCESS } from '../actionTypes';

export function fetchHobbies(offset, max){
  return async dispatch => {
    dispatch({
      type: FETCH_HOBBIES_REQUEST,
      payload: {
        offset
      }
    })
    try {
      const { data } = await Api.fetchHobbies(offset, max);
      console.log(data)
      dispatch({
        type: FETCH_HOBBIES_SUCCESS,
        payload: {
          items: data.items,
          offset
        }
      })
    } catch(error){
      console.error(error)
      dispatch({
        type: FETCH_HOBBIES_FAILURE,
        payload: {
          offset,
          error
        }
      })
    }
  }
}