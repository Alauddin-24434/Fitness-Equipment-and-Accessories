import React, { useState, useEffect } from 'react';
import { useDeleteSingleCartMutation, useGetCartsByUserIdQuery, useUpdateCartMutation } from '../../redux/features/cart/cart';
import { NavLink, useNavigate } from 'react-router-dom';
import { useValidUser } from '../../hooks/ValidUserHooks';

interface IProduct {
    _id: string;
    name: string;
    price: number;
    description: string;
    images: string;
    category: string;
    stock: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface IUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface ICartItem {
    _id: string;
    productId: IProduct;
    userId: IUser;
    prductQuentity: number; 
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const CartPage: React.FC = () => {
 
    const { data:vlidUserData} = useValidUser();

 

    const id= vlidUserData?.data?._id;
    
    const [deleteSingleCart] = useDeleteSingleCartMutation();
    const { data, isLoading } = useGetCartsByUserIdQuery(id);
    const shipping = 2.00;
    const vat = 4.00;
    const [updateCart] = useUpdateCartMutation();
    const [cartTotalPrice, setCartTotalPrice] = useState(0);
    const [cartData, setCartData] = useState<ICartItem[]>([]);
    const navigate = useNavigate();
    console.log(cartData)

    useEffect(() => {
        if (data) {
            setCartData(data?.data);
        }
    }, [data]);

    useEffect(() => {
        if (cartData.length > 0) {
            const totalPrice = cartData.reduce((total, item) => {
                return total + item.productId.price * item.prductQuentity;
            }, 0);
            setCartTotalPrice(totalPrice);
        }
    }, [cartData]);

    const handleQuantityChange = async (productId: string, status: 'increment' | 'decrement') => {
        try {
            await updateCart({ id: productId, quantityStatus: status });
        } catch (error) {
            console.error('Failed to update cart:', error);
        }
    };

    const handleRemoveFromCart = async (productId: string) => {
        try {
            await deleteSingleCart(productId);
            // Update cartData after deletion
            setCartData(cartData.filter(item => item._id !== productId));
        } catch (error) {
            console.error('Failed to remove item from cart:', error);
        }
    };

    const handleNavigate = () => {
        navigate('/checkoutpage', { state: { key: "value" } });
    };

    return (
        <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
                <>
                {cartData.length >0 &&        <h1 className="text-3xl font-bold text-gray-800 text-center">Shopping Cart</h1>}
             

                    <div className="grid md:grid-cols-3 gap-8 mt-16">
                        <div className="md:col-span-2 space-y-4">
                            {cartData.length > 0 ? (
                                <div>
                                    {cartData.map((product, index) => (
                                        <div key={index} className="grid grid-cols-3 gap-4 items-start border border-gray-300 rounded-md p-4 shadow-md">
                                            <div className="col-span-1 flex items-start gap-4">
                                                <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 bg-gray-100 p-2 rounded-md">
                                                    <img src={product.productId.images} alt={product.productId.name} className="w-full h-full object-contain" />
                                                </div>

                                                <div className="flex flex-col">
                                                    <h3 className="text-base font-bold text-gray-800">{product.productId.name}</h3>
                                                    {/* Assuming size info should be displayed */}

                                                    <button type="button" onClick={() => handleRemoveFromCart(product._id)} className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-current inline" viewBox="0 0 24 24">
                                                            <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                                                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                                                        </svg>
                                                        REMOVE
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-span-2 flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <button onClick={() => handleQuantityChange(product._id, 'decrement')} className="px-3 py-2 bg-primary border text-black rounded-md">-</button>
                                                    <span className="text-lg text-black font-semibold">{product.prductQuentity}</span>
                                                    <button onClick={() => handleQuantityChange(product._id, 'increment')} className="px-3 py-2 bg-primary border text-black rounded-md">+</button>
                                                </div>
                                                <div className="flex items-center">
                                                    <h4 className="text-lg font-bold text-gray-800">${product.productId.price * product.prductQuentity}</h4>
                                                </div>
                                            </div>

                                           
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-600 text-center">Your cart is empty.</p>
                            )}
                        </div>

                        {cartData.length > 0 && (
                            <div className="bg-gray-100 rounded-md p-4">
                                <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>

                                <ul className="text-gray-800 mt-6 space-y-3">
                                    <li className="flex flex-wrap gap-4 text-sm font-bold">Shiping <span className="ml-auto">${shipping}</span></li>
                                    <li className="flex flex-wrap gap-4 text-sm font-bold">Vat <span className="ml-auto">${vat}</span></li>
                                    <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">${cartTotalPrice + shipping + vat}</span></li>
                                </ul>

                                <div className="mt-6 space-y-3">
                                    <button onClick={handleNavigate} type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md">Checkout</button>
                                    <div>
                                        <NavLink to={'/products'}>
                                            <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
