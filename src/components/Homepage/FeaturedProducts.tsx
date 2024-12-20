/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../../redux/features/product/product';
import SectionTitle from '../shared/SectionTitle';
const FeaturedProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <section className="py-8 bg-gray-100">
      <div className="">
      <SectionTitle text="Featured Products" className="text-primary" />
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
          {data?.data.slice(0, 3).map((product: { _id: Key | null | undefined; images: string; name: string; description: string; }) => (
            <div key={product._id} className="w-full min-h-96  bg-gray-100  hover:shadow-lg transition-shadow duration-300">
              <img src={product.images} alt={product.name} className="w-full h-64 object-fill  mb-4" />
              <div className="p-4 text-center">
                <h3 className="text-base font-semibold mb-2 truncate">{product.name}</h3>
                <p className="text-xs text-gray-700 mb-4 line-clamp-3">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/products" className="text-primary bg-white px-6 py-3 border rounded-lg shadow hover:bg-gray-100 transition-colors duration-300">Explore More</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
