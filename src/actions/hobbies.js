import Api from '../api';
import { FETCH_HOBBIES_FAILURE, FETCH_HOBBIES_REQUEST, FETCH_HOBBIES_SUCCESS, SELECT_HOBBY, UNSELECT_HOBBY } from '../actionTypes';
import axios from 'axios';

export function selectHobby(id){
  return {
    type: SELECT_HOBBY,
    payload: {
      id
    }
  }
}

export function unselectHobby(id){
  return {
    type: UNSELECT_HOBBY,
    payload: {
      id
    }
  }
}

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
      dispatch({
        type: FETCH_HOBBIES_SUCCESS,
        payload: {
          items: data.items,
          offset
        }
      })
    } catch(error){
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

export function getHobbies () {
  // const foo = async () => {
  //   const APIurl = 'http://localhost:8082/api/hobbies'
  //   const fetchRes = await fetch(APIurl)

    
  // }

  // return foo();
  

   const fetchRes = axios
        .get('http://localhost:8082/api/hobbies')
        .then(
            res => {
              return res;
            }
        )
        .catch(err => {
              alert("Ne peut pas avoir les evenements")
              console.log(err)
  })

  return async dispatch => ({
    type: FETCH_HOBBIES_SUCCESS,
    payload: {
      items: fetchRes
    }
  })
}

