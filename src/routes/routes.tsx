import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";



const router = createBrowserRouter([
{
    path: "/",
    element: <Mainlayout/>,
    children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/productManagement",
            element: <ProductManagement/>
        },
        {
            path: "/products",
            element: <Products/>
        },
        {
            path: "/productDetails/:id",
            element: <ProductDetails/>
        },
       
        {
            path: "/cart",
            element: <CartPage/>
        },
        {
            path: "/checkoutpage",
            element: <CheckoutPage/>
        },
       
        {
            path: "/aboutUsPage",
            element: <AboutUsPage/>
        },
       
    ]
}
])

export default router;