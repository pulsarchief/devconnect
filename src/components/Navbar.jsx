import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold text-blue-600">
                    DevConnect
                </Link>
                <div className="space-x-6">
                    <Link
                        to="/"
                        className="hover:text-blue-600">
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-blue-600">
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className="hover:text-blue-600">
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-blue-600">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
