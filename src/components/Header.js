import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='container-fluid bg-dark'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4'>
        <Link
          to='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none'
        >
          <span className='fs-4 text-white'>Connect Book</span>
        </Link>

        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link
              to='/contacts/add'
              className='nav-link active'
              aria-current='page'
            >
              Create Contact
            </Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
