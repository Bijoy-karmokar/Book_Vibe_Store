import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        errorElement:ErrorPage,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    }
])

export default router;