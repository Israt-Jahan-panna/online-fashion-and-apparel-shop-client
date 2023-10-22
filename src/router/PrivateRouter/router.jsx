import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../../layout/Roots";
import ErrorPage from "../../Pages/ErrorPage";
import Login from "../../Pages/Login";
import Registrations from "../../Pages/Registrations";
import Home from "../../Pages/Home"
import AddProduct from "../../Pages/AddProduct";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots></Roots>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
          
        },
        {
          path:"/addproduct",
          element:<AddProduct></AddProduct>
          
        },
        {
          path:"",
        },
        {
          path:"",
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