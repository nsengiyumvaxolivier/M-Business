import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'




function Update() {
     const [product,setprodcut]=useState([]);
     const {id}=useParams();
     const locations = useNavigate();
     useEffect(()=>{
        
       axios.get(`http://localhost:7000/update/${id}`)
    .then(res=>{
      setprodcut(res.data);
    }) 
     },[])
  
    const savechanges =()=>{
        axios.put(`http://localhost:7000/edit/${id}`,product)
        .then(res=>{
            alert(res.data);
            locations("/products")
        })
    }
  
  return (
   <>
   <div className="container-fluid bg-blue-500 w-full h-screen p-3 flex">
        <div className="container bg-white p-3 w-1/3 rounded m-auto">
        <h4 className='font-bold p-2'>Update Product</h4>
        
        <hr />
        <div className="forms w-full p-3">
        <label htmlFor="" className='block'>Product Name</label>
        <input type="text" value={product.p_name} onChange={(e)=>setprodcut({...product,p_name:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />

       <label htmlFor="" className='block'>In Price</label>
       <input type="number" value={product.in_price} onChange={(e)=>setprodcut({...product,in_price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
       <label htmlFor="" className='block'>Out Price</label>
       <input type="number" value={product.out_price} onChange={(e)=>setprodcut({...product,out_price:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
        <label htmlFor="" className='block'>Opening Stock</label>
       <input type="number" value={product.p_stock} onChange={(e)=>setprodcut({...product,p_stock:e.target.value})} name="" id="" className='w-full p-1 my-2 border border-gray-300 rounded outline-0  outline-blue-500' />
       <div className="flex py-2 justify-end ">
        <button onClick={()=>savechanges()} className='bg-blue-600 font-bold text-white rounded p-2'>Save Changes</button>
       
       </div>
        </div>

        </div>

    </div>
   </>
  )
}

export default Update