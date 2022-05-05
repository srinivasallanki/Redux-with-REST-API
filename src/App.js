import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import EditContact from './components/EditContact'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<ContactList />} />
          <Route path='/contacts/add' element={<AddContact />} />
          <Route path='/contacts/edit/:id' element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
