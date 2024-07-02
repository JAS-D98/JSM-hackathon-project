import React from "react";

export default function Button({
  title,
  icon,
  marginTop,
  backgroundColor,
  border,
}) {
  return (
    <button
      className={`flex items-center justify-center px-3 py-2 max-w-[200px] shadow-md mt-${marginTop ? marginTop : `6`} text-white bg-${backgroundColor ? backgroundColor : "bg-primaryBlueColor"} gap-2 rounded-md capitalize hover:opacity-70 ${border ? border : ""}`}
    >
      {title} {icon && <img src={icon} width={20} className="rotate-45 mt-1" />}
    </button>
  );
}
