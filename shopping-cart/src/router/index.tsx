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
            errorElement: <NotFoundPage />,
        },
        {
            path: "/cart",
            element: <ShoppingCart />,
        },
        {
            path: "/product/:id",
            element: <ProductDetails />,
        },
    ]);
    
    return <RouterProvider router={router} />;
}