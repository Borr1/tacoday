import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Home = () => {
  type Shop = {
    uid: string;
    designation: string;
    schdule: JSON;
    address: string;
    image: string;
    mdp: JSON;
    mdv: JSON;
  };
  const navigate = useNavigate();

  const onShop = async () => {
    await fetch("http://localhost:5000/api/v1/shops")
      .then((response) => response.json())
      .then((data) => {
        let shops: Shop[] = data.rows;

        navigate("/shops", { state: shops });
      });
  };
  return (
    <Fragment>
      <div className="home">
        <div className="backgroundImg">
          <h1 className="text-center titre">
            <div className="logo text-center titre"></div>TacoDay
          </h1>

          <h1 className="a mt-3">Where everyday is a taco day</h1>
          <div className="intro border ">
            <div className="content">
              <div className="flx">
                <h1 className="nb1">5 shops</h1>
                <div className="shop"></div>
              </div>
              <div className="flx">
                <h1 className="nb2">+20 meals</h1>
                <div className="meal"></div>
              </div>
            </div>
            <button className="btn button" onClick={onShop}>
              <h1 className="bouton">SHOP NOW</h1>
            </button>
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
    </Fragment>
  );
};

export default Home;
