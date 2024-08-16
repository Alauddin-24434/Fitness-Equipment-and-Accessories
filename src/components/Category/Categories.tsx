/* eslint-disable @typescript-eslint/no-explicit-any */
import noDataImg from '../../assets/images/No data.jpg'
import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import ProductCard from '../../components/Products/ProductCard';
import { useGetCategoriesQuery } from '../../redux/features/product/product';

const Categories = () => {
    const { query } = useParams(); // Retrieve category from URL
    const { data,  isLoading } = useGetCategoriesQuery(query);

    if (isLoading) return <div>Loading...</div>;
  
    // Check if data is empty
    if (!data || !data.data || data.data.length === 0) {
        return <div ><img className='h-full' src={noDataImg} alt="noDataImg" /></div>;
    }

    return (
        <Container>
            <div className="p-4 grid grid-cols-6 gap-4">
                {data.data.map((item: any) => (
                    <ProductCard key={item._id} {...item} />
                ))}
            </div>
        </Container>
    );
};

export default Categories;
