import axios from 'axios'
import React, { useState } from 'react'

function Login() {

  const [Title, setTitle]=useState("")
  const [Description, setDescription]=useState("")
  const handleDate=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/create",{

      "Title":Title,
      "Description":Description
    }).then(()=>{
      alert("Data has been Saved ")
      setTitle('')
      setDescription('')
  
     
    }).catch((error)=> console.log(error)
    )
   
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold text-center">Complaint</h2>
      <form className="space-y-4">
        <div>
          <label  className="block text-sm font-medium text-gray-700">
          Title
          </label>
          <input
            type="text" value={Title} onChange={(event)=> setTitle(event.target.value)} 

          
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        
           
            required
          />
        </div>
        <div>
          <label  className="block text-sm font-medium text-gray-700">
          Enter your Complaint
          </label>
          <textarea
            type="text"  value={Description} onChange={(event)=> setDescription(event.target.value)} 
           
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
           
            required
          />
        </div>
        <button
          type="submit" onClick={handleDate}
          className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
      Submit
        </button>
      </form>
   
    </div>
  </div>




  )
}

export default Login