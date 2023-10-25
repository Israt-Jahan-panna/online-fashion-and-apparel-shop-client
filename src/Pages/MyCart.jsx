import { useLoaderData } from "react-router-dom";
import ProductCard from "../Compunents/productCard/ProductCard";


const MyCart = () => {
   const myProduct = useLoaderData ();
    return (
        <div className="font-SometypeMono">
          <h3 className="font-bold text-2xl text-center">My Added Products</h3>
          <div>
             <div className="mx-24">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-6">
          {myProduct.map((products) => (
            <ProductCard key={products._id} products={products}></ProductCard>
          ))}
        </div>
      </div > 
        </div>
    
        </div>
    );
};

export default MyCart;