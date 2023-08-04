import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const ProductPage = ({ products, removeProduct }) => {
  const productList = useMemo(() => products.map((item, index) => (
    <tr key={index + 1}>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td><img src={item.image} alt="Lỗi ảnh" /></td>
      <td>
        <button onClick={() => onHandleRemove(item.id)}>Delete</button>
        <Link to={`/admin/product/update/${item.id}`}><button>Update</button></Link>
      </td>
      <hr />
    </tr>
  
  )), [products]);

  const onHandleRemove = (id) => {
    console.log("Product: ", id);
    removeProduct(id)
  }

  return (
    <div>
      <Link to={`/admin/product/add`}><button>Add New Product</button></Link>
      <table border={1}>
        <thead>
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList}
        </tbody>
      </table>
    </div>
  )
}

export default ProductPage;