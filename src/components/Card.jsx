import React from "react";
import Image from "./Image";

import shoeImage from "../assets/shoe-image.png";
import Heading from "./Heading";
import Button from "./Button";

const Card = () => {
  return (
    <div className="card group w-[400px] h-[500px] bg-[#1f1f1f] rounded-2xl mx-auto mt-6  relative overflow-hidden text-center">
      <div className="circle -z-0 w-[400px]  h-[400px] rounded-[50%] bg-[#9ada2a] absolute left-[135px] -top-[180px] transition-all duration-500 ease-in-out group-hover:-left-[45px] group-hover:-top-[375px] group-hover:w-[600px] group-hover:h-[600px]"></div>
      <Image
        imageSrc={shoeImage}
        altText="shoe-image"
        style="w-[320px] relative z-10 left-2/4 top-2/4 -rotate-[10deg] -translate-x-2/4 -translate-y-[60%] group-hover:-rotate-[30deg] group-hover:translate-y-[-200px] transition-all duration-500 ease-in-out"
      />
      <Heading
        tagName="h1"
        text="Air Jordan"
        style="text-white mt-[180px] text-[50px] transition-all duration-500 ease-in-out group-hover:translate-y-[-100px] group-hover:text-[40px]"
      />
      <div className="size translate-y-[100px] flex justify-center transition-all duration-500 ease-in-out group-hover:translate-y-[-80px] ">
        <Heading tagName="h3" text="SIZE:" style="text-white text-[18px]" />
        <Button
          text="7"
          style="px-2 bg-white hover:bg-[#9ada2a] hover:text-white rounded-md mr-1 ml-1  transition-all duration-300 ease-in-out"
        />
        <Button
          text="8"
          style="px-2 bg-white hover:bg-[#9ada2a] hover:text-white rounded-md mr-1  transition-all duration-300 ease-in-out"
        />
        <Button
          text="9"
          style="px-2 bg-white hover:bg-[#9ada2a] hover:text-white rounded-md mr-1  transition-all duration-300 ease-in-out"
        />
        <Button
          text="10"
          style="px-1 bg-white hover:bg-[#9ada2a] hover:text-white rounded-md mr-1  transition-all duration-300 ease-in-out"
        />
      </div>
      <Heading
        tagName="h2"
        text="Price: 999$"
        style="text-white translate-y-[110px]  transition-all duration-500 ease-in-out group-hover:translate-y-[-70px] text-[20px]"
      />
      <Button
        text="Buy Now"
        style="bg-white px-[25px] py-[10px] rounded-lg font-bold border translate-y-[110px] transition-all duration-500 ease-in-out group-hover:translate-y-[-50px]"
      />
    </div>
  );
};

export default Card;

// -left-[45px]
// w-[400px] h-
