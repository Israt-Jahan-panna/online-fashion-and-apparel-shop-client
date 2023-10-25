import React from 'react';
import Swal from 'sweetalert2';


const ProductDetails = ({product}) => {
    const { name, brand, image, price, description, type, _id ,ratting,} = product || {};

    const handelAddCard =() =>{
      const myCard = {
        name,
        brand,
        description,
        type,
        price,
        image,
        ratting,
      };
      console.log(myCard);
      // Send data to the server
      fetch("http://localhost:5000/myproduct"
      , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myCard), }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.insertedId){
              Swal.fire({
                  title: 'Thank You!',
                  text: 'Add to Card Successful',
                  icon: 'success',
                  confirmButtonText: 'Okay'
                })
          }
        })
        
    }
    return (
        <div>
            <div className="mx-24 font-SometypeMono">
      <div className=" text-center">
        <h4 className="uppercase text-2xl font-extrabold w-full">
          Product Of {brand}
        </h4>
      </div>
      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img src={image} alt="ui/ux review check" />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div className="p-3">
          <div className="flex  justify-center gap-5 mb-3">
            <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 uppercase">
              Brand: {brand}
            </h5>
            <h5 className="block text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 uppercase">
            Name: {name}
          </h5>
          </div>
          
          <div className='flex gap-5 justify-center'>
          <p className="block text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text">
            Price : $ {price}
          </p>
          <p className="block text-base antialiased font-light leading-relaxed text-gray-700">
            Type: {type}
          </p>
          </div>
          <h3 className='text-center font-extrabold text-lg'>{description}</h3>
        </div>
        <div className="flex justify-center m-4">
          <>
          <button onClick={handelAddCard} className="btn bg-[#FF324D] rounded-lg mt-3 " type="button">
            Add To Cart
          </button></>
        
        </div>
      </div>
    </div>
        </div>
    );
};

export default ProductDetails;