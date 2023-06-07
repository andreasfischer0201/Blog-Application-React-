import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("isAuth")) {
      navigate("/home");
    }
  }, []);
  
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const users = JSON.parse(localStorage.getItem("users") || "{}");

  const handleLogin = () => {
    if (userEmail != "" && userPassword != "") {
      if (!users[userEmail]) {
        alert("User Email is incorrect!");
      } else if (users[userEmail]["password"] != userPassword) {
        alert("Your Password is incorrect!");
      } else {
        sessionStorage.setItem("isAuth", userEmail);
        navigate("/home");
      }
    }
  };

  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-gray-400 opacity-50"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 z-20">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Please Login
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?<> </>
          <Link
            to="/register"
            className="text-sm text-sky-400 underline hover:text-sky-500"
          >
            Register
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="text"
                  id="create-account-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  placeholder="Email"
                  required
                  value={userEmail}
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  type="password"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  name="Password"
                  placeholder="Password"
                  required
                  value={userPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-sky-400 hover:bg-sky-500 focus:ring-sky-300 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
