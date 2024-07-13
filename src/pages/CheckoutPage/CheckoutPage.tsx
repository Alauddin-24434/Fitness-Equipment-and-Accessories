/* eslint-disable @typescript-eslint/no-explicit-any */
import  {  useState } from 'react';


const CheckoutPage = () => {
 
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('cashondelivery');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (selectedPaymentMethod === 'cashondelivery') {
      // Handle cash on delivery logic
      placeOrder('Cash on Delivery');
    } else if (selectedPaymentMethod === 'stripe') {
      // Handle Stripe payment logic
      // Implement Stripe integration or redirect to Stripe payment gateway
      placeOrder('Stripe');
    }
  };

  const placeOrder = (paymentType:any) => {
    // Example: API call or logic to place the order
    // After successful order placement, you may redirect to a success page
    console.log('Placing order:', userDetails, 'Payment Method:', paymentType);
    // Redirect to success page
   
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {/* User Details Form */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">User Details</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Delivery Address
              </label>
              <textarea
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
               
                required
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              ></textarea>
            </div>
          </form>
        </div>
        {/* Payment Methods */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
          <div className="flex flex-col gap-4">
            <div>
              <input
                type="radio"
                id="cashondelivery"
                name="paymentMethod"
                value="cashondelivery"
                checked={selectedPaymentMethod === 'cashondelivery'}
                onChange={() => setSelectedPaymentMethod('cashondelivery')}
                className="mr-2"
              />
              <label htmlFor="cashondelivery" className="text-sm font-medium text-gray-700">
                Cash on Delivery
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="stripe"
                name="paymentMethod"
                value="stripe"
                checked={selectedPaymentMethod === 'stripe'}
                onChange={() => setSelectedPaymentMethod('stripe')}
                className="mr-2"
              />
              <label htmlFor="stripe" className="text-sm font-medium text-gray-700">
                Stripe (Credit Card)
              </label>
            </div>
          </div>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
