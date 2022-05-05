import { combineReducers } from 'redux'
import contactsReducer from './contacts/ContactsReducer'

const rootReducer = combineReducers({
  contacts:contactsReducer,
})

export default rootReducer
