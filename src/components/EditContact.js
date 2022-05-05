import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getContact, updateContact } from '../state/contacts/ContactsActions'

const EditContact = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const contact = useSelector((state) => state.contacts.contact)
  console.log(contact)
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    dispatch(getContact(parseInt(id)))
  }, [id])

  useEffect(() => {
    if (contact != null) {
      setName(contact.name)
      setUserName(contact.username)
      setEmail(contact.email)
      setPhone(contact.phone)
    }
  }, [contact])

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedContact = Object.assign(contact, {
      name,
      username,
      email,
      phone,
    })

    dispatch(updateContact(updatedContact))
    navigate('/')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label className='form-label'>Name</label>
        <input
          type='text'
          className='form-control'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>UserName</label>
        <input
          type='text'
          className='form-control'
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Phone</label>
        <input
          type='text'
          className='form-control'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Update Contact
      </button>
    </form>
  )
}

export default EditContact
