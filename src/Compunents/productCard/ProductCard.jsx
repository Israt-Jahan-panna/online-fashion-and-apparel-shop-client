import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ProductCard = ({products}) => {
    const {
      _id,
        brand,
        description,
        image,
        } = products ||{}
        const handelDetails = () =>{

        }

    return (
        <div className="font-SometypeMono" >
            <div className="card h-96 px-4 lg:card-side bg-base-100 shadow-md">
  <figure><img src={image}alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title mt-7 font-extrabold text-2xl">{brand}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/productdetails/${_id}`}>
      <button onClick={handelDetails} className="btn bg-[#FF324D]">Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;