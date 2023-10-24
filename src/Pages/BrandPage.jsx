import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import BrandProduct from './BrandProduct';
import BrandCarousel from './BrandCarousel';

const BrandPage = () => {
    const {name} = useParams();
    const  [brand , setBrand] = useState([]);
 
 useEffect(()=> {
    fetch(`http://localhost:5000/brand/${name}`)
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
           <div className='grid md:grid-cols-2 lg:grid-cols-3'>
           {
                brand?.map((product) => { 
                    return <BrandProduct key={product._id}  product={product} ></BrandProduct>
                } )
            }
           </div>
        </div>
    );
};

export default BrandPage;