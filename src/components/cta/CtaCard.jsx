import React from "react";

export default function CtaCard({ icon, label }) {
  return (
    <div className="bg-primaryBlueColor min-w-32 max-w-40 rounded p-2 flex flex-col items-center text-primaryWhiteColor gap-3 hover:scale-105 ease-in-out duration-200">
      <div className="text-primaryWhiteColor text-3xl">{icon}</div>
      <p>{label}</p>
    </div>
  );
}
