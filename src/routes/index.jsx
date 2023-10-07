import { createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CreateProduct from "../pages/CreateProduct";
import DetailProduct from "../pages/DetailProduct";

export default function Router({ tableData }) {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <LandingPage/>,
        },
        {
            path: '/CreateProduct',
            element: <CreateProduct/>,
        },
        {
            path: '/DetailProduct/:index',
            element: <DetailProduct tableData={tableData} />,
            
        }
    ])
    return (
        <RouterProvider router={router}/>
    )
}