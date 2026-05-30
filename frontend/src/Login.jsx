import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.min.css'



function Login() {
    const [message, setmessage] = useState({
        message: "",
        code: 0
    })
    const [user, setuser] = useState({
        username: "",
        password: ""
    });
    const location = useNavigate();
    const login = () => {
     
        axios.post("http://localhost:7000/login", user)
            .then(res => {
               const output=res.data;
              
                setmessage(output);
                setTimeout(()=>{
                    setmessage([]);
                },3000)
               

            })

    }
    var count=1;
    const show =()=>{
        
        const pass = document.getElementById("password");
       if (count == 1) {
        pass.type="text";
        count=0;
        
       } 
       else{
        pass.type="password";
        count=1;
       }
    }

    return (
        <>

            <div className="container-fluid bg-gray-900 w-full h-screen p-3 flex">
                <div className="container w-full bg-gray-700 p-3 md:w-1/3 rounded m-auto shadow shadow-gray-300 shadow-sm">
                <div className="flex w-full justify-between">
                    <h4 className='font-bold p-2 text-white'>Login Here</h4>
                    <div className="info p-1">
                        {message.code==200 &&<div className="message p-2 bg-green-400 rounded text-sm text-white">{message.message,location("products")}</div>}
                        {message.code==100 &&<div className="message p-2 bg-orange-400 rounded text-sm text-white">{message.message}</div>}
                        {message.code==50 &&<div className="message p-2 bg-red-500 rounded text-sm text-white">{message.message} !!</div>}
                        
                        
                        </div>
                    </div>
                    
                    
                    <hr className='bg-blue-600 font-bold text-blue-700'/>
                    <div className="forms w-full p-3">
                        <label htmlFor="" className='block text-sm text-white my-2'>UserName</label>
                        <input type="text" onChange={(e) => setuser({ ...user, username: e.target.value })} name="" id="" className='w-full p-1 my-2 border text-white text-sm px-2 border-gray-300 rounded outline-0 focus:outline focus:outline-2 focus:outline-blue-500' />

                        <label htmlFor="" className='block text-sm text-white my-2'>Password</label>
                        <input type="password" onChange={(e) => setuser({ ...user, password: e.target.value })} name="" id="password" className='w-full p-1 my-2 text-white text-sm px-2 border border-gray-300 rounded outline-0 focus:outline focus:outline-2 focus:outline-blue-500' />
                        <div className="flex py-2">
                            <input type="checkbox" name="" id="" onClick={()=>show()} className='p-2' />
                            <label htmlFor="" className='mx-1 text-sm font-bold'>Show Password</label>
                        </div>
                        <div className="flex py-2 justify-between ">
                            <button onClick={() => login()} className='bg-blue-800 text-[12px] font-bold text-white rounded p-1 px-4'>Login</button>
                            <Link className='text-green-500 font-bold rounded p-2 underline text-sm' to="/create-account">SignUp</Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Login