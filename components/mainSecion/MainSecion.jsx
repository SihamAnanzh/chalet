import React from "react";
import { Facebook, Instagram, Phone } from "@material-ui/icons";
import MovingComponent from "react-moving-text";
import { useEffect } from "react";
const MainSecion = () => {
  return (
    <div className="contanier">
      <div className="mainSecionContanier">
        <div className="header">
          <MovingComponent
            type="fadeInFromTop"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <div className="logo">Chalet</div>
          </MovingComponent>
          <div className="links">
            <MovingComponent
              type="fadeInFromTop"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="link">
                <Instagram />
              </div>
            </MovingComponent>
            <MovingComponent
              type="fadeInFromTop"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="link">
                {" "}
                <Facebook />
              </div>
            </MovingComponent>
            <MovingComponent
              type="fadeInFromTop"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <div className="link">
                {" "}
                <Phone />
              </div>
            </MovingComponent>
          </div>
        </div>

        <div className="content">
          <MovingComponent
            type="fadeInFromTop"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            <h1>Chalet</h1>
            <p>
              Here are my favorite travel and adventure quotes, paired with
              images from my journeys around the world.
            </p>
          </MovingComponent>
        </div>
      </div>
    </div>
  );
};

export default MainSecion;
