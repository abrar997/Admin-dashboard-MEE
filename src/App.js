import React, { useContext } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Login, List, Single, New } from "./pages";
import "./App.css";
import { data } from "./assets";
import './assets/style.scss'
import { Footer } from "./components";
import { DarkModeContext } from "./context/darkModeContext";
const App = () => {
  const {darkMode}=useContext(DarkModeContext)

  return (
    <div className={darkMode?"app dark":"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            {/* users Route */}
            <Route path="users">
              <Route index element={<List  title='All users' btn='Add new user' link='new' />} />
              <Route path=":id" element={<Single />} />
              <Route path="new" element={<New  input={data.userForm} title="Add New User" />} />
            </Route>
            {/* products Route */}

            <Route path="products">
              <Route index element={<List   title='All Products' btn='Add new Product'  link='new'/>} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New input={data.productForms} title="Add New Products" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
