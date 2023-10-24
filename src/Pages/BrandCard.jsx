import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandCard = ({ brands }) => {
  const handelBrand = () => {};
  const { name, image } = brands || {};
  return (
    <div className="font-SometypeMono mt-6">
      <Link to={`/myproduct`}>
      <div onClick={handelBrand} className="card card-compact w-80 h-80 bg-base-100 shadow-md">
        <figure>
          <img src={image} className="h-40" alt="Shoes" />
        </figure>

        <h2 className="mt-8 text-center text-3xl font-semibold">{name}</h2>
      </div></Link>
    </div>
  );
};

export default BrandCard;
