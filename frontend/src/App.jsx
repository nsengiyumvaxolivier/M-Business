import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Create from './Create'
import Product from './Product'
import Add from './Add'
import Update from './Update'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Login />}></Route>
      <Route path='/create-account' element={<Create />}></Route>
      <Route path='/add-product' element={<Add />}></Route>
      <Route path='/products' element={<Product />}></Route>
      <Route path='/update-product/:id' element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App