import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import Products from "../pages/Products/Products";


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
       
    ]
}
])

export default router;