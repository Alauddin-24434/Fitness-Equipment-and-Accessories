/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormEvent, useState } from 'react';
import { useAddProductMutation } from '../../redux/features/product/product';
import { FaSpinner } from "react-icons/fa";

const Modal = ({ setIsFormOpen }: any) => {
  const [addProduct] = useAddProductMutation();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [images, setImages] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const productData = {
      name,
      category,
      description,
      price,
      stock,
      images,
    };

    setIsLoading(true); // Set loading state

    try {
      // Simulate a delay to see loading state in action (can be removed in actual usage)
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Perform the actual mutation (addProduct)
      await addProduct(productData);
      
      // Reset form fields and close modal on success
      setName('');
      setCategory('');
      setDescription('');
      setPrice(0);
      setStock(0);
      setImages('');
      setIsFormOpen(false);
    } catch (error) {
      console.error('Failed to add product:', error);
      // Handle error state if needed
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleModalClose = () => {
    setIsFormOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Add Product Details</h1>

            {/* Form fields */}
            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Product Name</label>
            <input
              id="name"
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter Product Name"
            />

            <label htmlFor="description" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Description</label>
            <input
              id="description"
              type='text'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter Product Description"
            />

            <div className="flex justify-between gap-2">
              <div>
                <label htmlFor="category" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Categories</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                >
                  <option label="">Select Category</option>
                  <option value="strength-training">Strength Training</option>
                  <option value="cardio-equipment">Cardio Equipment</option>
                  <option value="flexibility-balance">Flexibility & Balance</option>
                  <option value="functional-training">Functional Training</option>
                  <option value="bodyweight-training">Bodyweight Training</option>
                  <option value="crossfit-hiit">CrossFit & HIIT</option>
                  <option value="recovery-mobility">Recovery & Mobility</option>
                  <option value="wearables-trackers">Wearables & Trackers</option>
                  <option value="home-gym-essentials">Home Gym Essentials</option>
                  <option value="accessories">Accessories</option>
                  <option value="outdoor-fitness">Outdoor Fitness</option>
                </select>
              </div>

              <div>
                <label htmlFor="price" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Price </label>
                <input
                  type='number'
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Enter price"
                />
              </div>

              <div>
                <label htmlFor="stock" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Stock Quantity</label>
                <input
                  type='number'
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(Number(e.target.value))}
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            <label htmlFor="images" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Image</label>
            <input
              type='url'
              id="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter image url link"
            />

            {/* Buttons */}
            <div className="flex items-center justify-start w-full">
              <button
                type="submit"
                disabled={isLoading} // Disable button when loading
                className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <FaSpinner className="animate-spin mr-2" />
                    Submitting...
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={handleModalClose}
                disabled={isLoading} // Disable button when loading
              >
                Cancel
              </button>
            </div>

            {/* Close button */}
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onClick={handleModalClose}
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Modal;
