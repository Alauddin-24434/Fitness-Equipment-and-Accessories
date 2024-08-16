

import Container from '../../components/Container/Container';
import BenefitsSection from '../../components/Homepage/BenefitsSection';

import CategoriesSection from '../../components/Homepage/CategoriesSection';
import FeaturedProducts from '../../components/Homepage/FeaturedProducts';
import HeroSection from '../../components/Homepage/HeroSection';
import ImageGallery from '../../components/Homepage/ImageGallery';

const Home = () => {

    
    
     
  
    return (
     
<div className='bg-gray-100'>

    <HeroSection/>
<Container>
    <CategoriesSection/>
    <FeaturedProducts />
    <BenefitsSection/>
    <ImageGallery />
    </Container>
</div>
    );
};

export default Home;