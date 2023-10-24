import React from "react";
import Banner from "../Compunents/Header/Banner";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../Compunents/productCard/ProductCard";
import ExclusiveProducts from "../Compunents/ExclusiveProducts/ExclusiveProducts";
import BestSell from "../Compunents/BestSell/BestSell";
import BrandCard from "./BrandCard";

const Home = () => {
  const brand = useLoaderData();
  console.log(brand);
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      {/* brand  */}
        <div>
        <div className="mx-24">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-3">
          {brand.map((brands) => (
            <BrandCard key={brands.id} brands={brands}></BrandCard>
          ))}
        </div>
      </div > 
        </div>
      
      <div className="mx-24">
      <ExclusiveProducts></ExclusiveProducts>
      </div>
      <div >
        <BestSell></BestSell>
      </div>
    </div>
  );
};

export default Home;
