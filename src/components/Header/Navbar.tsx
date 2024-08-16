
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: `/products` },
  { name: 'Product Management', href: '/productManagement' },
  { name: 'Cart', href: '/cart' },
  { name: 'Checkout', href: '/checkoutpage' },
  { name: 'About Us', href: '/aboutUs' },
];
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'

const Navbar = () => {
  // Get the current path
  const currentPath = window.location.pathname;

  return (

    <div className="">
      {/* header 1 */}
      <header className="lg:pb-0 bg-gray-900 border-b border-gray-800">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* <!-- lg+ --> */}
                    <nav className="flex items-center justify-between h-16 lg:h-20 ">
                        <div className="flex-shrink-0">
                           <Link to={'/'}>
                           <span  title="" className="flex">
                                <img className="w-auto h-10" src={logo} alt="" />
                            </span>
                            </Link>
                        </div>

                      

                        <form className="flex-grow ml-6 lg:ml-32">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full py-3 pl-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="absolute  inset-y-0 right-0 flex items-center justify-center w-20 rounded-r-lg  text-white bg-green-600  hover:bg-green-700 font-medium text-sm  py-2" >Search</button>
                            </div>
                        </form>

                     <Link to={'/login'}>
                     <span className="hidden items-center justify-center px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-green-600  hover:bg-green-700 border border-transparent rounded-md lg:inline-flex " role="button">Login</span>
                     </Link>
                    </nav>

                  
                </div>
            </header>
            {/* header 2 */}
            <header className="bg-gray-900 border-b border-gray-800">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-center h-16 lg:h-[72px]">
          

            <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-gray-300 hover:text-white ${
                currentPath === item.href ? '  text-[#1CD15D]  font-bold' : ''
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

         
        </div>
    </div>
</header>
    </div>

  );
};

export default Navbar;
