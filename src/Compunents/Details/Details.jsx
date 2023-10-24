import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

const Details = () => {
  const { name, _id } = useParams();
  const  [brand , setBrand] = useState([]);

  useEffect(()=> {
    fetch(`http://localhost:5000/brand/${name}/${_id}`)
    .then(res => res.json())
    .then(data => {
        setBrand(data);
    })
 },[])
 console.log(brand)
  return (
    <div>
    {
                brand?.map((product) => { 
                    return <ProductDetails key={product._id}  product={product} ></ProductDetails>
                } )
            }
    </div>
  );
};

export default Details;
