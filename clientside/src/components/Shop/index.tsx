import React, { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./index.css";

const Shop = () => {
  const location = useLocation();
  const shop: any = location.state;
  const date = new Date();

  const weekDay = date.getDay().toString();

  const mdp_mdv = () => (
    <div>
      <h4>
        Payment
        <h5>💵 : Cash</h5>
        <h5>💳 : Card</h5>
        <h5>We also offer 🚚 : Delivery</h5>
      </h4>
    </div>
  );

  const weekDays = {
    "0": "Sunday",
    "1": "Monday",
    "2": "Tuesday",
    "3": "Wednesday",
    "4": "Thursday",
    "5": "Friday",
    "6": "Saturday",
  };
  const today = weekDays[weekDay];

  const time = [
    "08h00",
    "08h15",
    "08h30",
    "08h45",
    "09h00",
    "09h15",
    "09h30",
    "09h45",
    "10h00",
    "10h15",
    "10h30",
    "10h45",
    "11h00",
    "11h15",
    "11h30",
    "11h45",
    "12h00",
    "12h15",
    "12h30",
    "12h45",
    "13h00",
    "13h15",
    "13h30",
    "13h45",
    "14h00",
    "14h15",
    "14h30",
    "14h45",
    "15h00",
    "15h15",
    "15h30",
    "15h45",
    "16h00",
    "16h15",
    "16h30",
    "16h45",
    "17h00",
    "17h15",
    "17h30",
    "17h45",
    "18h00",
    "18h15",
    "18h30",
    "18h45",
    "19h00",
    "19h15",
    "19h30",
    "19h45",
    "20h00",
    "20h15",
    "20h30",
    "20h45",
    "21h00",
    "21h15",
    "21h30",
    "21h45",
    "22h00",
    "22h15",
    "22h30",
    "22h45",
    "23h00",
    "23h15",
    "23h30",
    "23h45",
    "00h00",
  ];
  function ModalCommand() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <button className="btn  command" onClick={handleShow}>
          Command
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Command options</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="options">
              <div>
                <div className="delivery"></div>
                <h3>Delivery</h3>
              </div>

              <div>
                <div className="takeout"></div>
                <h3>Takeout</h3>
              </div>
            </div>{" "}
            <div id="liste_select">
              <select
                id="zoneSelect"
                className="form-select form-select-lg mb-3 text-center "
              >
                <option id="1" value="20220831 080000">
                  08h00
                </option>
                {time.map((t: string, index: number) => (
                  <option value={`${t}`} key={index}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="boutonModal"
              variant="primary"
              onClick={handleClose}
            >
              Command
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  return (
    <Fragment>
      <div className="shops shop">
        <div className="backgroundImg">
          <div className="logo"></div>
          <div className="header">
            {" "}
            <div className="container border label">
              <h1 className="text-center">{shop.designation}</h1>
              <h4 className="text-center">Address : {shop.address}</h4>
              <h4 className="text-center">{mdp_mdv()}</h4>
            </div>
            <div className="table sched border">
              <table>
                <tr>
                  {Object.values(weekDays).map((day: string, index: number) =>
                    day === today ? (
                      <th className="today" key={index}>
                        {day}
                      </th>
                    ) : (
                      <th key={index}>{day}</th>
                    )
                  )}
                </tr>
                <tr>
                  {Object.keys(weekDays).map((day: any) => (
                    <td>
                      {shop.schedule[`${day}`].map((period: any) =>
                        day === today ? (
                          <tr className="today">
                            <td>{`${period.start} ==> ${period.finish}\n`}</td>
                          </tr>
                        ) : (
                          <tr>
                            <td>{`${period.start} ==> ${period.finish}\n`}</td>
                          </tr>
                        )
                      )}
                    </td>
                  ))}
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="products">
          {" "}
          {/* {meals.map((meal: string, index: number) => (
            <div className="product border" key={index}>
              <h4 className="text-center">{meal}</h4>
              <div className="productImg"></div>
              <button
                className="btn  command"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Command
              </button>
            </div>
          ))} */}
          <div className="product border">
            <h4 className="text-center">Special Taco</h4>
            <div className="productImg"></div>
            <ModalCommand />
          </div>
          <div className="product border">
            <h4 className="text-center">Chicken Taco</h4>
            <div className="productImg"></div>
            <ModalCommand />
          </div>
          <div className="product border">
            <h4 className="text-center">Meat Taco</h4>
            <div className="productImg"></div>
            <ModalCommand />
          </div>
        </div>
        <div className="products">
          <div className="product border ">
            <h4 className="text-center">Large Taco</h4>
            <div className="productImg"></div>
            <ModalCommand />
          </div>
          <div className="product border ">
            <h4 className="text-center">Medium Taco</h4>
            <div className="productImg"></div>
            <ModalCommand />
          </div>
          <div className="product border ">
            <h4 className="text-center">Small Taco</h4>
            <div className="productImg"></div>
            <ModalCommand />
          </div>
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

export default Shop;
