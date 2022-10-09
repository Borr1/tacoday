import React from "react";
import "./App.css";

/*import InputTodo from "./components/inputTodo";
import allTodos from "./components/allTodos";*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import Home from "./components/Home/index";
import Shops from "./components/Shops/index";
import Shop from "./components/Shop";
function App() {
  return (
    /*
    <Fragment>
      <div className="container mt-5 text-center">{InputTodo()}</div>
      <div className="container mt-5 text-center">{allTodos()}</div>
    </Fragment>
    */

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shops" element={<Shops />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
