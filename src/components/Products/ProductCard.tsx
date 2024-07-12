
import { useNavigate } from 'react-router-dom';

type TProduct={
  _id:string;
  images:string[];
  name:string;
  price:number;
}

const ProductCard = ({_id, images, name,  price,  }:TProduct) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
      navigate(`/productDetails/${_id}`);
    };
  return (



    <div className="w-44 h-62" onClick={handleNavigate}>
      <div className="bg-[#ffff] shadow-lg  ">
     
        
            <div className="relative h-62 w-44 mb-3">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-6 h-6 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg></button>
              </div>
              <img src={images?.[0]} alt="Just a flower" className="h-44 w-full object-cover" />
            </div>
            <div className="flex-auto justify-evenly px-2">
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-400 whitespace-nowrap mr-3">4.60</span><span className="mr-2 text-gray-400">India</span>
                </div>
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-sm mr-auto cursor-pointer text-black hover:text-purple-500 truncate ">
                    {name}
                  </h2>
                  
                </div>
              </div>
            
              <div className="lg:flex  py-4  text-sm text-gray-600">
              <p className="text-sm text-black font-semibold ">${price}</p>
              <p className="ml-auto text-xs font-medium text-green-500">20% off</p>
              
              </div>
             
            </div>
      
 
      </div>

  </div>

  );
};

export default ProductCard;
