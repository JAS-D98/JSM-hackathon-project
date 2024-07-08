import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineTitle, MdOutlineMessage } from "react-icons/md";
import Button from "../components/button/Button";
import { readingavatar } from "../assets/images";
import TextArea from "../components/TextArea/TextArea";
import FormInput from "../components/formInput/FormInput";
import { useFormik } from 'formik';
import { BarLoader } from 'react-spinners';
import axios from 'axios';
import { articleFormValidation } from "../formvalidations/articleFormValidation";

const initialValues = {
  name: "",
  title: "",
  article: ""
};

export default function ArticlesPageWrite() {
  const [sendingArticle, setSendingArticle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues: initialValues,
    validationSchema: articleFormValidation,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:5000/api/schools-mine/articles',values);
        setSendingArticle(response.data.data);
        setError("");
        setLoading(false);
        setTimeout(() => {
        setSendingArticle("");
        }, 5000);
      } catch (error) {
        if (error.response) {
          setError(error.response.data.data);
        } else {
          setError("An issue occurred while submitting your article.");
        }
        setSendingArticle("");
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    },
  });

  return (
    <>
      <div className="px-10 md:px-20">
        <div className="w-full h-[80vh] flex items-center justify-center flex-col">
          <div className="bg-primaryBlueColor w-full rounded-xl text-center p-4 flex flex-col items-center">
            <h1 className="font-bold text-2xl md:text-6xl text-primaryWhiteColor capitalize text-center">
              Inspire students, teachers and parents with your article
            </h1>
          </div>
          <img
            src={readingavatar}
            alt="avatar image"
            className="md:hidden flex w-1/2"
          />
        </div>
        <h1 className="text-2xl md:text-4xl text-primaryBlueColor font-bold text-center mb-6 uppercase">
          We would <span className="text-primaryBlackColor">l🖤ve to read</span>{" "}
          your article
        </h1>
      </div>
      <div className="flex flex-col md:flex-row px-10 md:px-20">
        <div className="w-full md:w-2/3 mx-auto">
          <h1 className="font-semibold capitalize text-primaryBlackColor text-2xl">
            <span className="text-primaryBlueColor">0.1</span> Fill in the form
            Below
          </h1>
          <form action="" className="mt-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <div className="w-full">
                <FormInput
                  InputType="name"
                  Labelname="Your Name"
                  InputIcon={<FaUserEdit />}
                  InputId="name"
                  InputName="name"
                  placeholderText="Enter your name here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  touched={touched.name}
                />
                {errors.name && touched.name && (
                  <small className="text-primaryErrorMessage">
                    {errors.name}
                  </small>
                )}
              </div>
              <div className="w-full">
                <FormInput
                  InputType="text"
                  Labelname="Article Title"
                  InputIcon={<MdOutlineTitle />}
                  InputId="title"
                  InputName="title"
                  placeholderText="Enter your title here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  touched={touched.title}
                />
                {errors.title && touched.title && (
                  <small className="text-primaryErrorMessage">
                    {errors.title}
                  </small>
                )}
              </div>
            </div>
            <h1 className="font-semibold capitalize mt-2 text-primaryBlackColor text-2xl ">
              <span className="text-primaryBlueColor">0.2</span> Attach Your
              Article Below
            </h1>
            <div className="flex justify-between">
              <div className="w-full">
                <TextArea
                  Labelname="Article"
                  InputIcon={<MdOutlineMessage />}
                  InputName="article"
                  placeholderText="Enter your article here"
                  InputId="article"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.article}
                  error={errors.article}
                  touched={touched.article}
                />
                {errors.article && touched.article && (
                  <small className="text-primaryErrorMessage">
                    {errors.article}
                  </small>
                )}
              </div>
              <img
                src={readingavatar}
                alt="avatar image"
                className="hidden md:flex w-1/2 -mt-10"
              />
            </div>
            <Button title="Submit Article" backgroundColor="primaryBlueColor" />
            {sendingArticle && (
              <p className="text-successColorCode text-sm md:text-xl">
                {sendingArticle}
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
    </>
  );
}
