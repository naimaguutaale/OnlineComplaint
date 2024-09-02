import React from 'react'
import { NavLink } from 'react-router-dom'

function SideNav() {
  return (
    <div className='bg-[#faa275] fixed h-screen selection: w-[20%] border-r-8 border-gray-200'>
        <h1 className='text-4xl ml-10 font-bold underline mb-20 pt-4 text-white'>Admin</h1>
<ul className='text-3xl ml-10 flex gap-10 flex-col  font-semibold text-white '> 
   <NavLink to='/view' > <li className='hover:underline cursor-pointer'> <i class="fa-solid fa-plus mr-4 text-blue-950"></i>View Complaint</li></NavLink>
   <NavLink to='/logout' ><li className='hover:underline cursor-pointer'> <i class="fa-solid fa-square-poll-vertical mr-4 text-blue-950"></i>LogOut</li></NavLink>
    </ul>    </div>
  )
}

export default SideNav