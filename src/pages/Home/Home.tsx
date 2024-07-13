

import Container from '../../components/Container/Container';
import BenefitsSection from '../../components/Homepage/BenefitsSection';

import CategoriesSection from '../../components/Homepage/CategoriesSection';
import FeaturedProducts from '../../components/Homepage/FeaturedProducts';
import HeroSection from '../../components/Homepage/HeroSection';
import ImageGallery from '../../components/Homepage/ImageGallery';

const Home = () => {

    const featuredProducts = [
        { id: 1, name: 'Product 1', description: 'This is an awesome product.', imageUrl: '/images/product1.jpg' },
        { id: 2, name: 'Product 2', description: 'This is another great product.', imageUrl: '/images/product2.jpg' },
        { id: 3, name: 'Product 3', description: 'You will love this product.', imageUrl: '/images/product3.jpg' },
      ];
    
      const benefits = [
        { title: 'High Quality', description: 'Our products are made from the highest quality materials.', imageUrl: '/images/benefit1.jpg' },
        { title: 'Affordable Prices', description: 'We offer the best prices in the market.', imageUrl: '/images/benefit2.jpg' },
        { title: 'Excellent Support', description: 'We provide 24/7 customer support.', imageUrl: '/images/benefit3.jpg' },
      ];
    
      const galleryImages = [
        '/images/gallery1.jpg',
        '/images/gallery2.jpg',
        '/images/gallery3.jpg',
        '/images/gallery4.jpg',
        '/images/gallery5.jpg',
        '/images/gallery6.jpg',
      ];
    return (
     
<div>

    <HeroSection/>
<Container>
    <CategoriesSection/>
    <FeaturedProducts products={featuredProducts}/>
    <BenefitsSection benefits={benefits}/>
    <ImageGallery images={galleryImages}/>
    </Container>
</div>
    );
};

export default Home;