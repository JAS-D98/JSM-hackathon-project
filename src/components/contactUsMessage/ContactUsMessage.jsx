import React from "react";

export default function ContactUsMessage({ title, Message, Icon }) {
  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <h2 className="text-xl font-medium text-primaryBlackColor">{title}</h2>
      {Icon && <span className="text-2xl text-green-600">{Icon}</span>}
      <p className="italic text-secondaryBlackColor">{Message}</p>
    </div>
  );
}
