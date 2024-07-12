import { useState } from "react";
import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/api/api";

import Modal from "./Modal";

export type TProduct={
  _id:string,
  name:string;
  price:number;
  description:string;
  images: string[];
  category:string;
  stock:'inStock' | 'out of stock';
  isDeleted: boolean;
}

const ProductList = () => {
  const { data ,error, isLoading } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  const [isFormOpen, setIsFormOpen]= useState<boolean>(false);

  const handleDelete = async (id:string) => {
    console.log(id)
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
    }
  };



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <button
        className="bg-green-500 text-white p-2 mb-4"
        onClick={() => {
         
          setIsFormOpen(true);
        }}
      >
        Add New Product
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Price</th>
            <th className="py-2">Category</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product:TProduct) => (
            <tr key={product._id}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white p-2 mr-2"
                  onClick={() => {
                  
                    setIsFormOpen(true);
                  }}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white p-2"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFormOpen && (
        <Modal
        setIsFormOpen={setIsFormOpen}
       
        />
      )}
    </div>
  );
};

export default ProductList;
