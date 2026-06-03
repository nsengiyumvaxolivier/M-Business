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

            <div className="container-fluid bg-yellow-900 w-full h-screen p-3 flex">
                <div className="container w-[95%] bg-yellow-800 p-3 md:w-1/2 rounded m-auto shadow border border-5 border-dashed border-yellow-700">
                <div className="flex w-full justify-between relative">
                    <h4 className='font-bold p-2 text-white'>Login Tou Your Account</h4>
                    <div className="info p-1 absolute right-0">
                        {message.code==200 &&<div className="message p-2 bg-green-400 rounded text-sm text-white">{message.message,location("products")}</div>}
                        {message.code==100 &&<div className="message p-2 bg-orange-400 rounded text-sm text-white">{message.message}</div>}
                        {message.code==50 &&<div className="message p-2 bg-red-500 rounded text-sm text-white">{message.message} !!</div>}
                        
                        
                        </div>
                    </div>
                    
                    
                    <hr className='bg-blue-600 font-bold text-white'/>
                    <div className="forms w-full p-3">
                        <label htmlFor="" className='block text-sm my-2 text-white'>Username</label> 
                        <div className="flex w-full border border-3 rounded focus:outline-1 border-yellow-900 my-3"><i className='bi bi-person-fill font-bold w-[10%] text-center bg-yellow-800 p-1'></i><input type="text" name="" id="" onChange={(e) => setuser({ ...user, username: e.target.value })} className='w-[90%] outline-0 p-1 text-sm bg-white' /></div>
                       <label htmlFor="" className='block text-sm my-2 text-white'>Password</label>
                        <div className="flex w-full border rounded focus:outline-1 border-yellow-900 my-3 border-3 "><i className='bi bi-lock-fill font-bold w-[10%] text-center bg-yellow-800 p-1'></i><input type="password" name="" id="password" onChange={(e) => setuser({ ...user, password: e.target.value })} className='w-[90%] outline-0 p-1 text-sm bg-white' /></div>
                        <div className="flex py-4">
                            <input type="checkbox" name="" id="" onClick={()=>show()} className='p-2' />
                            <label htmlFor="" className='mx-1 text-sm font-bold'>Show Password</label>
                        </div>
                        <div className="flex pt-5 justify-between ">
                            <button onClick={() => login()} className='bg-yellow-800 shadow shadow-white text-[12px] font-bold text-white cursor-pointer border  rounded p-1 px-4 transition hover:transform hover:-translate-0.5'>Login</button> 
                            <Link className='text-white  shadow shadow-green-400 border border-green-400  font-bold rounded p-2 text-sm cursor-pointer' to="/add-product">Signup</Link>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Login