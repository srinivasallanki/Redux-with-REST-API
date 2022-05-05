import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from './ContactItem'
import { useDispatch } from 'react-redux'
import { getContacts } from './../state/contacts/ContactsActions'
const ContactList = () => {
  const dispatch = useDispatch()
  const [selectAll, setSelectAll] = useState(false)
  const contacts = useSelector((state) => state.contacts.contacts)

  useEffect(() => {
    dispatch(getContacts())
  }, [])
  return (
    <table className='table shadow'>
      <thead>
        <tr>
          <th>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value={selectAll}
                id='selectAll'
                onChange={() => setSelectAll(!selectAll)}
              />
            </div>
          </th>

          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item) => (
          <ContactItem key={item.id} item={item} selectAll={selectAll} />
        ))}
      </tbody>
    </table>
  )
}

export default ContactList
