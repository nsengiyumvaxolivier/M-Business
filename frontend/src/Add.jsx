import axios from 'axios';
import React, { useEffect } from 'react'
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
        supplier:0,
        price:0 
    });
   
     const [sngprice,setsngprice]=useState(0);
    const location = useNavigate();
    const in_p= document.getElementById("in_p");
    const submit =()=>{
      const in_p = document.getElementById("in_p");
      product.in_price=in_p.value;
        axios.post("http://localhost:7000/add-product",product)
        .then(res=>{
            console.log(res.data);
           
        })

    }
    const [suppliers,setsupplier]=useState([]);
    useEffect(()=>{ 
      
      axios.get("http://localhost:7000/get-supplier")
      .then(res=>{
        setsupplier(res.data);

      })

    },[])

  return (
    <>
    
     <div className="container-fluid bg-yellow-900 w-full h-[fit-content] md:h-screen p-3 flex">
        <div className="container bg-yellow-8000 border border-yellow-600 border-2 p-3 w-[95%] md:w-[80%] rounded m-auto">
        <h4 className='font-bold p-2 text-white'>Add Product</h4>
        
        <hr className='text-white' />
        <div className="forms w-full p-3">
          <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>Product Name</label>
        <input type="text" onChange={(e)=>setprodcut({...product,pname:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold rounded' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>Supplier (option)</label>
        <select type="text" onChange={(e)=>setprodcut({...product,supplier:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold rounded'>
          <option value={0} selected>--------</option>
          {
            suppliers.map((sup)=>(
              <option value={sup.sup_id}>{sup.sup_name}</option>
            ))
          }
           </select>
            </div>
            </div>
             <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>Quantity</label>
        <input type="number" onChange={(e)=>setprodcut({...product,stock:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold rounded' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>Unit Price</label>
        <input type="number" onChange={(e)=>setprodcut({...product,price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold rounded' />
            </div>
            </div>
             <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>Pieces</label>
        <input type="number" onChange={(e)=>{setsngprice(e.target.value); setprodcut({...product,piece:e.target.value})}} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold rounded' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>In Price</label>
        <input type="number" disabled onChange={(e)=>setprodcut({...product,in_price:e.target.value})} name="" id="in_p" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold desabled cursor-not-allowed' value={ (product.price)/sngprice} />
            </div>
            </div>
             <div className="flex-column md:flex">
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>Out Price</label>
        <input type="number" onChange={(e)=>setprodcut({...product,out_price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold rounded' />
            </div>
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="" className='block text-white text-sm'>Expriy Date</label>
        <input type="date" onChange={(e)=>setprodcut({...product,exp_date:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-2 border-yellow-900 outline-0 bg-white font-bold rounded' />
            </div>
            </div>

       <div className="flex py-2 justify-end ">
        <button onClick={()=>submit()} className='bg-yellow-800 font-bold text-white rounded p-2 shadow shadow-white border text-sm'>Save Product</button>
       
       </div>
        </div>

        </div>

    </div>
    </>
  )
}

export default Add