import React from "react";

export default function TestimonialCard({ title, image, alt, name, message }) {
  return (
    <div className="w-full bg-primaryBlueColor text-center flex flex-col items-center gap-4 p-4">
      <h2 className="uppercase font-semibold text-primaryWhiteColor md:text-2xl">
        {title}
      </h2>
      <div className="w-10 h-10 md:w-20 md:h-20 rounded-full overflow-hidden object-cover">
        <img src={image} alt={alt} className="w-full h-full" />
      </div>
      <h3 className="text-secondaryBlackColor md:text-xl font-semibold">
        {name}
      </h3>
      <p className="text-primaryWhiteColor text-sm">{message}</p>
    </div>
  );
}
