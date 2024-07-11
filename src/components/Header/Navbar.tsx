
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/productsPage' },
  { name: 'Product Details', href: '/productDetailsPage' },
  { name: 'Product Management', href: '/productManagement' },
  { name: 'Cart', href: '/cartPage' },
  { name: 'Checkout', href: '/checkoutpage' },
  { name: 'About Us', href: '/aboutUsPage' },
];

const Navbar = () => {
  // Get the current path
  const currentPath = window.location.pathname;

  return (

    <div>
      {/* header 1 */}
      <header className="lg:pb-0 bg-gray-900 border-b border-gray-800">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* <!-- lg+ --> */}
                    <nav className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <img className="w-auto h-10" src="/src/assets/images/logo.svg" alt="" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                            </svg>
                            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <form className="flex-grow ml-6 lg:ml-32">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full py-3 pl-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="absolute  inset-y-0 right-1.5 flex items-center justify-center w-20  text-white bg-[#1CD15D] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>

                        <a href="#" title="" className="hidden items-center justify-center px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-[#1CD15D] border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> SignUp</a>
                    </nav>

                    {/* <!-- xs to lg --> */}
                    <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                        <div className="flow-root">
                            <div className="flex flex-col px-6 -my-2 space-y-1">
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>
                                <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                            </div>
                        </div>
                        <div className="px-6 mt-6">
                            <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700" role="button"> SignUp</a>
                        </div>
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
                currentPath === item.href ? '  text-[#1CD15D] font-bold' : ''
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
