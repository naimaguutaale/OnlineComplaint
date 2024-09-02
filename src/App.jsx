import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Admin from './Pages/Admin'
import VeiwComplaint from './Pages/VeiwComplaint'
import Show from './Pages/Show'
import Header from './Header'
import Logout from './Pages/LogOut'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/> }></Route>
        <Route path='/admin' element={<Admin/> }></Route>
        <Route path='/view' element={<VeiwComplaint/> }></Route>
        <Route path='/show' element={<Show/> }></Route>
        <Route path='/' element={<Header/> }></Route>
        <Route path='/logout' element={<Logout/> }></Route>
      </Routes>
    </div>
  )
}

export default App