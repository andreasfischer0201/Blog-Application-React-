import React, { useState } from "react";
import { BlogItem } from "./BlogItem";
import { Link } from "react-router-dom";

interface Blog {
  user: string;
  url: string;
  title: string;
  content: string;
  time: string;
  watches: number;
  likes: number;
}

export const Blogs: React.FC = () => {
  if (!localStorage.getItem("blogs")) {
    localStorage.setItem("blogs", JSON.stringify([]));
  }

  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const [blogData, setData] = useState<Blog[]>(blogs);
  const [searhValue, setSearchValue] = useState("");

  const compareBlog = (a: Blog, b: Blog, property: keyof Blog) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  };

  const handleSearchValue = (e: any) => {
    setSearchValue(e.target.value);
    filterBlogs(e.target.value);
  };

  const handleSort = (property: keyof Blog) => {
    const sortedData = [...blogs].sort((a, b) => compareBlog(b, a, property));
    setData(sortedData);
  };

  const filterMyBlog = () => {
    const myBlogs = blogs.filter((item: Blog) => {
      if (item.user == sessionStorage.getItem("isAuth")) {
        return item;
      }
    });
    setData(myBlogs);
  };

  const filterBlogs = (value: string) => {
    const filtered = blogs.filter((blog: Blog) => {
      if (
        blog.title.toLowerCase().includes(value.toLowerCase()) ||
        blog.time.toLowerCase().includes(value.toLowerCase()) ||
        blog.title.toLowerCase().includes(value.toLowerCase()) ||
        blog.user.toLowerCase().includes(value.toLowerCase())
      ) {
        return blog;
      }
    });
    setData(filtered);
  };

  return (
    <div className="w-5/6 p-0 lg:p-12 pt-5 bg-white m-auto mt-8 bg-transparent min-h-screen">
      <p className="mb-4 text-4xl font-bold text-gray-800 md:text-left text-center">
        Lastest articles
      </p>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 "></div>
      <div className="flex items-end justify-between mb-12 header p-5">
        {sessionStorage.getItem("isAuth") ? (
          <div className="title flex justify-between w-full flex-col lg:flex-row items-center">
            <ul className="flex -mb-px text-lg whitespace-nowrap mb-10 lg:mb-0">
              <li
                className="mr-2"
                onClick={() => {
                  setData(blogs);
                }}
              >
                <Link
                  to="#"
                  className="flex leading-6 inline-block p-4 rounded-t-lg hover:text-sky-400 hover:scale-110 "
                  aria-current="page"
                >
                  Recent
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 leading-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </Link>
              </li>
              <li
                className="mr-2"
                onClick={() => {
                  handleSort("likes");
                }}
              >
                <Link
                  to="#"
                  className="flex leading-6 inline-block p-4 border-b-2 border-transparent hover:text-sky-400 hover:scale-110 rounded-t-lg active:text-sky-400 "
                >
                  Likes
                  <svg
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                </Link>
              </li>
              <li
                className="mr-2"
                onClick={() => {
                  handleSort("watches");
                }}
              >
                <Link
                  to="#"
                  className="flex leading-6 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-400 hover:scale-110 "
                >
                  Watches
                  <svg
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
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </Link>
              </li>
              <li className="mr-2" onClick={filterMyBlog}>
                <Link
                  to="#"
                  className="flex leading-6 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-sky-400 hover:scale-110 "
                >
                  My Blog
                  <svg
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
            <div className="ml-5 text-center font-light flex items-center justify-center">
              <form className="flex flex-col justify-center w-full max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                  <input
                    type="text"
                    id='"form-subscribe-Subscribe'
                    className=" rounded-lg flex-1 appearance-none border border-sky-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent w-80"
                    placeholder="search..."
                    value={searhValue}
                    onChange={handleSearchValue}
                  />
                </div>
              </form>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {blogData.map((item: Blog, index: number) => (
          <BlogItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};
