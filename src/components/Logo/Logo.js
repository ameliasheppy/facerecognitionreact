import React from "react";
import Tilt from "react-parallax-tilt";
import dog from "./dog.PNG";
import "./Logo.css";

const Logo = () => {
  return (
    <div
      className="ma4 mt0"
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="inner-element">
          <img src={dog} alt="company logo" style={{ paddingTop: "140px" }} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
