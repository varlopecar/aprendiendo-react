import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">404</h1>
        <p className="text-gray-500">Page not found.</p>
        <Link to="/" className="mt-2 text-blue-500 hover:underline">
            Go back home
        </Link>
    </div>
);

export default NotFoundPage;