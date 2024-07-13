/* eslint-disable @typescript-eslint/no-explicit-any */

import Container from '../../components/Container/Container';
import ProductCard from '../../components/Products/ProductCard';
import { useGetProductsQuery } from '../../redux/features/product/product';

const Products = () => {
    const { data, error,isLoading } = useGetProductsQuery(undefined);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;

    return (
        <Container>
            <div className="p-4 grid grid-cols-6 gap-4">
            {data?.data?.map((item:any) => (
                <ProductCard key={item._id} {...item} />
            ))}
            </div>
          
        </Container>
    );
};

export default Products;
