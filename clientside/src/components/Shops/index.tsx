import React, { Fragment, useState, useEffect, useId } from "react";

import "./index.css";
import { useLocation, useNavigate } from "react-router-dom";

const Shops = () => {
  const [time, setTime] = useState("");
  const id = useId();
  useEffect(() => {
    const date = new Date();

    let hours: string;
    let mins: string;
    if (date.getHours() >= 10) hours = `${date.getHours()}`;
    else hours = "0" + date.getHours();

    if (date.getMinutes() >= 10) mins = `${date.getMinutes()}`;
    else mins = "0" + date.getMinutes();

    const hor = hours + ":" + mins;
    setTime(hor);
  }, []);

  const location = useLocation();
  const shops: any = location.state;

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="shops">
        <div className="backgroundImg">
          <div className="logo"></div>
        </div>
      </div>
      <div className="mt-2">
        <h1 className="minititre text-center">Our shops</h1>
      </div>

      <div className="contentMagasins">
        {" "}
        <div className="magasins">
          {shops.map((shop: Shop, index: number) => {
            // return time;

            const avaiable = () => {
              const date = new Date();

              let bool = "Closed";
              const sched: any = shop.schedule;
              const day = date.getDay();

              for (let i = 0; i < sched[`${day}`].length; i++) {
                if (
                  time >= sched[`${day}`][i].start &&
                  time <= sched[`${day}`][i].finish
                )
                  bool = "Open";
              }
              return bool;
            };

            const mdp_mdv = () => {
              let output = "";
              if (shop.mdp.cash === "true") output += "💵";
              if (shop.mdp.card === "true") output += "💳";
              if (shop.mdv.delivery === "true") output += "🚚";
              return output;
            };

            return (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/shop", { state: shop });
                }}
                key={id}
              >
                <figure>
                  <div className="date">
                    <span className="card-date-day">{avaiable()}</span>
                    <span className="card-date-month">{mdp_mdv()}</span>
                  </div>

                  <figcaption className="text-center">
                    <h4>
                      <span>{shop.designation}</span>
                    </h4>
                    <div className="address">
                      <h5>{shop.address}</h5>
                    </div>
                  </figcaption>
                </figure>
              </div>
            );
          })}
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
    </Fragment>
  );
};

export default Shops;
