import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data Analytics Dashboard
          </p>
          <h1 className="capitalize md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage data analytics centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            asperiores neque facere illum et accusamus praesentium, ratione
            nostrum itaque perspiciatis voluptates provident voluptatum
            expedita, perferendis incidunt. Eligendi saepe quia vitae!
          </p>
          <button className="bg-black text-[#00df9a] md:text-lg text-xs font-medium w-[200px] my-6 mx-auto md:mx-0 py-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
