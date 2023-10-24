

const ProductCard = ({product}) => {
    const { name,
        brand,
        description,
        image,
        } = product ||{}

    return (
        <div className="font-SometypeMono" >
            <div className="card h-96 lg:card-side bg-base-100 shadow-md">
  <figure><img src={image}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title mt-7 font-extrabold text-2xl">{brand}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn bg-[#FF324D]">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;