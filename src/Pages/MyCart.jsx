// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ProductCard from '../Compunents/productCard/ProductCard';
import { useParams } from 'react-router-dom';

const MyCart = () => {
  const { name, _id } = useParams();
  const  [products , setBrand] = useState([]);

  useEffect(()=> {
    fetch(`http://localhost:5000/brand/${name}/${_id}`)
    .then(res => res.json())
    .then(data => {
        setBrand(data);
    })
  },[])
    return (
        <div>
          <div>
             <div className="mx-24">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-6">
          {products.map((products) => (
            <ProductCard key={products._id} products={products}></ProductCard>
          ))}
        </div>
      </div > 
        </div>
    
        </div>
    );
};

export default MyCart;