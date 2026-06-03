import React, { useState , useEffect} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import axios from 'axios'



function Supplier() {
 const [supplier,setsupplier]=useState({
    name:"",
    phone:"",
    location:""
 })
 const savesupplier =()=>{
    axios.post("http://localhost:7000/add-supplier", supplier)
    .then(res=>{
        alert(res.data);
    })
 }
  return (
    <>
    
    <div className="container-fluid h-screen bg-yellow-900 flex ">
        <div className="container  w-[95%] md:w-1/3 bg-yellow-800 shadow p-2 m-auto">
        <h4 className='text-white p-2'>Add Supplier</h4>
        <hr className='text-white my-3' />
        <label htmlFor="" className='text-white p-2'>Name</label>
        <div className="flex w-full rounded border border-2 border-yellow-900 my-2"> 
            <i className='bi bi-person-fill p-1 w-[10%] bg-yellow-800 text-center font-bold'></i><input type="text" name="" onChange={(e)=>setsupplier({...supplier,name:e.target.value})} id="" className='p-1 w-[90%] bg-white outline-0 text-sm' />
            </div>
            <label htmlFor="" className='text-white p-2'>Phone</label>
        <div className="flex w-full rounded border border-2 border-yellow-900 my-2"> 
            <i className='bi bi-telephone-fill p-1 w-[10%] bg-yellow-800 text-center font-bold'></i><input type="text" name="" onChange={(e)=>setsupplier({...supplier,phone:e.target.value})} id="" className='p-1 w-[90%] bg-white outline-0 text-sm' />
            </div>
            <label htmlFor="" className='text-white p-2'>Location</label>
        <div className="flex w-full rounded border border-2 border-yellow-900 my-2"> 
            <i className='bi bi-geo-alt-fill p-1 w-[10%] bg-yellow-800 text-center font-bold'></i><input type="text" name="" onChange={(e)=>setsupplier({...supplier,location:e.target.value})} id="" className='p-1 w-[90%] bg-white outline-0 text-sm' />
            </div>
            <div className="flex p-2 w-full justify-end"><button onClick={()=>savesupplier()} className='rounded text-white cursor-pointer text-sm shadow p-2 shadow-white border font-bold'>Save Supplier</button></div>
        </div>
    </div>
    </>
  )
}

export default Supplier