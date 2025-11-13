import { Routes, Route } from 'react-router-dom'
import UserList from '../Components/UserList'
import UserForm from '../Components/UserForm'
import UserDetails from '../Components/UserDetails'
import './App.css'

function App() {
  return (
    <div className='app'>
      <nav></nav>
      <main className='container'>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/Users/new" element={<UserForm mode="create" />} />
          <Route path="/Users/:id" element={<UserDetails />} />
          <Route path="/Users/:id/edit" element={<UserList mode="edit" />} />
       </Routes>

      </main>
    </div>
  )
}

export default App
