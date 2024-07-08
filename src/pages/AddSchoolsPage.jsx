import React, { useState } from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import FormInput from "../components/formInput/FormInput";
import Button from "../components/button/Button";
import { addSchoolValidation } from "../formvalidations/addSchoolFormValidation";
import TextArea from "../components/TextArea/TextArea";

const initialValues = {
  schoolName: "",
  schoolLocation: "",
  emailAddress: "",
  phoneNumber: "",
  linkedIn: "",
  facebook: "",
  aboutSchool: "",
  schoolVision: "",
  image: null,
  schoolCategory: "",
};

const categories = [
  "University",
  "High School",
  "Primary School",
  "Kindergarten",
];

export const AddSchoolsPage=()=> {
  const [imageUrl, setImageUrl] = useState("");

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: addSchoolValidation,
      onSubmit: async (values) => {
        try {
          const storageRef = firebase.storage().ref();
          const fileRef = storageRef.child(`images/${values.image.name}`);
          await fileRef.put(values.image);

          const url = await fileRef.getDownloadURL();
          setImageUrl(url);

          console.log("Form values with image URL:", {
            ...values,
            imageUrl: url,
          });
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      },
    });

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    values.image = file;
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

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
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center gap-2 bg-tertiaryBlueColor p-2 md:bg-primaryWhiteColor">
          <p className="text-xl md:text-2xl font-semibold text-secondaryBlackColor">
            Upload Image of School Here
          </p>
          <div
            {...getRootProps()}
            className={`border-2 md:h-48 text-primaryBlackColor md:bg-primaryBlueColor md:text-primaryWhiteColor border-dashed rounded p-4 text-center ${
              isDragActive
                ? "border-primaryBlueColor text-primaryBlackColor"
                : "border-primaryWhiteColor text-primaryBlackColor"
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-primaryWhiteColor">Drop your image here ...</p>
            ) : (
              <p>
                Drag 'and' drop school image here, <br /> or{" "}
                <span className="text-primaryBlackColor">click here</span> to
                select image
              </p>
            )}
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="font-semibold capitalize text-primaryBlackColor text-2xl">
            <span className="text-primaryBlueColor">0.1</span> school details
          </h1>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="School Name"
                  InputId="schoolName"
                  InputName="schoolName"
                  placeholderText="Enter the name of your school here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.schoolName}
                />
                {errors.schoolName && touched.schoolName && (
                  <small className="text-primaryErrorMessage">
                    {errors.schoolName}
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.schoolLocation}
                />
                {errors.schoolLocation && touched.schoolLocation && (
                  <small className="text-primaryErrorMessage">
                    {errors.schoolLocation}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="email"
                  Labelname="Email Address"
                  InputId="emailAddress"
                  InputName="emailAddress"
                  placeholderText="Enter email address for the school here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emailAddress}
                />
                {errors.emailAddress && touched.emailAddress && (
                  <small className="text-primaryErrorMessage">
                    {errors.emailAddress}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="number"
                  Labelname="Phone Number"
                  InputId="phoneNumber"
                  InputName="phoneNumber"
                  placeholderText="Enter school's phone number here e.g +254706..."
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <small className="text-primaryErrorMessage">
                    {errors.phoneNumber}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="LinkedIn"
                  InputId="linkedIn"
                  InputName="linkedIn"
                  placeholderText="Enter school's LinkedIn link here"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.linkedIn}
                />
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="Facebook"
                  InputId="facebook"
                  InputName="facebook"
                  placeholderText="Enter school's Facebook link here"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.facebook}
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
                    value={values.schoolCategory}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  {errors.schoolCategory && touched.schoolCategory && (
                    <small className="text-primaryErrorMessage">
                      {errors.schoolCategory}
                    </small>
                  )}
                </div>
              </div>
            </div>
            <h1 className="font-semibold capitalize mt-2 text-primaryBlackColor text-2xl">
              <span className="text-primaryBlueColor">0.2</span> About the
              school
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[48%]">
                <TextArea
                  Labelname="About"
                  InputId="aboutSchool"
                  InputName="aboutSchool"
                  placeholderText="Give a brief description of the school"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.aboutSchool}
                />
                {errors.aboutSchool && touched.aboutSchool && (
                  <small className="text-primaryErrorMessage">
                    {errors.aboutSchool}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <TextArea
                  Labelname="Vision"
                  InputId="schoolVision"
                  InputName="schoolVision"
                  placeholderText="Enter the school's vision"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.schoolVision}
                />
                {errors.schoolVision && touched.schoolVision && (
                  <small className="text-primaryErrorMessage">
                    {errors.schoolVision}
                  </small>
                )}
              </div>
            </div>
            <Button
              title="Register School"
              backgroundColor="primaryBlueColor"
              marginTop="4"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSchoolsPage;
