/* Blog Add Button after Login */

import { Link } from "react-router-dom";

export const AddButton = () => {
  return (
    <>
      <Link
        to="/newblog"
        className="items-center flex fixed top-48 right-5 animate-bounce hover:animate-none "
      >
        <i className="text-4xl pr-1 py-2 text-sky-400 font-mono drop-shadow-xl hidden lg:inline">
          new
        </i>
        <img
          className="rounded-full transition duration-700 ease-in-out h-20 w-20 p-3"
          src="./blog.png"
        />
      </Link>
    </>
  );
};
