
import { Link } from 'react-router-dom';

const FeaturedProducts = ({ products }) => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-700">{product.description}</p>
            <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/products" className="text-white bg-blue-500 px-4 py-2 rounded">Explore More</Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
