import React, { useState, useEffect } from "react";

const ImageComparison = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const moveDivisor = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    moveDivisor({ target: { value: sliderValue } });
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <div className="relative w-full pt-[100%] overflow-hidden">
        <figure className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/photoshop-face-before.jpg)` }}>
          <div
            id="divisor"
            className="absolute h-full bg-cover bg-no-repeat bg-center shadow-lg"
            style={{
              width: `${sliderValue}%`,
              backgroundImage: `url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/photoshop-face-after.jpg)`,
            }}
          >
            <div className="absolute right-[-2px] top-0 w-[4px] h-[calc(50%-25px)] bg-white shadow-lg z-10"></div>
            <div className="absolute right-[-2px] bottom-0 w-[4px] h-[calc(50%-25px)] bg-white shadow-lg z-10"></div>
          </div>
          <div
            id="handle"
            className="absolute w-[50px] h-[50px] bg-transparent border-4 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="absolute left-[-17px] top-1/2 border-r-[6px] border-r-white border-transparent transform -translate-y-1/2"></div>
            <div className="absolute right-[-17px] top-1/2 border-l-[6px] border-l-white border-transparent transform -translate-y-1/2"></div>
          </div>
        </figure>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={moveDivisor}
          className="absolute top-1/2 left-[-25px] w-[calc(100%+50px)] z-30 transform -translate-y-1/2 appearance-none bg-transparent focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ImageComparison;
