import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.min.css'


function Product() {
    const location = useNavigate();
    
    const [products, setproducts] = useState([]);
    const [productcopy,setproductcopy]=useState([]);
    const [selected,setselected]=useState("");
   
    useEffect(() => {
        axios.get("http://localhost:7000/get-products")
            .then(res => {
                setproducts(res.data);
                 setproductcopy(res.data);
            })

    }, [])
    const Delete = (p) => {
        axios.delete(`http://localhost:7000/delete-product/${p}`)
            .then(res => {
                alert(res.data);
                // to fillter the table agin while the row deleted...........................................................
                setproducts(products.filter((pr) => pr.p_id != p));

            })
            
    }
    const fnd =() =>{
                const input = document.getElementById("input");
                const vl=input.value;
                if (vl != "") {
                   setproducts(productcopy.filter((p)=>p.p_name.toLowerCase() == vl.toLowerCase())); 
                }
                else{
                    setproducts(productcopy);
                }
                
            }
            
    return (
        <>
            <div className="container-fluid w-full h-screen bg-gray-200 py-3">
                <div className="container bg-white p-3 m-auto shadow">
                    <div className="forms">
                        <div className="flex justify-between p-3">
                            <h4 className='p-2 font-bold'>Product List</h4>
                            <div className="search flex w-[70%]">
                                <div className="left flex bg-white w-[70%] rounded border border-gray-200">
                                    <input type="text" name=" "  className='p-2 w-[90%] outline-0' placeholder='Search Product' id="input" onChange={(e)=>setselected(e.value)} />
                                    <button className='p-2 text-sm bg-gray-200 text-blue-500 border border-gray-200' onClick={()=>fnd()}>Search {selected}</button>
                                    </div>
                                    <div className="right flex px-4 w-[30%] p-2">
                                        
                                <select name="" id="" className='w-full rounded border border-gray-200 outline-0'>
                                    <option value="">All</option>
                                    <option value="">Newest</option>
                                    <option value="">Oldest</option>
                                    </select>
                            </div></div>
                            <Link className='bg-green-500 text-white p-2 rounded transition-transform duration-1000 -translate-y-2 text-sm ' to="/add-product">Add Product +</Link>
                        </div>

                        <hr />
                        <table className="table w-full my-4 [&_td]:text-sm [&_td]:font-bold [&_th]:text-sm [&_td]:p-1 [&_td]:text-left [&_th]:border-l-2 [&_th]:border-amber-50">
                            <tr className='bg-green-800 border text-white border-gray-200'><th className='p-3'>#</th><th className='p-3'>Prodcut Name</th><th className='p-3'>Current Stock</th><th className='p-3 hidden md:block'>In Price</th><th className='p-3'>Out Price</th><th className='p-3'>Option</th></tr>
                            {
                                products.map((p, no) => (
                                    <tr key={p.p_id} className='border border-gray-200'>
                                        <td className=''>{no + 1}</td>
                                        <td className=''>{p.p_name}</td>
                                        <td className=' hidden md:block'>{p.in_price}</td>
                                        <td className=''>{p.out_price}</td>
                                        <td className=''>{ p.p_stock}</td>
                                        <td className=' flex justify-end'>
                                            <button className='text-red-500 p-1 rounded border border-red-500 px-2 cursor-pointer' onClick={() => Delete(p.p_id)}> <i className='bi bi-trash'></i> </button>
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