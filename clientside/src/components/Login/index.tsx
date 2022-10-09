import React, { Fragment, useState } from "react";

import { useNavigate } from "react-router-dom";
import "./index.css";

// const submit = () => {};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Register = () => {
    navigate("/register");
  };
  let navigate = useNavigate();
  const HandleEventLogin = async (e: any) => {
    e.preventDefault();

    const body = { username, password };
    fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error === false) {
          navigate("/home");
        } else {
          alert("Verify!!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Fragment>
      <body className="lgn">
        <div className="login">
          <div className="border form">
            <h1 className="mt-5 text-center">Login</h1>
            <div style={{ height: "5vh" }}></div>

            <div
              className="mt-2 "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "3vh",
              }}
            >
              <form>
                <div className="container mt-2 center">
                  {" "}
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    className="form-control"
                    placeholder="username"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="container mt-4">
                  <label htmlFor="password">Password </label>
                  <input
                    placeholder="password"
                    id="password"
                    type="password"
                    className="form-control"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="mt-5 p-3 text-center">
                  <button
                    className="btn btn-primary p-2"
                    onClick={(e: any) => HandleEventLogin(e)}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-warning p-2 "
                    style={{ marginLeft: "30px" }}
                    onClick={() => {
                      Register();
                    }}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            style={{
              position: "fixed",
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: "#292929",
            }}
          >
            <h6
              className="text-center"
              style={{ color: "white", fontWeight: "lighter" }}
            >
              Borhen Benltaief © TacoDay © 2022/2023{" "}
            </h6>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

export default Login;
