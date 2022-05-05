import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { delContact } from '../state/contacts/ContactsActions'
const ContactItem = ({ item, selectAll }) => {
  const dispatch = useDispatch()
  const { name, id, username, email, phone } = item

  const handleDelete = (id) => {
    dispatch(delContact(parseInt(id)))
  }

  return (
    <tr>
      <td>
        <input
          checked={selectAll}
          className='form-check-input'
          type='checkbox'
          id={id}
        />
      </td>

      <td>
        <Avatar className='me-2' name={name} size='44' round={true} />
        {name}
      </td>
      <td>{username}</td>
      <td>@{email}</td>
      <td>@{phone}</td>
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <button type='button' className='btn btn-outline-primary btn-sm me-2'>
            <i className='material-icons'>edit</i>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(id)}
          type='button'
          className='btn btn-outline-primary btn-sm'
        >
          <i className='material-icons'>delete</i>
        </button>
      </td>
    </tr>
  )
}

export default ContactItem
