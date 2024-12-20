import galImg1 from '../../assets/images/galimg1.png'
import galImg2 from '../../assets/images/galimg2.png'
import galImg3 from '../../assets/images/galimg3.webp'
import galImg4 from '../../assets/images/galimg4.webp'
import SectionTitle from '../shared/SectionTitle';
const ImageGallery= () => {
  // Define the state for images


  return (
    <div className=" dark:bg-gray-800 h-full py-4 sm:py-6 lg:py-8">
           <SectionTitle text='Gallery' className='text-primary'/>
           
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
     
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={galImg1} loading="lazy" alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Riding exercise bikes</span>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={galImg2} loading="lazy" alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Dumble exercise</span>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src={galImg3} loading="lazy" alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Pec deck exercise</span>
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src={galImg4} loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Riding exercise bikes</span>
            </div>
            {/* <!-- image - end --> */}
        </div>
    </div>
</div>
  );
};

export default ImageGallery;
