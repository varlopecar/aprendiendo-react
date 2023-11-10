import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ShoppingCart from '../pages/ShoppingCart';
import NotFoundPage from '../pages/404';
import HomePage from '../pages/HomePage';
import ProductDetails from '../pages/ProductDetails';

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/cart",
            element: <ShoppingCart />,
        },
        {
            path: "/product/:id",
            element: <ProductDetails />,
        },
        {
            path: "*",
            element: <NotFoundPage />,
        },
    ]);
    
    return <RouterProvider router={router} />;
}