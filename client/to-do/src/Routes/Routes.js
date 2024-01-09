import {createBrowserRouter} from "react-router-dom";
import Registration from "../Pages/RegistrationPage/Registration";
import Login from "../Pages/Login/Login";
import CreateTodo from "../Pages/createTodo/CreateTodo";
import SelectTodo from "../Pages/selectTodo/selectTodo";
import UpdateTodo from "../Pages/UpdateTodo/UpdateTodo";
import Navbar from "../Components/Navbar/Navbar";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Profile from "../Components/Profile/Profile";
//import app from "../App";

 const appRouter=[
     {
        element: <Navbar/>,
         children: [
             {
                 path: "/",
                 element: <Registration/>
             },
             {
                 path: "/login",
                 element: <Login/>
             },
             {
               path:"/updateProfile",
               element: <UpdateProfile/>
             },
             {
                 path: "/addtodo",
                 element: <CreateTodo/>
             },
             {
                 path: "/todo",
                 element: <SelectTodo/>
             },
             {
                 path: "/todo/:id",
                 element: <UpdateTodo/>
             },
             {
                 path: "/profile",
                 element: <Profile/>
             }
         ]
     }
]
const router = createBrowserRouter(appRouter);

export default router;