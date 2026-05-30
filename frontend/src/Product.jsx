import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function Product() {
    const location=useNavigate();
    const [products,setproducts]=useState([]);
useEffect(()=>{
    axios.get("http://localhost:7000/get-products")
    .then(res=>{
        setproducts(res.data);
    })

},[])
const Delete =(p)=>{
    axios.delete(`http://localhost:7000/delete-product/${p}`)
    .then(res=>{
        alert(res.data);
        // to fillter the table agin while the row deleted...........................................................
        setproducts(products.filter((pr)=>pr.p_id !=p));
    })
}
    return (
    <>
    <div className="container-fluid w-full h-screen bg-blue-400 py-3">
        <div className="container bg-white p-3 m-auto">
            <div className="forms">
                <div className="flex justify-between p-3">
<h4 className='p-2 font-bold'>Product List</h4>
<Link className='bg-green-500 text-white p-2 rounded transition-transform duration-1000 -translate-y-2 ' to="/add-product">Add Product +</Link>
                </div>
                
                <hr />
                <table className="table w-full my-4 [&_td]:text-sm [&_td]:font-bold [&_th]:text-sm">
                    <tr className='bg-gray-200 border border-gray-200'><th className='p-3'>#</th><th className='p-3'>Prodcut Name</th><th className='p-3'>Current Stock</th><th className='p-3 hidden md:block'>In Price</th><th className='p-3'>Out Price</th><th className='p-3'>Option</th></tr>
                    {
                        products.map((p,no)=>(
                            <tr key={p.p_id} className='border border-gray-200'>
                                <td className=''>{no+1}</td>
                                <td className=''>{p.p_name}</td>
                                <td className=' hidden md:block'>{p.in_price}</td>
                                <td className=''>{p.out_price}</td>
                                <td className=''>{p.p_stock}</td>
                                <td className=' flex justify-end'>
                                    <button className='bg-red-700 p-1 rounded text-white' onClick={()=>Delete(p.p_id)}>Delete</button>
                                    <Link className='bg-blue-700 mx-3 p-1 rounded text-white' to={`/update-product/${p.p_id}`}>Update</Link>
                                    </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>

    </div>
    </>
  )
}

export default Product