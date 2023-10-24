import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BrandProduct from './BrandProduct';
import BrandCarousel from './BrandCarousel';

const BrandPage = () => {
    const {brandname} = useParams();
    const  [brand , setBrand] = useState([]);
 
 useEffect(()=> {
    fetch(`http://localhost:5000/brand/${brandname}`)
    .then(res => res.json())
    .then(data => {
        setBrand(data);
    })
 },[])
 
 
    return (
        <div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
            {
                brand?.map((product) => { 
                    return <BrandProduct key={product._id}  product={product} ></BrandProduct>
                } )
            }
        </div>
    );
};

export default BrandPage;