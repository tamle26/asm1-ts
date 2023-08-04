import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Homepage, DetailPage, Dashboard, ProductPage, AddProduct, UpdateProductPage } from './pages'

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  const removeProduct = (id) => {
    const result = confirm("Bạn có muốn xóa ko");
    if(result){
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE"
      }).then(() => setProducts(products.filter((item) => item.id != id)))
    }else{
      return
    }
 
  }
  const addProduct = (product) => {
    const result = confirm("Bạn có muốn thêm sản phẩm ko");
    if(result){
      fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }).then(()=>{
        setTimeout(()=>{
          location.assign('http://localhost:5173/admin/product');
        },1000)
      })
    }else{
      return
    }
   
  }
  const onUpdate = (product) => {
    const result = confirm("Bạn có muốn cập nhật sản phẩm ko");
    if(result){
      fetch(`http://localhost:3000/products/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      }).then(alert("đã cập nhật sản phẩm thành công")).then(()=>{
        setTimeout(()=>{
          location.assign('http://localhost:5173/admin/product');
        },1000)
      })
    }else{
      return
    }
   
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage products={products} />} />
        <Route path='/detail/:id' element={<DetailPage products={products} />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/product' element={<ProductPage products={products} removeProduct={removeProduct} />} />
        <Route path='/admin/product/add' element={<AddProduct addProduct={addProduct} />} />
        <Route path='/admin/product/update/:id' element={<UpdateProductPage onUpdate={onUpdate} products={products} />} />
      </Routes>

    </>
  )
}

export default App
