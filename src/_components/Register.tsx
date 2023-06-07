import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("isAuth")) {
      navigate("/home");
    }
  }, []);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCpassword, setUserCpassword] = useState("");

  interface User {
    name: string;
    email: string;
    password: string | number;
  }

  const handleRegister = () => {
    if (
      userFirstName != "" &&
      userLastName != "" &&
      userEmail != "" &&
      userPassword != ""
    ) {
      const registeredUsers = JSON.parse(localStorage.getItem("users") || "{}");
      if (userPassword != userCpassword) {
        alert("Wrong Password");
      } else if (registeredUsers[userEmail]) {
        alert("The Same Email already exists");
      } else {
        let willSaveUsers: { [email: string]: User } = {};
        willSaveUsers = localStorage.getItem("users")
          ? JSON.parse(localStorage.getItem("users") || "{}")
          : {};
        willSaveUsers[userEmail] = {
          name: userFirstName + userLastName,
          email: userEmail,
          password: userPassword,
        };
        localStorage.setItem("users", JSON.stringify(willSaveUsers));
        alert("Successful");
        navigate("/login");
      }
    }
  };

  return (
    <>
      <div className="fixed top-0 w-screen h-screen bg-gray-400 opacity-50"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          If your have an account, Please<> </>
          <Link
            to="/login"
            className="text-sm text-sky-400 underline hover:text-sky-500"
          >
            Login
          </Link>
        </span>
        <div className="p-6 mt-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex gap-4 mb-2">
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="create-account-first-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  name="First name"
                  placeholder="First name"
                  value={userFirstName}
                  onChange={(e) => {
                    setUserFirstName(e.target.value);
                  }}
                />
              </div>
              <div className=" relative ">
                <input
                  required
                  type="text"
                  id="create-account-last-name"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  name="Last name"
                  placeholder="Last name"
                  value={userLastName}
                  onChange={(e) => {
                    setUserLastName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  required
                  type="email"
                  id="create-account-email"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  placeholder="Email"
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
                  required
                  type="password"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  name="Password"
                  placeholder="Password"
                  value={userPassword}
                  onChange={(e) => {
                    setUserPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col mb-2">
              <div className=" relative ">
                <input
                  required
                  type="password"
                  id="create-account-pseudo"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  name="Confirm Password"
                  placeholder="Confirm Password"
                  value={userCpassword}
                  onChange={(e) => {
                    setUserCpassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="flex w-full my-4">
              <button
                type="submit"
                className="py-2 px-4  bg-sky-400 hover:bg-sky-500 focus:ring-sky-300 focus:ring-offset-sky-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
