import { useState } from "react";

import UpdateModal from "./UpdateModal"; // Import the UpdateModal component
import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/features/product/product";
import { FaSpinner } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TProduct } from "../Products/ProductCard";
import Modal from "./AddProductModal";

const ProductList = () => {
  const { data, error, isLoading, refetch } = useGetProductsQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();

  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // State to manage deletion loading

  const handleDelete = async (id: string) => {
    setIsDeleting(true); // Set loading state

    try {
      await deleteProduct(id);
      // If successful, refetch products to update the list
      refetch();
      toast.success("Product successfully deleted"); // Show success toast
    } catch (error) {
      console.error("Failed to delete product:", error);
      toast.error("Failed to delete product");
      // Handle error
    } finally {
      setIsDeleting(false); // Reset loading state
    }
  };

  const handleUpdateModalOpen = (product: TProduct) => {
    setSelectedProduct(product);
    setIsUpdateModalOpen(true);
  };



  if (isLoading) return <div className="flex justify-center items-center "><FaSpinner className="animate-spin mr-2 min-h-screen text-lg md:text-2xl lg:text-6xl text-green-600 " /></div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <ToastContainer /> {/* ToastContainer for displaying toast messages */}
      <button
        className="bg-green-600 rounded-md float-right my-2 mx-2 hover:bg-green-700 text-white p-2 mb-4"
        onClick={() => {
          setIsFormOpen(true);
        }}
      >
        Add New Product
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 text-center">Name</th>
            <th className="py-2 text-center">Price</th>
            <th className="py-2 text-center">Category</th>
            <th className="py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((product: TProduct) => (
            <tr key={product._id}>
              <td className="border px-4 py-2 text-center">{product.name}</td>
              <td className="border px-4 py-2 text-center">${product.price}</td>
              <td className="border px-4 py-2 text-center">{product.category}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-blue-500 text-white p-2 mr-2"
                  onClick={() => handleUpdateModalOpen(product)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white p-2"
                  onClick={() => handleDelete(product._id)}
                  disabled={isDeleting} // Disable button while deletion is in progress
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFormOpen && <Modal setIsFormOpen={setIsFormOpen} />}
      {isUpdateModalOpen && (
        <UpdateModal
          setIsUpdateModalOpen={setIsUpdateModalOpen}
          initialProduct={selectedProduct as TProduct}
          isUpdateMode={true}
          refetchProducts={refetch}
        />
      )}
    </div>
  );
};

export default ProductList;
