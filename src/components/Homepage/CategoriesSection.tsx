import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoriesSection = () => {
    const categories = [
        { fullName: "Cardio Equipment", shortName: "Cardio", image: "/src/assets/images/Cardio Equipment.avif" },
        { fullName: "Strength Training Equipment", shortName: "Strength", image: "/src/assets/images/Strength Training Equipment.jpg"},
        { fullName: "Home Gyms", shortName: "Home Gyms", image: "/src/assets/images/Home Gyms.avif" },
        { fullName: "Yoga and Pilates", shortName: "Yoga & Pilates", image: "/src/assets/images/Yoga and Pilates.avif" },
        { fullName: "Fitness Accessories", shortName: "Accessories",  image: "/src/assets/images/Fitness Accessories.avif"},
        { fullName: "Recovery and Mobility", shortName: "Recovery", image: "/src/assets/images/Recovery and Mobility.avif" },
        { fullName: "Outdoor Fitness Equipment", shortName: "Outdoor", image: "/src/assets/images/Outdoor Fitness Equipment.avif" },
        { fullName: "Apparel", shortName: "Apparel", image: "/src/assets/images/Apparel.avif" },
        { fullName: "Nutrition and Supplements", shortName: "Nutrition", image: "/src/assets/images/Nutrition and Supplements.avif" },
        { fullName: "Personal Care", shortName: "Personal Care", image: "/src/assets/images/Personal Care.avif" },
        { fullName: "Technology", shortName: "Technology", image: "/src/assets/images/Technology.avif" },
        { fullName: "Books and Education", shortName: "Books", image: "/src/assets/images/Books and Education.avif" }
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

    return (
        <div className="p-4">
            <Slider {...settings} className="slick-slider">
                {categories.map((category, index) => (
                    <div key={index} className="p-2 w-40 h-48 ">
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
