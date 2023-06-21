/* Likes Button Component in Detail Page */

import { Link } from "react-router-dom";
import { useState } from "react";

export const AddLikesButton = () => {
  const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
  const savedId = Number(localStorage.getItem("blogId"));
  const [likesCount, addLikes] = useState(blogs[savedId].likes);
  const [display, handleDisplay] = useState("");
  const handleLikes = () => {
    localStorage.setItem(
      (sessionStorage.getItem("isAuth") || "") + savedId.toString(),
      ""
    );
    blogs[savedId].likes++;
    localStorage.setItem("blogs", JSON.stringify(blogs));
    addLikes(likesCount + 1);
    handleDisplay("hidden");
  };

  return (
    <>
      <span className="text-xl mr-3">{likesCount}</span>
      <img
        src="./plus.png"
        className={
          "w-4 h-4 mr-2 md:h-6 md:w-6 mt-1 hover:cursor-pointer hover:scale-110 " +
          display
        }
        onClick={handleLikes}
      />
    </>
  );
};
