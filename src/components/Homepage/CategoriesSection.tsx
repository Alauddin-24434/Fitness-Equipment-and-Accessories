
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SectionTitle from '../shared/SectionTitle';
import { useNavigate } from 'react-router-dom';
import strength from '../../assets/images/Strength.jpg';
import cardio from '../../assets/images/Strength.jpg';
import functional from '../../assets/images/Strength.jpg';
import recovery from '../../assets/images/Strength.jpg';
import flexibility from '../../assets/images/Strength.jpg';
import outdoor from '../../assets/images/Outdoor.jpg';
import yoga from '../../assets/images/Yoga.jfif';

const CategoriesSection = () => {

    const categories = [
        { fullName: "Strength Training Equipment", shortName: "strength", image:strength },
        { fullName: "Cardio Equipment", shortName: "cardio", image: cardio},
        { fullName: "Functional Training", shortName: "functional", image: functional },
        { fullName: "Recovery and Mobility", shortName: "recovery", image: recovery },
        { fullName: "Flexibility and Balance", shortName: "flexibility", image: flexibility },
        { fullName: "Outdoor Fitness Equipment", shortName: "outdoor", image: outdoor },
        { fullName: "Yoga and Pilates", shortName: "yoga & Pilates", image: yoga},
       
    ];




    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const navigate = useNavigate()
    const handleCategiries = (query: string) => {
        navigate(`/categories/${query}`)
    }
    return (
        <div className="py-8">
            <SectionTitle text="Categories" className="text-primary" />
            <Slider {...settings} className="slick-slider">
                {categories.map((category, index) => (
                    <div onClick={() => handleCategiries(category?.shortName)} key={index} className="p-2 w-40 h-48 ">
                        <div className="relative rounded overflow-hidden shadow-lg hover:border-2 border-[#1CD15D]">
                            <img className="object-cover h-48" src={category.image} alt={category.shortName} />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="text-sm text-center text-white">{category.shortName}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CategoriesSection;
