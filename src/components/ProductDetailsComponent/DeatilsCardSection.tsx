import { useState } from "react";
import { useAddCartMutation } from "../../redux/features/cart/cart";
import { useNavigate } from "react-router-dom";
import { useValidUser } from "../../hooks/ValidUserHooks";


type TProduct = {
    product: {
     _id:string,
        name: string;
        price: number;
        images: string;
        category: string;
        stock: number;
        isDeleted: boolean;
    };
}

const DetailsCardSection = ({ product }: TProduct) => {
    const navigate= useNavigate()
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.price);
const [addCart]=useAddCartMutation()

const { data} = useValidUser();

 

const userId= data?.data?._id;


    const handleAddToCart = () => {
        const cartData={
            userId:userId,
            productId:product?._id,
            prductQuentity:count,

        }
        addCart(cartData)
    };

    const handleBuy=()=>{
        navigate(`/checkoutPage`);
    }
    const handleCountIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        setTotalPrice(product.price * newCount);
    };

    const handleCountDecrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            setTotalPrice(product.price * newCount);
        }
    };

    return (
        <div className="border border-gray-300 p-5 rounded-lg max-w-xs mx-auto shadow-md bg-white">
            <h2 className="text-2xl font-bold text-primary">{product.name}</h2>
            <p className="text-gray-600">Price: <span className="text-primary">${product.price}</span></p>
            <p className="text-gray-600">Total Price: <span className="text-primary">${totalPrice}</span></p>
            <p className="text-gray-600">Quantity: <span className="text-primary">{count}</span></p>

            <div className="flex gap-2 my-3">
                <button onClick={handleCountDecrement} className="px-3 py-2 bg-primary border text-black rounded-md">-</button>
                <button onClick={handleCountIncrement} className="px-3 py-2 bg-primary border text-black rounded-md">+</button>
            </div>

            <div>
                <button onClick={handleAddToCart} className="px-5 py-2 bg-primary border text-black rounded-md mr-2">Add to Cart</button>
                <button onClick={()=>handleBuy()} className="px-5 py-2 bg-primary border text-black rounded-md">Buy Now</button>
            </div>
        </div>
    );
};

export default DetailsCardSection;
