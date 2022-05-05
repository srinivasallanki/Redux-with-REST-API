import {
  GET_CONTACTS,
  ADD_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from './ContactsConstants'
import axios from 'axios'
export const getContacts = () => async (dispatch) => {
  const results = await axios.get('https://jsonplaceholder.typicode.com/users')
  dispatch({
    type: GET_CONTACTS,
    payload: results.data,
  })
}

export const addContact = (newContact) => {
  return {
    type: ADD_CONTACT,
    payload: newContact,
  }
}

export const getContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id,
  }
}

export const updateContact = (updatedContact) => {
  return {
    type: UPDATE_CONTACT,
    payload: updatedContact,
  }
}

export const delContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  }
}
