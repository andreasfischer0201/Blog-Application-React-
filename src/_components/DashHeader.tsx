import { Link } from "react-router-dom";

export const DashHeader = () => {
  return (
    <nav className="dark:bg-gray-800  shadow-xl bg-black z-10 relative">
      <div className="w-5/6 mx-auto px-0 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <div className="w-full md:justify-between flex items-center justify-center">
            <Link className="flex-shrink-0" to="/">
              <img className="w-auto h-12" src="./logo.png" alt="Workflow" />
            </Link>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <Link
                  className="hover:scale-110 duration-200 text-gray-300 text-lg hover:text-sky-400 dark:hover:text-white px-3 py-2 rounded-md font-medium"
                  to="/"
                >
                  Blog
                </Link>
                <Link
                  className="hover:scale-110 duration-200 text-gray-300 text-lg hover:text-sky-400 dark:hover:text-white px-3 py-2 rounded-md font-medium"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="hover:scale-110 duration-200 text-gray-300 text-lg hover:text-sky-400 dark:hover:text-white px-3 py-2 rounded-md font-medium"
                  to="/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <Link
            className="text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="/"
          >
            Blog
          </Link>
          <Link
            className="text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};
