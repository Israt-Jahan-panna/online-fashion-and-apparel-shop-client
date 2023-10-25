import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../../layout/Roots";
import ErrorPage from "../../Pages/ErrorPage";
import Login from "../../Pages/Login";
import Registrations from "../../Pages/Registrations";
import Home from "../../Pages/Home"
import AddProduct from "../../Pages/AddProduct";
import MyCart from "../../Pages/MyCart";
import BrandPage from "../../Pages/BrandPage";
import Details from "../../Compunents/Details/Details";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
          loader: () => fetch('/Brand.json')
          
        },
        {
            path:"mycart",
            element:<MyCart></MyCart>,
            loader: () => fetch('http://localhost:5000/myproduct')
          
          
        },
        {
          path:"/brand/:name",
          element:<BrandPage></BrandPage>
        },
        {
          path:"/addproduct",
          element:<AddProduct></AddProduct>
          
        },
        {
          path: "/brand/:name/:_id",
          element: <Details></Details>
        },
        {
          path:"/registration",
          element:<Registrations></Registrations>
        },
        {
          path:"login",
          element:<Login></Login>
        }
    ]
    },
  ]);
  export default router;