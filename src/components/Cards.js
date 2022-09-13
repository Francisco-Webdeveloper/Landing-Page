import React from "react";
import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <Card
          image={Single}
          alt="single"
          buttonColors="bg-[#00df9a]"
          marginY="my-4"
        />
        <Card
          image={Double}
          alt="double"
          buttonColors="text-[#00df9a] bg-black"
          marginY="md:my-0 my-8"
        />
        <Card
          image={Triple}
          alt="triple"
          buttonColors="bg-[#00df9a]"
          marginY="my-4"
        />
      </div>
    </div>
  );
};

export default Cards;
