
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../Compunents/productCard/ProductCard';

const MyProducts = () => {
    const products = useLoaderData();
    return (
        <div>
             <div className="mx-24">
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </div > 
        </div>
    );
};

export default MyProducts;