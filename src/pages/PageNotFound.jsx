import React from "react";
import { lostavatar } from "../assets/images";

export default function PageNotFound() {
  return (
    <div className="px-10 md:px-20 w-full min-h-[100vh] flex items-center justify-center flex-col">
      <img src={lostavatar} alt="image of an avatar with a map" />
      <p className="text-2xl md:text-4xl font-bold text-primaryBlackColor capitalize">
        Oop's Page Not Found.
      </p>
      <p className="text-xl md:text-2xl text-secondaryBlackColor capitalize">
        It Seems You took a wrong Route
      </p>
    </div>
  );
}
