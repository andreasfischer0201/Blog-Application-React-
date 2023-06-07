import { useDispatch } from "react-redux";
import { blogAction } from "../../_actions/blogAction";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Blog {
  user: string;
  url: string;
  title: string;
  content: string | number;
  time: string;
  watches: number;
  likes: number;
}

interface PropsType {
  item: Blog;
  index: number;
}

export const BlogItem = (props: PropsType) => {
  const dispatch = useDispatch();
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

  function handleDetail(e: any) {
    if (blogs[e.target.id].user != sessionStorage.getItem("isAuth")) {
      blogs[e.target.id].watches++;
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }

    dispatch(blogAction(e.target.id));
  }
  return (
    <div className="m-auto overflow-hidden rounded-lg shadow-lg h-90 lg:w-72 md:w-64 sm:w-72">
      <img
        alt="blog photo"
        src={props.item.url}
        className="object-cover w-full min-h-full max-h-60"
      />
      <div className="w-full p-4 bg-white dark:bg-gray-800">
        <p className="font-medium text-sky-400 text-lg">
          <Link
            to="/detail"
            id={props.index.toString()}
            className="underline"
            onClick={handleDetail}
          >
            {props.item.title}
          </Link>
        </p>
        <p className="font-light text-gray-400 dark:text-gray-300 text-md max-h-48 text-ellipsis overflow-hidden">
          {props.item.content}
        </p>
        <div className="flex items-center mt-4 justify-start">
          <div className="flex flex-col text-sm">
            <div className="flex mb-2">
              <img src="./watch.png" className="w-6 h-6 mr-2" />
              <span className="text-md leading-6">{props.item.watches}</span>
            </div>
            <div className="flex">
              <img src="./like.png" className="w-6 h-6 mr-2" />
              <span className="text-md mr-3 leading-6">{props.item.likes}</span>
            </div>
          </div>

          <div className="flex flex-col justify-between ml-4 text-sm">
            <p className="text-gray-800 dark:text-white leading-6 mb-2">
              {props.item.user}
            </p>
            <p className="text-gray-400 dark:text-gray-300 leading-6">
              {props.item.time}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
