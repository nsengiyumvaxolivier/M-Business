import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




function Add() {
  const [product,setprodcut]=useState({
        pname:"",
        in_price:0,
        out_price:0,
        stock:0
    });
    const location = useNavigate();
    const submit =()=>{
        axios.post("http://localhost:7000/add-product",product)
        .then(res=>{
            alert(res.data);
            location("/products");
        })

    }


  return (
    <>
    
     <div className="container-fluid bg-blue-500 w-full h-screen p-3 flex">
        <div className="container bg-white p-3 w-1/3 rounded m-auto">
        <h4 className='font-bold p-2'>Add Product</h4>
        
        <hr />
        <div className="forms w-full p-3">
        <label htmlFor="" className='block'>Product Name</label>
        <input type="text" onChange={(e)=>setprodcut({...product,pname:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />

       <label htmlFor="" className='block'>In Price</label>
       <input type="number" onChange={(e)=>setprodcut({...product,in_price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
       <label htmlFor="" className='block'>Out Price</label>
       <input type="number" onChange={(e)=>setprodcut({...product,out_price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
        <label htmlFor="" className='block'>Opening Stock</label>
       <input type="number" onChange={(e)=>setprodcut({...product,stock:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
       <div className="flex py-2 justify-end ">
        <button onClick={()=>submit()} className='bg-green-600 font-bold text-white rounded p-2'>Save Product</button>
       
       </div>
        </div>

        </div>

    </div>
    </>
  )
}

export default Add