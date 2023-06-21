import { Link, useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";

import { DashHeader } from "./_components/DashHeader";
import { HomeHeader } from "./_components/HomeHeader";
import { Register } from "./_components/Register";
import { Login } from "./_components/Login";
import { Blogs } from "./_components/_blog/Blogs";
import { NewBlog } from "./_components/_blog/NewBlog";
import { AddButton } from "./_components/_blog/AddButton";
import { BlogDetail } from "./_components/_blog/BlogDetail";
import { UpdateBlog } from "./_components/_blog/UpdateBlog";

function App() {
  return (
    /* !!! Excuese me, I have some problems and questions in Using Routing. For example, changing poings by eacy react-router version !!! */
      <Routes>
        {/* Route for DashBoard */}
        <Route path = "/" element = { <><DashHeader /><Blogs /></> } />

        {/* Route for Register */}
        <Route path = "register" element = { <><DashHeader /><Blogs /><Register /></> } />

        {/* Route for Login */}
        <Route path = "/login" element = { <><DashHeader /><Blogs /><Login /></> } />

        {/* Route for Home */}
        <Route path = "/home" element = { <><HomeHeader /><Blogs /><AddButton /></> } />

        {/* Route for crating Page */}
        <Route path = "/newblog" element = { <><HomeHeader /><NewBlog /></> } />

        {/* Route for Detail Page */}
        <Route path = "/detail" element = { <><HomeHeader /><BlogDetail /></> } />

        {/* Route for Update Page */}
        <Route path = "/update" element = { <><HomeHeader /><UpdateBlog /></> } />
      </Routes>
  );
}

export default App;
