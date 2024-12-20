import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import FormInput from "../components/formInput/FormInput";
import Button from "../components/button/Button";
import { addSchoolValidation } from "../formvalidations/addSchoolFormValidation";
import TextArea from "../components/TextArea/TextArea";
import { storage } from "../configuration/FireBase.configuration";
import { FaMessage, FaSchool } from "react-icons/fa6";
import { BarLoader } from "react-spinners";

const initialValues = {
  schoolName: "",
  schoolLocation: "",
  schoolEmail: "",
  schoolPhone: "",
  schoolLinkedIn: "",
  schoolFacebook: "",
  schoolAbout: "",
  schoolVision: "",
  schoolImage: null,
  schoolCategory: "",
};

const categories = [
  "University",
  "High School",
  "Primary School",
  "Kindergarten",
];

const AddSchoolsPage = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadingSchool, setUploadingSchool] = useState("");
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues,
    validationSchema: addSchoolValidation,
    onSubmit: async (values) => {
      if (values.schoolImage) {
        const imageRef = ref(storage, `images/${values.schoolImage.name}`);
        await uploadBytes(imageRef, values.schoolImage);
        const schoolUrl = await getDownloadURL(imageRef);
        const formData = {
          ...values,
          schoolImage: schoolUrl,
        };
        try {
          setLoading(true);
          const response = await axios.post(
            "http://localhost:5000/api/schools-mine/schools/",
            formData,
          );
          console.log("API Response:", response.data);
          setUploadingSchool(response.data.data);
          setLoading(false);
          setError("");
          console.log(response.data);
        } catch (error) {
          console.error("Error: ", error);
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError("An issue occurred while submitting your article.");
          }
        } finally {
          setLoading(false);
          setTimeout(() => {
            setUploadingSchool("");
            setError("");
          }, 5000);
        }
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("schoolImage", file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="px-10 md:px-20">
      <div className="w-full h-96 flex items-center justify-center flex-col">
        <h1 className="font-bold text-3xl md:text-6xl text-primaryBlackColor text-center">
          <span className="text-primaryBlueColor">Register</span> your school{" "}
          <span className="text-primaryBlueColor">with us</span>
        </h1>
        <p className="text-md md:text-2xl text-secondaryBlackColor mt-2 text-center">
          At the comfort of your home, book a space with us
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 justify-center">
        <div className="w-full md:w-2/3">
          <h1 className="font-semibold capitalize text-primaryBlackColor text-2xl">
            <span className="text-primaryBlueColor">0.1</span> school details
          </h1>
          <form className="mt-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="School Name"
                  InputId="schoolName"
                  InputName="schoolName"
                  placeholderText="Enter the name of your school here"
                  required="required"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.schoolName}
                />
                {formik.errors.schoolName && formik.touched.schoolName && (
                  <small className="text-primaryErrorMessage">
                    {formik.errors.schoolName}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="School Location"
                  InputId="schoolLocation"
                  InputName="schoolLocation"
                  placeholderText="Enter the location of your school here"
                  required="required"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.schoolLocation}
                />
                {formik.errors.schoolLocation &&
                  formik.touched.schoolLocation && (
                    <small className="text-primaryErrorMessage">
                      {formik.errors.schoolLocation}
                    </small>
                  )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="email"
                  Labelname="Email Address"
                  InputId="schoolEmail"
                  InputName="schoolEmail"
                  placeholderText="Enter email address for the school here"
                  required="required"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.schoolEmail}
                />
                {formik.errors.schoolEmail && formik.touched.schoolEmail && (
                  <small className="text-primaryErrorMessage">
                    {formik.errors.schoolEmail}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="Phone Number"
                  InputId="schoolPhone"
                  InputName="schoolPhone"
                  placeholderText="Enter school's phone number here e.g +254706..."
                  required="required"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.schoolPhone}
                />
                {formik.errors.schoolPhone && formik.touched.schoolPhone && (
                  <small className="text-primaryErrorMessage">
                    {formik.errors.schoolPhone}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="LinkedIn"
                  InputId="schoolLinkedIn"
                  InputName="schoolLinkedIn"
                  placeholderText="Enter school's LinkedIn link here"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.schoolLinkedIn}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="Facebook"
                  InputId="schoolFacebook"
                  InputName="schoolFacebook"
                  placeholderText="Enter school's Facebook link here"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.schoolFacebook}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <div className="flex flex-col">
                  <label
                    htmlFor="schoolCategory"
                    className="font-medium text-xl text-primaryBlackColor"
                  >
                    School Category:
                  </label>
                  <select
                    id="schoolCategory"
                    name="schoolCategory"
                    value={formik.values.schoolCategory}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border-2 border-primaryWhiteColor text-primaryWhiteColor rounded-md p-2 bg-primaryBlueColor"
                    required
                  >
                    <option value="">Select School Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  {formik.errors.schoolCategory &&
                    formik.touched.schoolCategory && (
                      <small className="text-primaryErrorMessage">
                        {formik.errors.schoolCategory}
                      </small>
                    )}
                </div>
              </div>
              <div className="w-full md:w-[48%]">
                <div className="flex flex-col items-start justify-start w-full h-full">
                  <label
                    htmlFor="schoolImage"
                    className="font-medium text-xl text-primaryBlackColor"
                  >
                    School Image:
                  </label>
                  <input
                    id="schoolImage"
                    name="schoolImage"
                    type="file"
                    onChange={handleImageChange}
                    onBlur={formik.handleBlur}
                    className="border-2 border-primaryWhiteColor text-primaryWhiteColor rounded-md p-2 bg-primaryBlueColor w-full h-full"
                  />
                  {formik.errors.schoolImage && formik.touched.schoolImage && (
                    <small className="text-primaryErrorMessage">
                      {formik.errors.schoolImage}
                    </small>
                  )}
                  {imagePreview && (
                    <div className="w-48 h-48 overflow-hidden object-cover">
                      <img
                        src={imagePreview}
                        alt="School Preview"
                        className="mt-2 w-full h-full hidden md:flex"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <TextArea
                InputIcon={<FaMessage />}
                Labelname="About School"
                InputId="schoolAbout"
                InputName="schoolAbout"
                placeholderText="Enter a brief description about the school here"
                required="required"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.schoolAbout}
              />
              {formik.errors.schoolAbout && formik.touched.schoolAbout && (
                <small className="text-primaryErrorMessage">
                  {formik.errors.schoolAbout}
                </small>
              )}
            </div>
            <div className="mt-4">
              <TextArea
                InputIcon={<FaSchool />}
                Labelname="School Vision"
                InputId="schoolVision"
                InputName="schoolVision"
                placeholderText="Enter school's vision statement here"
                required="required"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.schoolVision}
              />
              {formik.errors.schoolVision && formik.touched.schoolVision && (
                <small className="text-primaryErrorMessage">
                  {formik.errors.schoolVision}
                </small>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <Button
                type="submit"
                title="Submit School Details"
                backgroundColor="primaryBlueColor"
              />
            </div>
            {uploadingSchool && (
              <p className="text-successColorCode text-sm md:text-xl">
                {uploadingSchool}
              </p>
            )}
            {error && (
              <p className="text-primaryErrorMessage text-sm md:text-xl">
                {error}
              </p>
            )}
            {loading && (
              <div className="loading-container flex items-center justify-center flex-col gap-1">
                <p className="text-primaryBlackColor">
                  Sending Article, Please Wait...
                </p>
                <BarLoader
                  height={4}
                  width={100}
                  color="#87CEEB"
                  loading={true}
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSchoolsPage;
