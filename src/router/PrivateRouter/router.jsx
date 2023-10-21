import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../../layout/Roots";
import ErrorPage from "../../Pages/ErrorPage";
import Login from "../../Pages/Login";
import Registrations from "../../Pages/Registrations";
import Home from "../../Pages/Home"

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
          path:"",
          
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