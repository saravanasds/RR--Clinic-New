import React from "react";

import Skin from "./Skin";
import Skin2 from "./Skin2";
import Skin3 from "./Skin3";
import Skin4 from "./Skin4";
import Skinhero from "./Skinhero";

const Skintreatment = () => {
  return (
    <div className="w-[100%] h-[100%]">
      <div className="w-[100%] h-[100%]">
        <Skinhero />
        <Skin />
        <Skin2 />
        <Skin3 />
        <Skin4 />
      </div>
    </div>
  );
};

export default Skintreatment;
