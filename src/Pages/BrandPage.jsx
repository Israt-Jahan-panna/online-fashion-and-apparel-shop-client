import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BrandProduct from "./BrandProduct";
import BrandCarousel from "./BrandCarousel";

const BrandPage = () => {
  const { name } = useParams();
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetch(
      `https://fashion-and-apparel-shop-server-6ol0g5b2m-israt-jahans-projects.vercel.app/brand/${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBrand(data);
      });
  }, []);

  return (
    <div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 ">
        {brand.length > 0 ? (
          brand.map((product) => (
            <BrandProduct key={product._id} product={product}></BrandProduct>
          ))
        ) : (
          <div className="flex text-center">
            <p className="lg:text-3xl font-extrabold  items-center"> we are Sorry <br /> currently this Brands  product not avaiable . <br />Product will be comming soon <br />Thank You for visiting us </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandPage;
