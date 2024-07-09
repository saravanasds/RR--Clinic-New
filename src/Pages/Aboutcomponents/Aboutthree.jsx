import React from "react";
import clinic from "../../assets/clinic.jpg";
import bgline from "../../assets/bgline.jpg";

const Aboutthree = () => {
  return (
    <>
      <div className="relative h-auto ">
        <div
          className=" w-[100%] h-[600px] absolute -z-10   blur-[2px]"
          style={{
            backgroundImage: `url(${bgline})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></div>
        <div className=" w-[100%] h-[600px] flex justify-center items-center">
          <div className=" w-[50%] h-[600px] rounded-full flex justify-center items-center p-5">
            <img className="w-[100%] h-[500px] " src={clinic} />
          </div>

          <div className="w-[50%] h-[600px] py-10 flex flex-col justify-center items-center px-5 ">
            <h3 className="w-[100%] text-4xl font-semibold bg-gradient-to-l from-blue-100 to-blue-500 mb-5 p-5 text-white">
              What we do
            </h3>
            <p className="leading-normal text-xl px-1 text-gray-900">
              With FDA approved treatments, Advanced Grohair Clinic provides
              advanced therapies to patients which includes LASER therapy for
              hair restoration, Microblading for eyebrows, Eyelash extensions,
              Scalp micro pigmentation, Lip permanent pigmentation, Eyebrow tint
              and lash lamination, & much more. No doubt our experienced
              professionals and experts recommend you the best treatment that
              matches your needs and assist you achieve the desired results that
              you have always longed for.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutthree;
