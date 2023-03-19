import React, { useState } from "react";
import "./windows.css";
import Popap from "./popup";

const btnClose = "btn btn-outline-danger btn-rounded";
const btnOpen = "btn btn-outline-success btn-rounded";
const imgClose =
  "https://scontent.xx.fbcdn.net/v/t1.15752-9/333749276_3494346130882107_5264588666466122314_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=IPFUOQkIQMsAX_86m1P&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRaF-6rcsTsVVpMYFxLIPIBpE6pCy7GzFGGYij0f8o1Ug&oe=643D9D33";
const imgOpen =
  "https://scontent.xx.fbcdn.net/v/t1.15752-9/333464198_454217626859752_6184285770202589886_n.jpg?stp=dst-jpg_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=sxgfIOfEE5EAX_7qya8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTTEgPf0gMOrPRYTvVtgI-y0TPzhyfXFfWScdwLFEkXIQ&oe=643D7734";
const arrDugme = [btnClose, btnOpen];
const arrSlika = [imgClose, imgOpen];

let bojaDugmeta = 0;

const Windows = (props) => {
  const [status, setStatus] = useState("MANUELNI");
  const [boja, setBoja] = useState(arrDugme[bojaDugmeta]);
  const [slika, setSlika] = useState(arrSlika[bojaDugmeta]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "flex-row",
        justifyContent: "center",
      }}
    >
      <div class="card-container" style={{ display: "inline-block" }}>
        <div class="card">
          <img style={{ height: "260.75px" }} src={slika} alt="" />
          <div class="card-content">
            <h2>{props.name}</h2>
            <div class="row">
              <div class="column column-margin">
                <button
                  style={{ marginTop: "0" }}
                  type="button"
                  class={boja}
                  data-mdb-ripple-color="dark"
                  onClick={() => {
                    bojaDugmeta = bojaDugmeta === 0 ? 1 : 0;
                    setBoja(arrDugme[bojaDugmeta]);
                    setSlika(arrSlika[bojaDugmeta]);
                  }}
                >
                  {bojaDugmeta === 0 ? "Closed" : "Opened"}
                </button>
              </div>
              <div class="column ">
                <p class="text">MOD: {status}</p>
              </div>
              <div class="column">
                <p>
                  Automatsko otvaranje/zatvanje{" "}
                  <span class="form-check form-switch">
                    <input
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onClick={() => {
                        if (status === "MANUELNI") setStatus("AUTOMATSKI");
                        else setStatus("MANUELNI");
                      }}
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    ></label>
                  </span>
                </p>
              </div>
              <div class="column"></div>
            </div>
          </div>
        </div>
      </div>
      <Popap className="popup" />
    </div>
  );
};
export default Windows;
