import { Link } from "react-router-dom";
import heroImg from "../../assets/images/Hero_Banner.webp";

const HeroSection = () => {
    return (
        <section className="">
            <div className="relative py-12 bg-white sm:py-16 lg:py-20 xl:pt-32 xl:pb-44">
                <div className="absolute inset-0 hidden lg:block">
                    <img className="object-cover object-right-bottom w-full h-full" src={heroImg} alt="" />
                </div>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-xl mx-auto text-center lg:max-w-md xl:max-w-lg lg:text-left lg:mx-0">
                        <h2 className="text-3xl font-semibold text-white sm:text-4xl xl:text-5xl xl:leading-tight">Discover a Better Way to Get Fit with</h2>
                        <p className="mt-8 text-base font-normal leading-7 text-gray-400 lg:max-w-md xl:pr-0 lg:pr-16">Experience Exceptional Training with Our Certified Fitness Pros. Transform your fitness with our certified and experienced trainers.</p>

                        <div className="flex items-center justify-center mt-8 space-x-5 xl:mt-16 lg:justify-start">
                            <Link to="/products">
                                <button className="bg-green-600  hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                                    View Products
                                </button>
                            </Link>

                            <Link to="/aboutUs">
                                <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
                                    About Us
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 lg:hidden">
                    <img className="object-cover w-full h-full" src={heroImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
