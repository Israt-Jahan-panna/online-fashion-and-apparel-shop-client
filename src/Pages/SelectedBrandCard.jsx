import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SelectedBrandCard = (props) => {
    const [products, setProducts] = useState([]);
//   const brandName = props.match.params.brand; // Get brand name from the URL

  useEffect(() => {
    // Fetch products based on the brand name
    fetch(`http://localhost:5000/products/${brandName}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, );

  return (
    <div>
      <h1>Products by {brandName}</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <Link to={`/product/${product._id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedBrandCard;