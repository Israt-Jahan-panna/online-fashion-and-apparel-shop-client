import React from "react";
import Banner from "../Compunents/Header/Banner";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Compunents/productCard/ProductCard";
import ExclusiveProducts from "../Compunents/ExclusiveProducts/ExclusiveProducts";

const Home = () => {
  const products = useLoaderData();
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div className="mx-24">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div>
      <ExclusiveProducts></ExclusiveProducts>
    </div>
  );
};

export default Home;
