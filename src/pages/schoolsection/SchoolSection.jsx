// SchoolSection.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { banner } from "../../assets/images";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const SchoolSection = () => {
  const { schoolId } = useParams();
  const [school, setSchool] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/schools-mine/schools/${schoolId}`);
        console.log(response.data.data);
        setSchool(response.data.data);
      } catch (error) {
        console.log(error.message);
        setMessage("A problem occurred with the server. Please try again later.");
      }
    };

    fetchSchool();
  }, [schoolId]);

  if (!school) {
    return <p>{message || "Loading..."}</p>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[100vh] px-10 md:px-20 gap-3">
      <div className="md:w-1/2 mt-[20%] md:mt-0 rounded-xl overflow-hidden object-cover">
        <img src={banner} className="w-full h-full" alt="image of school" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-1">
        <h1 className="text-primaryBlueColor uppercase md:text-xl font-bold">
          About {school.school_name}
        </h1>
        <p>{school.school_about}</p>
        <h1 className="text-primaryBlueColor uppercase md:text-xl font-bold">
          School Vision
        </h1>
        <p>{school.school_vision}</p>
        <h1 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
          School Category
        </h1>
        <p>{school.school_category}</p>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
              School Location
            </h2>
            <p>{school.school_location}</p>
          </div>
          <div>
            <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
              School Email
            </h2>
            <p>{school.school_email}</p>
          </div>
          <div>
            <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
              School Phone
            </h2>
            <p>{school.school_phone}</p>
          </div>
        </div>
        <hr className="bg-primaryBlueColor h-1 rounded-xl mt-2" />
        <div className="flex justify-center gap-2 mt-[2%]">
          <a href={school.linkedin_profile} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col flex-wrap items-center gap-2 bg-tertiaryBlueColor p-2 rounded">
              <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
                LinkedIn Profile
              </h2>
              <p className="text-2xl text-primaryBlueColor">
                <FaLinkedin />
              </p>
            </div>
          </a>
          <a href={school.facebook_profile} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col flex-wrap items-center gap-2 bg-tertiaryBlueColor p-2 rounded">
              <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
                Facebook Profile
              </h2>
              <p className="text-2xl text-primaryBlueColor">
                <FaFacebook />
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchoolSection;
