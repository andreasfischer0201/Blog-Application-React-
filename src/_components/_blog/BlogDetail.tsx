/* Detail Blog Page Component */

/* Import dependencies */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../_types";
import { useSelector } from "react-redux";

/* Import external components */
import { UpdateButton } from "./UpdateButton";
import { AddLikesButton } from "./AddLikesButton";

/* Type for blog object */
interface Blog {
  user: string;
  url: string;
  title: string;
  content: string | number;
  time: string;
  watches: number;
  likes: number;
}

export const BlogDetail = () => {

  /* create an object for useNavigate */
  const navigate = useNavigate();

  /* Set state variables for input form */
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");

  /* Blog index from Redux store */
  const { blog } = useSelector((state: RootState) => state);
  const blogId = blog.blogVariable;
  
  /* Blog data from localStorage */
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

  /* Set and Get index from redux in localStorage */
  localStorage.setItem("blogId", blogId.toString());
  const savedId = Number(localStorage.getItem("blogId"));

  return (
    <>
      <div className="w-5/6 p-0 lg:p-12 pt-5 bg-white m-auto mt-8 bg-transparent">
        <p className="mb-4 text-4xl font-bold text-gray-800">Arcticle</p>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 "></div>
      </div>
      <div className="w-9/12 m-auto mt-12 flex items-center justify-center sm:p-5 p-0">
        <div className="w-full p-5 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 text-center p-0 pb-5 sm:p-5 sm:w-full">
            <img
              alt="profil"
              src={blogs[savedId].url}
              className="mx-auto object-cover rounded-lg h-auto w-full"
            />
          </div>
          <form
            className="lg:w-1/2 w-full p-0 sm:p-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full p-0 sm:p-5 mb-5 ">
              <div className="flex text-lg leading-8 flex-col lg:flex-row">
                <span className="leading-8 mr-5 mb-5 lg:mb-0">
                  {blogs[savedId].user}
                </span>
                <div className="flex">
                  <div className="flex">
                    <img
                      src="./watch.png"
                      className="w-6 h-6 mr-2 md:h-8 md:w-8"
                    />
                    <span className="text-xl">{blogs[savedId].watches}</span>
                  </div>
                  <div className="flex ml-5">
                    <img
                      src="./like.png"
                      className="w-6 h-6 mr-2 md:h-8 md:w-8"
                    />

                    {blogs[savedId].user != sessionStorage.getItem("isAuth") ? (
                      <AddLikesButton />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <p className="mt-5 mb-5 flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none outline-none focus:border-transparent border-transparent">
                {blogs[savedId].title}
              </p>
              <p className="mt-5 flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none outline-none focus:border-transparent border-transparent">
                {blogs[savedId].content}
              </p>
            </div>
            <div className="w-full justify-end flex m-auto">
              {blogs[savedId].user == sessionStorage.getItem("isAuth") ? (
                <UpdateButton />
              ) : (
                ""
              )}
              <button
                type="button"
                className="py-2 px-2 flex justify-center items-center  bg-sky-400 hover:bg-sky-500-sky-200 text-white max-w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none-2  rounded-lg whitespace-nowrap"
                onClick={() => {
                  navigate("/home");
                }}
              >
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                  />
                </svg>
                <span className="ml-2 hidden md:inline-block">B a c k</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
