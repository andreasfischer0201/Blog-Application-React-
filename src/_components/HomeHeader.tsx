import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const HomeHeader = (): any => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("isAuth")) {
      navigate("/login");
    }
  }, []);

  return (
    <nav className="dark:bg-gray-800  shadow-xl bg-black z-10 relative">
      <div className="w-5/6 mx-auto px-0 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <div className="w-full md:justify-between flex items-center justify-center">
            <Link className="flex-shrink-0" to="#">
              <img className="w-auto h-12" src="./logo.png" alt="Workflow" />
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center ml-10 space-x-4">
                <Link
                  className="hover:scale-110 duration-200 text-gray-300 text-lg hover:text-sky-400 dark:hover:text-white px-3 py-2 rounded-md font-medium"
                  to="#"
                >
                  Phones
                </Link>
                <Link
                  className="hover:scale-110 duration-200 text-gray-300 text-lg hover:text-sky-400 dark:hover:text-white px-3 py-2 rounded-md font-medium"
                  to="#"
                >
                  Contact
                </Link>
                <Link
                  className="hover:scale-110 duration-200 text-gray-300 text-lg hover:text-sky-400 dark:hover:text-white px-3 py-2 rounded-md font-medium"
                  to="/home"
                >
                  Blogs
                </Link>
                <Link to="#" className="flex">
                  <img
                    className="min-w-max h-12 w-12"
                    src="./profile.png"
                    alt="Workflow"
                  />
                  <span className="ml-3 mt-1 text-lg text-sky-400 leading-10">
                    {sessionStorage.getItem("isAuth")}
                  </span>
                </Link>
                <Link
                  className="text-gray-300 text-lg hover:text-sky-400 dark:hover:text-white px-3 py-2 rounded-md font-medium"
                  to="/"
                  onClick={() => {
                    sessionStorage.removeItem("isAuth");
                  }}
                >
                  <img
                    className="min-w-max h-12 w-12 hover:scale-110 duration-200"
                    src="./exit.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-ali text-center">
          <Link
            className="justify-center items-center flex-col whitespace-nowrap flex text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="#"
          >
            <img
              className="min-w-max h-12 w-12"
              src="./profile.png"
              alt="Workflow"
            />
            <span className="ml-3 mt-1 text-lg text-sky-400 leading-10">
              {sessionStorage.getItem("isAuth")}
            </span>
          </Link>
          <Link
            className="text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="#"
          >
            Phones
          </Link>
          <Link
            className="text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="#"
          >
            Contact
          </Link>
          <Link
            className="text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="#"
          >
            Blogs
          </Link>

          <Link
            className="flex justify-center text-gray-300 hover:text-sky-400 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            to="/"
            onClick={() => {
              sessionStorage.removeItem("isAuth");
            }}
          >
            <img
              className="min-w-max h-12 w-12 hover:scale-110 duration-200"
              src="./exit.png"
              alt="Workflow"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
