import Swal from 'sweetalert2'
const AddProduct = () => {
  const handelAddProduct = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value.toLowerCase();
    const description = form.description.value;
    const type = form.type.value;
    const price = form.price.value;
    const image = form.image.value;
    const rating = form.rating.value;

    const newProduct = {
      name,
      brand,
      description,
      type,
      price,
      image,
      rating,
    };
    console.log(newProduct);

    

    // Send data to the server
    fetch("https://fashion-and-apparel-shop-server-iy9nm9vnj-israt-jahans-projects.vercel.app/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Thank You!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Okay'
              })
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      
  }
  return (
    <div className="font-SometypeMono">
      <div className=" w-3/4 mx-auto bg-slate-100 py-12 px-24 mb-7 rounded-md shadow-md">
        <h2 className="text-lg font-bold text-center">
          Add New Product Dettails{" "}
        </h2>
        <form onSubmit={handelAddProduct}>
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
          {/* product rating */}
          <div className="form-control mt-8 mb-4 ">
            <div className="mb-4">
      <label  className="block text-gray-700 font-bold">Rating:</label>
      <input type="number" id="rating" name="rating" placeholder='productrating' className="w-full py-2 px-3 border border-gray-300 rounded-md " />
    </div>
          </div>
          {/* add product button */}
          <div className="  form-control mb-4 items-center ">
            <button
              type="submit"
              className="bg-[#FF324D] lg:w-72  text-white py-2 px-4 rounded-md"
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
