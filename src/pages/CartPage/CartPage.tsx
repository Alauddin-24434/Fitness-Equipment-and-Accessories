

const CartPage = () => {
   
const  cartData=localStorage.getItem("cartData")
   


    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-5">Shopping Cart</h1>
            <div className="flex flex-col gap-5">
                {cartData?.length > 0 ? (
                    cartData?.map((product, index) => (
                        <div key={index} className="flex items-center border border-gray-300 rounded-lg p-4 shadow-md">
                            <img src={product.imageUrl} alt={product.name} className="w-16 h-16 rounded-md" />
                            <div className="ml-4">
                                <h2 className="text-xl font-bold">{product.name}</h2>
                                <p className="text-gray-600">Price: ${product.price}</p>
                                <p className="text-gray-600">Quantity: {product.quantity}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default CartPage;
