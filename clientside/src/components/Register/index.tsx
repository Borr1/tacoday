import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Register = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setlast_name] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (
      username !== "" &&
      first_name !== "" &&
      last_name !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      email !== ""
    )
      if (password === confirmPassword)
        try {
          const body = { first_name, last_name, username, email, password };
          await fetch("http://localhost:5000/api/v1/post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          navigate("/");
        } catch (err: any) {
          console.error(err.message);
        }
      else alert("passwords are not compatible");
    else alert("all fields need to be filled");
  };

  const navigate = useNavigate();
  const Submit = () => {
    navigate("/");
  };
  const [agree, setAgree] = useState(false);
  const checkboxhandler = () => {
    setAgree(!agree);
  };

  return (
    <Fragment>
      <body className="rgstr">
        <div className="register">
          <div className="backgroundImg">
            {" "}
            <div className="border form">
              <h1 className="text-center">Register</h1>
              <div style={{ height: "4vh" }}></div>

              <div
                className="mt-2 "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "8vh",
                }}
              >
                <form>
                  <div className="container  center">
                    {" "}
                    <label>
                      First Name{" "}
                      <input
                        placeholder="First Name"
                        className="form-control"
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="container mt-2">
                    {" "}
                    <label>
                      Last Name{" "}
                      <input
                        placeholder="Last Name"
                        className="form-control"
                        onChange={(e) => {
                          setlast_name(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="container mt-2">
                    {" "}
                    <label>
                      Username{" "}
                      <input
                        placeholder="Username"
                        className="form-control"
                        onChange={(e) => {
                          setusername(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="container mt-2">
                    {" "}
                    <label>
                      Email{" "}
                      <input
                        placeholder="Email"
                        type="email"
                        className="form-control"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="container mt-2">
                    <label>
                      Password{" "}
                      <input
                        placeholder="Password"
                        type="password"
                        className="form-control"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="container mt-2">
                    <label>
                      Confirm Password{" "}
                      <input
                        placeholder="Confirm Password"
                        type="password"
                        className="form-control"
                        onChange={(e) => {
                          setConfirmPassword(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                  <div className="container">
                    <div
                      className="mt-3"
                      style={{ display: "flex", wordSpacing: "1px" }}
                    >
                      {" "}
                      <input
                        type="checkbox"
                        id="agree"
                        onChange={checkboxhandler}
                      />
                      <label htmlFor="agree">
                        I agree to the site's <b>terms and conditions</b>
                      </label>
                    </div>
                  </div>
                  <div className="mt-4 p-3" style={{ marginLeft: "3vh" }}>
                    <button
                      disabled={!agree}
                      className="btn btn-primary p-2"
                      onClick={onSubmit}
                    >
                      Register
                    </button>
                    <button
                      className="btn btn-warning p-2 "
                      style={{ marginLeft: "30px" }}
                      onClick={() => {
                        Submit();
                      }}
                    >
                      Login
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
        </div>
      </body>
    </Fragment>
  );
};

export default Register;
