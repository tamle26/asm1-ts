import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProductPage = ({ products, onUpdate }) => {
    const { id } = useParams();
    const currentProduct = products.find((product) => product.id == id);
    const [inputValues, setInputValues] = useState()
    const onHandleChange = (event) => {
        const { name, value } = event.target;
        const newData = { ...inputValues, [name]: value } 
        setInputValues(newData); 
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const dataUpdate = { ...inputValues, "id": id }
        onUpdate(dataUpdate); 
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Enter Product Name' defaultValue={currentProduct?.name} onChange={onHandleChange} name='name' /><br />
                <input type="number" placeholder='Enter Product Price' defaultValue={currentProduct?.price} onChange={onHandleChange} name='price' /><br />
                <input type="url" placeholder='Enter Product Image' defaultValue={currentProduct?.image} onChange={onHandleChange} name='image' /><br />
                <button>Update</button>
            </form>
        </div>
    )
}

export default UpdateProductPage