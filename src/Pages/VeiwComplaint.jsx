import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideNav from './SideNav'

function VeiwComplaint() {
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
    <div className='ml-[25%]'>
        <h1 className='text-4xl pt-4'>Complaint</h1>
    <div className=' '>
          {
         Complaint.map((data)=>{
              return<tr className=' border-2   pt-4  ' >
                <td className='text-2xl mt-2 '>{data.Title .substring(0,10)}</td>
              <td className=' p-2 border-2'>{data.Description.substring(0,0)}</td>  
            <Link to='/show'> <button className='px-4 py-1 bg-gray-400 rounded  mt-3 '>Show</button>
            </Link> 
              </tr>
            })
          }
      </div>
        </div>
        </div>
  )
}

export default VeiwComplaint