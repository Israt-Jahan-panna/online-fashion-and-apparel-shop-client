import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const product = useLoaderData();
    const {
        _id,
          brand,
          description,
          image,
          name
          } = product ;
    return (
        <div>
            <h3>product{name}</h3>
        </div>
    );
};

export default UpdateProduct;