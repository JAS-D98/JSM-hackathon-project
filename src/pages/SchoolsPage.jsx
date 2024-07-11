import React, { useEffect, useState } from "react";
import Button from "../components/button/Button";
import InputSection from "../components/InputSection/InputSection";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SchoolsPage() {
  const [schools, setSchools] = useState([]);
  const [message, setMessage] = useState("");
  const handleFetch = async () => {
    try {
      setLoading(true);
      const schoolUrl = "http://localhost:5000/api/schools-mine/schools";
      const schools = await axios.get(schoolUrl);
      console.log(schools);
      if (!schools.ok) {
        setMessage("No schools at the moment found");
      }
      setSchools(schools.data.data);
      console.log(schools.data.data);
    } catch (error) {
      console.error(error.Message);
      setMessage("A problem occurred with the server try again later");
    }
  };
  useEffect(() => {
    handleFetch();
  }, []);
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
        <div className="mt-6 flex flex-col gap-3 md:gap-2 md:flex-row items-center flex-wrap justify-between">
          {schools.map((school) => (
            <div className="w-full md:w-[24%]">
              <Link to={`/schools-section/${school.school_id}`} className="w-full" key={school.school_id}>
                <div className="bg-primaryBlueColor text-primaryWhiteColor w-full flex flex-col rounded-xl shadow-xl">
                  <div className="overflow-hidden w-full h-36 object-cover rounded-tr-xl rounded-tl-xl bg-primaryErrorMessage">
                    <img
                      src={school.school_image}
                      alt={`image of ${school.school_name} school`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <h1 className="uppercase font-semibold">
                      {school.school_name}
                    </h1>
                    <div className="h-12 overflow-hidden">
                      <p>{school.school_about}</p>
                    </div>
                    <p className="placeholder-opacity-80">
                      Location:{" "}
                      <span className="text-secondaryBlackColor capitalize">
                        {school.school_location}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
