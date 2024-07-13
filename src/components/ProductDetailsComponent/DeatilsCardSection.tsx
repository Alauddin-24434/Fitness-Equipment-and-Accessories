import { useState } from "react";

type TProduct = {
    product: {
        name: string;
        price: number;
        images: string;
        category:string;
        stock:number;
        isDeleted:boolean;
    };
}

const DetailsCardSection = ({ product }: TProduct) => {
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(product.price);

    const userInfo = {
        userId: '1234',
    };

    const CartInfo = {
        userId: userInfo?.userId,
        productId: "1237",
        count: count,
    };

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

    const handleCartDataSave = () => {
        
    };
    

    return (
        <div className="border border-gray-300 p-5 rounded-lg max-w-xs mx-auto shadow-md bg-white">
            <h2 className="text-2xl font-bold text-primary">{product.name}</h2>
            <p className="text-gray-600">Price: <span className="text-primary">${product.price}</span></p>
            <p className="text-gray-600">Total Price: <span className="text-primary">${totalPrice}</span></p>
            <p className="text-gray-600">Quantity: <span className="text-primary">{count}</span></p>

            <div className="flex  gap-2 my-3">
                <button onClick={handleCountDecrement} className="px-3 py-2 bg-primary border text-black rounded-md">-</button>
                <button onClick={handleCountIncrement} className="px-3 py-2 bg-primary border text-black rounded-md">+</button>
            </div>

            <div>
                <button onClick={handleCartDataSave} className="px-5 py-2 bg-primary border text-black rounded-md mr-2">Add to Cart</button>
                <button className="px-5 py-2 bg-primary border  text-black rounded-md">Buy Now</button>
            </div>
        </div>
    );
};

export default DetailsCardSection;
