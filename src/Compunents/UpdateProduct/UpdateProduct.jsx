import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {

    const handelUpdateProduct = (event) => {
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value.toLowerCase();
        const description = form.description.value;
        const type = form.type.value;
        const price = form.price.value;
        const image = form.image.value;
        const rating = form.rating.value;
    
        const updateProduct = {
        
          name,
          brand,
          description,
          type,
          price,
          image,
          rating,
        };
        console.log(updateProduct);
    
        
    
        // Send data to the server
        fetch(`https://fashion-and-apparel-shop-server-iy9nm9vnj-israt-jahans-projects.vercel.app/product/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateProduct),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Thank You!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
          })
          
        }
    const product = useLoaderData();
    const {
    _id,
        rating,
        type,
        price,
          brand,
          description,
          image,
          name
          } = product ;
    return (
        <div className="font-SometypeMono">
      <div className=" w-3/4 mx-auto bg-slate-100 py-12 px-24 mb-7 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-center">
          Update Product Details Of {name}
        </h2>
        <form onSubmit={handelUpdateProduct}>
          <div className=" form-control mb-4">
            {/* product name */}
            <label className="block text-gray-700 font-bold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={name}
              placeholder="Product name"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          {/* brand name */}
          <div className="form-control mb-4">
            <label className="block text-gray-700 font-bold">Brand Name:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              defaultValue={brand}
              placeholder="Brand Name"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          {/* Product type */}
          <div className="form-control mb-4">
            <label className="block text-gray-700 font-bold">Type:</label>
            <input
              type="text"
              id="type"
              name="type"
              defaultValue={type}
              placeholder="Product type"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          {/* product price */}
          <div className="form-control mb-4">
            <label className="block text-gray-700 font-bold">Price:</label>
            <input
              type="text"
              id="price"
              name="price"
              defaultValue={price}
              placeholder="Product Price "
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          {/* description */}
          <div className="form-control mb-4">
            <label className="block text-gray-700 font-bold">
              Short Description:
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              defaultValue={description}
              placeholder="Product Description"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          {/* product image */}
          <div className="form-control mb-4">
            <label className="block text-gray-700 font-bold">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={image}
              placeholder="Product Image URL"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          {/* product ratting */}
          <div className="form-control mt-8 mb-4 ">
            <div className="mb-4">
      <label  className="block text-gray-700 font-bold">Rating:</label>
      <input type="number" id="rating" name="rating" 
      defaultValue={rating}
      placeholder='productrating' className="w-full py-2 px-3 border border-gray-300 rounded-md " />
    </div>
          </div>
          {/* add product button */}
          <div className="  form-control mb-4 items-center ">
            <button
              type="submit"
              className="bg-[#FF324D] lg:w-72  text-white py-2 px-4 rounded-md"
            >
             Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateProduct;