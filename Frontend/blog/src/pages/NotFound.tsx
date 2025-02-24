import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold">404 - NOT FOUND</h1>
            <p className="mt-4">The page you are looking for does not exist</p>
            <Link to="/" className="mt-4 text-blue underline">Go back Home</Link>
        </div>
    )
};

export default NotFound;