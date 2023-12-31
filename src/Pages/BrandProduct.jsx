// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandProduct = ({ product }) => {
  

  const { name, brand, image, price, rating, type, _id } = product || {};

  return (
    <div className="mx-24 font-SometypeMono">
      <h4 className="uppercase text-2xl text-center font-extrabold w-full">
        Product Of {brand}
      </h4>

      { brand ? (
        // Product is available
        <div className="relative mb-3 flex w-96 h-[500px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <img src={image} alt="ui/ux review check" />
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between mb-3">
              <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 uppercase">
                Brand: {brand}
              </h5>
              <p className="flex items-center gap-1.5 text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="-mt-0.5 h-5 w-5 text-yellow-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.760-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {rating}
              </p>
            </div>
            <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 uppercase">
              Name: {name}
            </h5>
            <p className="block text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
              Price : $ {price}
            </p>
            <p className="block text-base antialiased font-light leading-relaxed text-gray-700">
              Type: {type}
            </p>
          </div>
          <div className="flex justify-between m-4">
            <Link to={`/updateproduct/${_id}`}>
              <button className="btn bg-[#FF324D] rounded-lg mt-3" type="button">
                Update
              </button>
            </Link>
            <Link to={`/brand/${name}/${_id}`}>
              <button className="btn bg-[#FF324D] rounded-lg mt-3" type="button">
                Details
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // Product is coming soon
        <p className="w-10 h-7">This product is coming soon.</p>
      )}
    </div>
  
  );
};

export default BrandProduct;
