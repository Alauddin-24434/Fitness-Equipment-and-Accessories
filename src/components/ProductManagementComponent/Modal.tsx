/* eslint-disable @typescript-eslint/no-explicit-any */

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useAddProductMutation } from "../../redux/api/api";


const Modal = ({ setIsFormOpen }: any) => {
    const [addProduct, {error, isLoading,data, isError, isSuccess }] = useAddProductMutation();
console.log({isError,data,isSuccess,error})
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);

  const imgbbApiKey = "f1fd4dec34482fd48b08283ad2f27dd2";

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      setUploading(true);
      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, formData);
      setUploading(false);
      return response.data.data.url;
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
      return null;
    }
  };

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      const urls = await Promise.all(files.map(file => uploadImage(file)));
      setImageUrls(urls.filter(url => url !== null) as string[]);
    }
  };


  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (imageUrls.length === 0) {
      console.error("No images uploaded");
      return;
    }

    const productData = {
      name,
      category,
      description,
      price,
      stock,
      images: imageUrls,
    };

    await addProduct(productData);

   

    // setIsFormOpen(false);
  };

  const handleModalClose = () => {
    setIsFormOpen(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Product Details</h1>

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

            <label htmlFor="category" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Categories</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            >
              <option label="">-- Select a Category --</option>
              <option value="denmark">Denmark</option>
              <option value="sweden">Sweden</option>
              <option value="norway">Norway</option>
            </select>

            <label htmlFor="images" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Images</label>
            <input
              type='file'
              id="images"
              multiple
              onChange={handleImageChange}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
            />

            {uploading && <p>Uploading...</p>}

            {imageUrls.length > 0 && (
              <div className="mb-5">
                <h2 className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Uploaded Images:</h2>
                <ul className="flex flex-grow">
                  {imageUrls.map((url, index) => (
                    <li key={index}>
                      <img src={url} alt={`Uploaded ${index}`} className="w-16 h-16 mb-2" />
                    </li>
                  ))}
                </ul>
              </div>
            )}

           
<label htmlFor="price" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Price </label>
            <input
              type='number'
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter price"
            />

            <label htmlFor="stock" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Stock Quantity</label>
            <input
              type='number'
              id="stock"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter quantity"
            />


            <div className="flex items-center justify-start w-full">
              <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Submit
              </button>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={handleModalClose}>Cancel</button>
            </div>
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
