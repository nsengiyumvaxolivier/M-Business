import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'




function Add() {
  const [product,setprodcut]=useState({
        pname:"",
        in_price:0,
        out_price:0,
        stock:0,
        exp_date:"",
        piece:0,
        supplier:"",
        price:0
    });
     const [sngprice,setsngprice]=useState(7);
    const location = useNavigate();
    const in_p= document.getElementById("in_p");
    const submit =()=>{
        axios.post("http://localhost:7000/add-product",product)
        .then(res=>{
            alert(res.data);
            location("/products");
        })

    }


  return (
    <>
    
     <div className="container-fluid bg-yellow-900 w-full h-screen p-3 flex">
        <div className="container bg-yellow-800 border border-yellow-600 border-2 p-3 w-[95%] md:w-[80%] rounded m-auto">
        <h4 className='font-bold p-2 text-white'>Add Product {sngprice}</h4>
        
        <hr className='text-white' />
        <div className="forms w-full p-3">
          <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>Product Name</label>
        <input type="text" onChange={(e)=>setprodcut({...product,pname:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>Supplier (option)</label>
        <select type="text" onChange={(e)=>setprodcut({...product,supplier:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold'> </select>
            </div>
            </div>
             <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>Quantity</label>
        <input type="number" onChange={(e)=>setprodcut({...product,stock:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>Price</label>
        <input type="number" onChange={(e)=>setprodcut({...product,price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold' />
            </div>
            </div>
             <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>Pieces</label>
        <input type="number" onChange={(e)=>{ setsngprice(...sngprice,e.value); setprodcut({...product,piece:e.target.value})}} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>In Price</label>
        <input type="number" onChange={(e)=>setprodcut({...product,in_price:e.target.value})} name="" id="in_p" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold desabled' value={sngprice} />
            </div>
            </div>
             <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>Out Price</label>
        <input type="number" onChange={(e)=>setprodcut({...product,out_price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white'>Expriy Date</label>
        <input type="date" onChange={(e)=>setprodcut({...product,exp_date:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold' />
            </div>
            </div>

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