import React from "react";

export default function TextArea({
  Labelname,
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
    <div className="text-[.6em] w-full mt-2">
      <label htmlFor={InputId}>
        <h2 className="font-medium text-xl text-primaryBlackColor">
          {Labelname}:
        </h2>
      </label>
      <div className="flex bg-primaryBlueColor px-3 rounded mt-2 min-h-36 py-2">
        <span className="text-primaryWhiteColor text-xl">{InputIcon}</span>
        <textarea
          name={InputName}
          id={InputId}
          placeholder={placeholderText}
          className="text-primaryWhiteColor placeholder:text-primaryWhiteColor rounded outline-none w-full bg-transparent px-2 focus:bg-transparent leading-tight text-[1.3em] mt-1"
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
