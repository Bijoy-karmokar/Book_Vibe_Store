import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/Books/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
import PageToRead from "../pages/ReadList/PageToRead";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                loader:()=>fetch('/booksData.json'),
                Component:Home,
                
            },
            {
               path:'/readlist',
               loader:()=>fetch('/booksData.json'),
               Component:ReadList
            },
            {
              path:"/pageToRead",
              loader:()=>fetch('/booksData.json'),
              Component:PageToRead
            },
            {
                path:'/bookDetails/:bookId',
                loader:()=>fetch('/booksData.json'),
                Component:BookDetails
            }
        ]
    }
])

export default router;