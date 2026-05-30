import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Create() {
    const [user,setuser]=useState({
        username:"",
        password:""
    });
    const location = useNavigate();
    const submit =()=>{
        axios.post("http://localhost:7000/create",user)
        .then(res=>{
            alert(res.data);
            location("/");
        })

    }

  return (
   <>
    
    <div className="container-fluid bg-blue-500 w-full h-screen p-3 flex">
        <div className="container bg-white p-3 w-1/3 rounded m-auto">
        <h4 className='font-bold p-2'>Create Account</h4>
        
        <hr />
        <div className="forms w-full p-3">
        <label htmlFor="" className='block'>UserName</label>
        <input type="text" onChange={(e)=>setuser({...user,username:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />

       <label htmlFor="" className='block'>Password</label>
       <input type="password" onChange={(e)=>setuser({...user,password:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
        <label htmlFor="" className='block'>Retype Password</label>
       <input type="password" name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
       
       <div className="flex py-2">
        <input type="checkbox" name="" id="" className='p-2' />
        <label htmlFor="" className='mx-1'>Show Password</label>
       </div>
       <div className="flex py-2 justify-between ">
        <button onClick={()=>submit()} className='bg-green-600 font-bold text-white rounded p-2'>Submit</button>
        <Link className='text-blue-600 font-bold rounded p-2 underline' to="/">Login</Link>
       </div>
        </div>

        </div>

    </div>
    </>
  )
}

export default Create