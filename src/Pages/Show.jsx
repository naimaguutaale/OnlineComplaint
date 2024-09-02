
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SideNav from './SideNav'

function Show() {
    const navigate=useNavigate()
    const Delete=(id)=>{
        axios.delete(`http://localhost:3000/delete${id}`).then(()=>{
            alert("Data has been Deleted");
              
            }).catch((error)=> console.log(error)
            )
        
          
        navigate('/view')}


  const [Complaint,setComplaint]=useState([])
  const getAllComplaint=()=>{
    axios.get("http://localhost:3000").then((response)=>{
      setComplaint(response.data)
    }).catch((error)=> console.log(error)
  )
      
    }
    useEffect(()=>{
      getAllComplaint()

    })
    
  return (

<div>
  <SideNav/>

    <div className='ml-[23%]'>
        <h1 className=' font-semibold text-3xl'>Complaint</h1>
    <div className=''>
          {
         Complaint.map((data)=>{
              return<tr className=' border-2   pt-4  w-[500px] ' >
                <td className='text-2xl mt-2 '>{data.Title}</td>
              <td className=' pl-7 '>{data.Description}</td>  
        <button onClick={()=>Delete(data._id)} className='px-4 py-1 bg-red-400 rounded  mt-3 ml-4'> Delete</button>
              </tr>
            })
          }
      </div>
        </div>
        </div>
        )
}

export default Show