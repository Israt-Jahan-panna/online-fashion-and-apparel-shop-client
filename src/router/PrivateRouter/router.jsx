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
import UpdateProduct from "../../Compunents/UpdateProduct/UpdateProduct";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";


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
            element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
            loader: () => fetch('https://fashion-and-apparel-shop-server-6ol0g5b2m-israt-jahans-projects.vercel.app/myproduct')
          
          
        },
        {
          path:"/brand/:name",
          element:<BrandPage></BrandPage>
        },
        {
          path:"/addproduct",
          element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
          
        },
        {
          path: "/brand/:name/:_id",
          element: <PrivateRoute><Details></Details></PrivateRoute>
        },
        {
          path:"/updateproduct/:id", 
          element:<UpdateProduct></UpdateProduct>,
          loader: ({params}) => fetch(`https://fashion-and-apparel-shop-server-6ol0g5b2m-israt-jahans-projects.vercel.app/product/${params.id}`)
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