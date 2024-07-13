import { useParams } from 'react-router-dom';
import DetailsCardSection from '../../components/ProductDetailsComponent/DeatilsCardSection';
import ImageSection from '../../components/ProductDetailsComponent/ImageSection';
import { useGetProductByIdQuery } from '../../redux/features/product/product';


const ProductDetails = () => {
 



    const { id } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(id);
    
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading product details</p>;

  


    return (
        <div className="flex flex-col md:flex-row items-center justify-center p-5 gap-5">
            <ImageSection imageUrl={data?.data?.images} name={data?.data?.name} />
            <DetailsCardSection product={data?.data} />
        </div>
    );
};

export default ProductDetails;
