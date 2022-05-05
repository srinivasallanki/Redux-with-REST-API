import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from './ContactsConstants'
const initialState = {
  contacts: [],
  contact: null,
}

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: payload,
      }
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      }
    case GET_CONTACT:
      let filterContacts = state.contacts.filter((item) => item.id === payload)
      filterContacts = filterContacts.values()
      for (let val of filterContacts) {
        filterContacts = val
      }
      return {
        ...state,
        contact: filterContacts,
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) =>
          item.id != payload.id ? payload : state.contacts
        ),
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload),
      }
    default:
      return state
  }
}

export default contactsReducer
