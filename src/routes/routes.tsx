import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./protectedRoutes";
import Categories from "../components/Category/Categories";



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
            path: "/categories/:query",
            element: <Categories/>
        },
        {
            path: "/productDetails/:id",
            element: <PrivateRoute><ProductDetails/></PrivateRoute>
        },
       
        {
            path: "/cart",
            element:<CartPage/>
        },
        {
            path: "/checkoutpage",
            element:<PrivateRoute><CheckoutPage/></PrivateRoute>
        },
       
        {
            path: "/aboutUs",
            element: <AboutUsPage/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/signUp",
            element: <SignUp/>
        },
       
    ]
    

}

])

export default router;