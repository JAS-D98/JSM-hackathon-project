import React from "react";
import Button from "../components/button/Button";
import InputSection from "../components/InputSection/InputSection";
import { aboutimage1 } from "../assets/images";

export default function SchoolsPage() {
  return (
    <div className="px-10 md:px-20">
      <div className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center flex-col">
        <div className="bg-primaryBlueColor w-full rounded-xl text-center p-4 flex flex-col items-center">
          <h1 className="font-bold text-2xl md:text-6xl text-primaryWhiteColor capitalize text-center">
            See a list of all schools
          </h1>
          <p className="text-md md:text-xl text-primaryWhiteColor mt-2">
            Filter schools by
          </p>
          <div className="flex flex-row items-center gap-3 flex-wrap justify-center mb-2">
            <Button
              title="Kindergarten"
              backgroundColor="primaryBlueColor"
              border="border"
            />
            <Button
              title="Primary"
              backgroundColor="primaryBlueColor"
              border="border"
            />
            <Button
              title="HighSchool"
              backgroundColor="primaryBlueColor"
              border="border"
            />
            <Button
              title="College"
              backgroundColor="primaryBlueColor"
              border="border"
            />
            <Button
              title="Univerity"
              backgroundColor="primaryBlueColor"
              border="border"
            />
          </div>
          <InputSection
            formAction=""
            inputPlaceHolder="Search for a school here"
            btnMarginTop="0"
            btnTitle="Search School"
            btnBackground="primaryBlueColor"
            btnBorder="border"
            btnfuncWord=""
          />
        </div>
      </div>
      <div>
        <h1 className="text-primaryBlackColor font-bold text-xl md:text-2xl uppercase">
          Universities
        </h1>
        <div className="mt-6 flex flex-col gap-3 md:gap-0 md:flex-row items-center flex-wrap justify-between">
          <div className="bg-primaryBlueColor text-primaryWhiteColor w-full md:w-[24%] gap-2 flex flex-col rounded-xl shadow-xl">
            <div className="overflow-hidden w-full h-36 object-cover rounded-tr-xl rounded-tl-xl">
              <img
                src={aboutimage1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <h1 className="uppercase font-semibold">Green Valley</h1>
              <p>A place where learning meets excellence</p>
              <p className="placeholder-opacity-80">
                Location:{" "}
                <span className="text-secondaryBlackColor">
                  Kiharu Murang'a
                </span>
              </p>
            </div>
          </div>
          <div className="bg-primaryBlueColor text-primaryWhiteColor w-full md:w-[24%] gap-2 flex flex-col rounded-xl shadow-xl">
            <div className="overflow-hidden w-full h-36 object-cover rounded-tr-xl rounded-tl-xl">
              <img
                src={aboutimage1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <h1 className="uppercase font-semibold">Green Valley</h1>
              <p>A place where learning meets excellence</p>
              <p className="placeholder-opacity-80">
                Location:{" "}
                <span className="text-secondaryBlackColor">
                  Kiharu Murang'a
                </span>
              </p>
            </div>
          </div>
          <div className="bg-primaryBlueColor text-primaryWhiteColor w-full md:w-[24%] gap-2 flex flex-col rounded-xl shadow-xl">
            <div className="overflow-hidden w-full h-36 object-cover rounded-tr-xl rounded-tl-xl">
              <img
                src={aboutimage1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <h1 className="uppercase font-semibold">Green Valley</h1>
              <p>A place where learning meets excellence</p>
              <p className="placeholder-opacity-80">
                Location:{" "}
                <span className="text-secondaryBlackColor">
                  Kiharu Murang'a
                </span>
              </p>
            </div>
          </div>
          <div className="bg-primaryBlueColor text-primaryWhiteColor w-full md:w-[24%] gap-2 flex flex-col rounded-xl shadow-xl">
            <div className="overflow-hidden w-full h-36 object-cover rounded-tr-xl rounded-tl-xl">
              <img
                src={aboutimage1}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <h1 className="uppercase font-semibold">Green Valley</h1>
              <p>A place where learning meets excellence</p>
              <p className="placeholder-opacity-80">
                Location:{" "}
                <span className="text-secondaryBlackColor">
                  Kiharu Murang'a
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
