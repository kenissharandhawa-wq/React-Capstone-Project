import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 px-6 py-4 flex justify-center space-x-6">
      <Link
        to="/"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-pink-400/50"
      >
        Home
      </Link>

      <Link
        to="/dashboard"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-pink-400/50"
      >
        Dashboard
      </Link>

      <Link
        to="/settings"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-pink-400/50"
      >
        Settings
      </Link>
    </nav>
  );
}

export default Navbar;
