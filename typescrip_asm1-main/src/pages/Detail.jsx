import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = ({ products }) => {
  const { id } = useParams();
  const currentProduct = products.find((item) => item.id === Number(id));

  return (
    <div>
      <h3>{currentProduct?.name}</h3>
      <img src={currentProduct?.image} alt={currentProduct?.name} />
      <p>{currentProduct?.price}</p>
      <p>{currentProduct?.description}</p>
    </div>
  )
}

export default DetailPage;