import { useNavigate } from "react-router-dom";

export const UpdateButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="mr-2 py-2 px-2 flex justify-center items-center  bg-sky-400 hover:bg-sky-500-sky-200 text-white max-w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none-2  rounded-lg whitespace-nowrap"
      onClick={() => {
        navigate("/update");
      }}
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

      <span className="ml-2 hidden md:inline-block">E d i t</span>
    </button>
  );
};
