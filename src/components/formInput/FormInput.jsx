import React from "react";

export default function FormInput({
  Labelname,
  InputType,
  InputIcon,
  InputName,
  InputId,
  placeholderText,
  required,
  onChange,
  onBlur,
  value,
}) {
  return (
    <div className="text-[.6em] w-full text-2xl ">
      <label htmlFor={InputId}>
        <h2 className="font-medium text-xl text-primaryBlackColor">
          {Labelname}:
        </h2>{" "}
      </label>
      <div className="flex items-center bg-primaryBlueColor px-3 rounded mt-2">
        <span className="text-primaryWhiteColor text-xl">{InputIcon}</span>
        <input
          type={InputType}
          placeholder={placeholderText}
          className="text-primaryWhiteColor placeholder:text-primaryWhiteColor rounded outline-none w-full bg-transparent px-2 py-1 focus:bg-transparent text-[1.3em]"
          id={InputId}
          name={InputName}
          min="0"
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete="false"
        />
      </div>
    </div>
  );
}
