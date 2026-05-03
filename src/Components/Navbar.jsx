import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/60 dark:bg-black/40 backdrop-blur-md border-b border-white/50 dark:border-white/10 px-8 py-4 flex justify-between items-center shadow-sm transition-colors duration-500">
      
      <Link to="/" className="text-2xl font-extrabold text-[#6367FF] dark:text-[#a8b1ff] tracking-wide drop-shadow-sm transition-colors duration-500">
        Subs<span className="text-[#8494FF] dark:text-gray-300">Sync</span>
      </Link>

      <div className="flex space-x-8">
        <Link
          to="/"
          className="text-gray-700 dark:text-gray-300 font-bold hover:text-[#6367FF] dark:hover:text-[#a8b1ff] transition-colors duration-500"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-700 dark:text-gray-300 font-bold hover:text-[#6367FF] dark:hover:text-[#a8b1ff] transition-colors duration-500"
        >
          Dashboard
        </Link>
        <Link
          to="/settings"
          className="text-gray-700 dark:text-gray-300 font-bold hover:text-[#6367FF] dark:hover:text-[#a8b1ff] transition-colors duration-500"
        >
          Settings
        </Link>
      </div>
      
    </nav>
  );
}

export default Navbar;