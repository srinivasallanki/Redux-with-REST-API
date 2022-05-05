import React, { useState, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addContact } from '../state/contacts/ContactsActions'

const AddContact = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const id = useId()
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newContact = {
      id: id,
      name,
      username,
      email,
      phone,
    }
    dispatch(addContact(newContact))
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
        Add Contact
      </button>
    </form>
  )
}

export default AddContact
