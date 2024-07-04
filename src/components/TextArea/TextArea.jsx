import React from "react";

export default function TextArea({
  Labelname,
  InputIcon,
  InputName,
  InputId,
  placeholderText,
  required
}) {
  return (
    <div className="text-[.6em] w-full md:w-[48%] mt-2">
      <label htmlFor={InputId}>
        <h2 className="font-medium text-xl text-primaryBlackColor">
          {Labelname}:
        </h2>{" "}
      </label>
      <div className="flex bg-primaryBlueColor px-3 rounded mt-2 min-h-36 py-2">
        <span className="text-primaryWhiteColor text-xl">{InputIcon}</span>
        <textarea
          name={InputName}
          id={InputId}
          placeholder={placeholderText}
          className="text-primaryWhiteColor placeholder:text-primaryWhiteColor rounded outline-none w-full bg-transparent px-2 focus:bg-transparent leading-tight text-[1.3em] mt-1"
          required={required}
        />
      </div>
    </div>
  );
}
