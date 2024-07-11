import React from "react";
import { banner } from "../../assets/images";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

export const SchoolSection=async()=> {
  const [schools, setSchools] = useState([]);
  const [message, setMessage] = useState("");
  try {
    const school=await axios.get("http://localhost:5000/api/schools-mine/schools/", )
  } catch (error) {
    console.log(error.message);
    setMessage("A problem occurred with the server try again later");
  }
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full min-h-[100vh] px-10 md:px-20 gap-3">
      <div className="md:w-1/2 mt-[20%] md:mt-0 rounded-xl overflow-hidden object-cover">
        <img src={banner} className="w-full h-full" alt="image of school" />
      </div>
      <div className="md:w-1/2 flex flex-col gap-1">
        <h1 className="text-primaryBlueColor uppercase md:text-xl font-bold">
          About GreenView Academy
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          aspernatur nam aliquam possimus iure quidem ad iusto esse similique
          illum officia, et itaque. Incidunt laborum necessitatibus modi
          molestiae neque. Hic.
        </p>
        <h1 className="text-primaryBlueColor uppercase md:text-xl font-bold">
          School Vision
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
          aspernatur nam aliquam possimus iure quidem ad iusto esse similique
          illum officia, et itaque. Incidunt laborum necessitatibus modi
          molestiae neque. Hic.
        </p>
        <h1 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
          School Category
        </h1>
        <p>HighSchool</p>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
              School Location
            </h2>
            <p>Murang'a</p>
          </div>
          <div>
            <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
              School Email
            </h2>
            <p>greenview@gmail.com</p>
          </div>
          <div>
            <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
              School Phone
            </h2>
            <p>+254706235398</p>
          </div>
        </div>
        <hr className="bg-primaryBlueColor h-1 rounded-xl mt-2" />
        <div className="flex justify-center gap-2 mt-[2%]">
          <Link to="">
            <div className="flex flex-col flex-wrap items-center gap-2 bg-tertiaryBlueColor p-2 rounded">
              <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
                LinkedIn Profile
              </h2>
              <p className="text-2xl text-primaryBlueColor">
                <FaLinkedin />
              </p>
            </div>
          </Link>
          <Link to="">
            <div className="flex flex-col flex-wrap items-center gap-2 bg-tertiaryBlueColor p-2 rounded">
              <h2 className="text-primaryBlueColor capitalize md:text-xl font-semibold">
                Facebook Profile
              </h2>
              <p className="text-2xl text-primaryBlueColor">
                <FaFacebook />
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
