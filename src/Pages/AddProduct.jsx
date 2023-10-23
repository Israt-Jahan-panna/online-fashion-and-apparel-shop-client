const AddProduct = () => {
  return (
    <div className="font-SometypeMono">
      <div className=" w-3/4 mx-auto bg-slate-100 py-12 px-24 mb-7 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-center">
          Add New Product Dettails{" "}
        </h2>
        <form>
          <div className=" form-control mb-4">
            {/* product name */}
            <label className="block text-gray-700 font-bold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
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
              placeholder="Product Image URL"
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>
          {/* product ratting */}
          <div className="form-control mt-8 mb-4 items-center">
            <h3>Product Ratting</h3>
            <div className="rating rating-lg rating-half">
              <input
                type="radio"
                name="rating-10"
                className="rating-hidden"
                placeholder="ratting"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-[#F85559] mask mask-star mask-full"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-[#F85559] mask mask-star mask-full"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-[#F85559] mask mask-star mask-full"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-[#F85559] mask mask-star mask-full"
              />
              <input
                type="radio"
                name="rating-10"
                className="bg-[#F85559] mask mask-star mask-full"
              />
            </div>
          </div>
          {/* add product button */}
          <div className="  form-control mb-4 items-center ">
            <button
              type="submit"
              className="bg-[#FF324D] w-72  text-white py-2 px-4 rounded-md"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
