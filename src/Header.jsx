import React from 'react'
import {useNavigate } from 'react-router-dom'

function Header() {
    const navigate=useNavigate()
    const Complaint=()=>{
        navigate('/login')
    }
    const admin=()=>{
        navigate('/admin')
    }
  return (
    <div className='bg-[#ffe5ec] h-screen'>
    <div className='flex justify-around text-3xl p-2 bg-[#219ebc] text-white items-center'>
        <h1>Online Complaint</h1> 
        <h1>Home</h1>
        <button  onClick={admin} className='px-7 py-3 bg-[#f6bd60] rounded '> Admin</button>
       
       </div>
       <div className=''>
        <h1 className='text-3xl text-center mt-56 '> Welcome Your Complaint</h1>
 <button onClick={Complaint} className='px-7 py-3 text-2xl bg-[#f6bd60] rounded text-center mt-5 ml-[550px]'>Complaint</button>
       </div>

       </div>
  )
}

export default Header