import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Blog {
  user: string;
  url: string;
  title: string;
  content: string | number;
  time: string;
  watches: number;
  likes: number;
}

export const UpdateBlog = () => {
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const savedId = Number(localStorage.getItem("blogId"));
  const [url, setUrl] = useState(blogs[savedId].url);
  const [title, setTitle] = useState(blogs[savedId].title);
  const [content, setContent] = useState(blogs[savedId].content);
  const navigate = useNavigate();

  const handleUpdateBlog = () => {
    if (url != "" && title != "" && content != "") {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1; // Note: getMonth() returns a zero-based index
      const day = currentDate.getDate();
      let createdTtime = year + "/" + month + "/" + day;

      const newBlog = {
        user: sessionStorage.getItem("isAuth")?.toString() || "",
        url: url,
        title: title,
        content: content,
        time: createdTtime,
        watches: 0,
        likes: 0,
      };
      let willSaveBlogs: Blog[] = JSON.parse(
        localStorage.getItem("blogs") || "[]"
      );
      willSaveBlogs[savedId] = newBlog;
      localStorage.setItem("blogs", JSON.stringify(willSaveBlogs));
      navigate("/home");
    }
  };
  return (
    <>
      <div className="w-5/6 p-0 lg:p-12 pt-5 bg-white m-auto mt-8 bg-transparent">
        <p className="mb-4 text-4xl font-bold text-gray-800">
          Upate Your Blog!
        </p>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 "></div>
      </div>
      <div className="w-9/12 m-auto mt-12 flex items-center justify-center px-5 py-5">
        <div className="w-full px-5 pt-5 pb-10 mx-auto text-gray-800 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-50 flex flex-col lg:flex-row">
          <div className="md:w-9/12 pb-5 mx-auto text-center px-5 sm:w-full">
            <img
              alt="Mobile Blog Logo"
              src={url}
              className="mx-auto object-cover rounded-lg h-auto w-full "
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-5 px-3">
              <div className="flex relative mb-5">
                <input
                  required
                  type="text"
                  id="with-email"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  name="url"
                  placeholder="Image URL"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                />
              </div>
              <textarea
                maxLength={100}
                required
                className="mb-5 flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                id="comment"
                placeholder="Enter your Title"
                name="comment"
                rows={2}
                cols={40}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></textarea>
              <textarea
                required
                className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                id="comment"
                placeholder="Enter your comment"
                name="comment"
                rows={8}
                cols={40}
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="w-4/5 flex-col sm:flex-row justify-end flex m-auto">
              <button
                type="submit"
                className="py-2 px-4 flex justify-center items-center  bg-sky-400 hover:bg-sky-500 focus:ring-sky-300 focus:ring-offset-sky-200 text-white max-w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mr-0 sm:mr-5 mb-2 whitespace-nowrap"
                onClick={handleUpdateBlog}
              >
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Update
              </button>

              <button
                className="mb-2 py-2 px-4 flex justify-center items-center  bg-sky-400 hover:bg-sky-500 focus:ring-sky-300 focus:ring-offset-sky-200 text-white max-w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg whitespace-nowrap"
                type="button"
                onClick={() => {
                  navigate("/detail");
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
                B a c k
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
