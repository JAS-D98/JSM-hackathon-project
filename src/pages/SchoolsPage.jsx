import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BarLoader } from "react-spinners";
import Button from "../components/button/Button";
import InputSection from "../components/InputSection/InputSection";

const SchoolsPage = () => {
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFetch = async () => {
    try {
      setLoading(true);
      const schoolUrl = "http://localhost:5000/api/schools-mine/schools";
      const response = await axios.get(schoolUrl);

      if (!response.data.success) {
        setMessage("No schools found at the moment");
      } else {
        const sortedSchools = response.data.data.sort((a, b) =>
          a.school_name.localeCompare(b.school_name)
        );
        setSchools(sortedSchools);
        setFilteredSchools(sortedSchools);
      }
    } catch (error) {
      console.error("Error fetching schools:", error);
      setMessage("A problem occurred with the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "") {
      setFilteredSchools(schools);
    } else {
      const filtered = schools.filter(
        (school) => school.school_category === category
      );
      setFilteredSchools(filtered);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setFilteredSchools(schools);
    } else {
      setSearchLoading(true);
      const filtered = schools.filter((school) =>
        school.school_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSchools(filtered);
      setSearchLoading(false);

      if (filtered.length === 0) {
        alert("No schools found with the given search term.");
      }
    }
  };

  const renderSchoolsByCategory = () => {
    const categories = ["Kindergarten", "Primary", "Highschool", "University"];

    return categories.map((category) => (
      <div key={category}>
        {filteredSchools.some((school) => school.school_category === category) && (
          <>
            <h2 className="text-primaryBlackColor font-bold text-xl md:text-2xl uppercase">
              {category}
            </h2>
            <div className="mt-6 flex flex-col gap-3 md:gap-2 md:flex-row items-center flex-wrap justify-center">
              {filteredSchools
                .filter((school) => school.school_category === category)
                .map((school) => (
                  <div key={school.school_id} className="w-full md:w-[24%]">
                    <Link to={`/schools-section/${school.school_id}`}>
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
          </>
        )}
      </div>
    ));
  };

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
              onClick={() => filterByCategory("Kindergarten")}
            />
            <Button
              title="Primary"
              backgroundColor="primaryBlueColor"
              border="border"
              onClick={() => filterByCategory("Primary")}
            />
            <Button
              title="Highschool"
              backgroundColor="primaryBlueColor"
              border="border"
              onClick={() => filterByCategory("Highschool")}
            />
            <Button
              title="University"
              backgroundColor="primaryBlueColor"
              border="border"
              onClick={() => filterByCategory("University")}
            />
          </div>
          <form onSubmit={handleSearch}>
            <InputSection
              formAction=""
              inputPlaceHolder="Search for a school here"
              btnMarginTop="0"
              btnTitle="Search School"
              btnBackground="primaryBlueColor"
              btnBorder="border"
              btnfuncWord=""
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        {(loading || searchLoading) && (
          <>
            <BarLoader color="#123abc" loading={true} />
            <p>Loading Schools, Please Wait...</p>
          </>
        )}
        {!loading && !searchLoading && schools.length === 0 ? (
          <p>{message}</p>
        ) : (
          renderSchoolsByCategory()
        )}
      </div>
    </div>
  );
};

export default SchoolsPage;
