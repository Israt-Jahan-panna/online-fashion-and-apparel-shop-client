// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Compunents/productCard/ProductCard';

const MyCart = () => {
    const products = useLoaderData();
    return (
        <div>
          <div>
             <div className="mx-24">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div > 
        </div>
    
        </div>
    );
};

export default MyCart;