import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ products }) => {
  return (
    <div>
            <button ><a href="http://localhost:5173/admin">Admin</a></button>
      {products.map((item, index) => {
        return (
            <div key={index + 1}> 
            <h3><Link to={`/detail/${item.id}`}>{item.name}</Link></h3>
            <img src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <hr />
          </div>    
        )
      })}
    </div>
  )
}

export default Homepage;