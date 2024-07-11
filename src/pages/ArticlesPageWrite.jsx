import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineTitle, MdOutlineArticle } from "react-icons/md";
import Button from "../components/button/Button";
import { readingavatar } from "../assets/images";
import TextArea from "../components/TextArea/TextArea";
import FormInput from "../components/formInput/FormInput";
import { useFormik } from "formik";
import { BarLoader } from "react-spinners";
import axios from "axios";
import { articleFormValidation } from "../formvalidations/ArticleFormValidation";

export default function ArticlesPageWrite() {
  const [loading, setLoading] = useState(false);
  const [sendingArticle, setSendingArticle] = useState("");
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      article: "",
    },
    validationSchema: articleFormValidation,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/schools-mine/articles/",
          values,
        );
        console.log("API Response:", response.data);
        setSendingArticle(response.data.data);
        setError("");
      } catch (error) {
        console.error("Error: ", error);
        if (error.response) {
          setError(error.response.data.data);
        } else {
          setError("An issue occurred while submitting your article.");
        }
      } finally {
        setLoading(false);
        setTimeout(() => {
          setSendingArticle("");
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
          <h1 className="font-semibold capitalize text-primaryBlackColor text-xl md:text-2xl">
            <span className="text-primaryBlueColor">0.1</span> Fill in the form
            Below
          </h1>
          <form action="" className="mt-2" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <div className="w-full">
                <FormInput
                  InputType="text"
                  Labelname="Your Name"
                  InputIcon={<FaUserEdit />}
                  InputId="name"
                  InputName="name"
                  placeholderText="Enter your name here"
                  required="required"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  touched={formik.touched.name}
                />
                {formik.errors.name && formik.touched.name && (
                  <small className="text-primaryErrorMessage">
                    {formik.errors.name}
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
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.title}
                  touched={formik.touched.title}
                />
                {formik.errors.title && formik.touched.title && (
                  <small className="text-primaryErrorMessage">
                    {formik.errors.title}
                  </small>
                )}
              </div>
            </div>
            <h1 className="font-semibold capitalize mt-2 text-primaryBlackColor text-xl md:text-2xl ">
              <span className="text-primaryBlueColor">0.2</span> Attach Your
              Article Below
            </h1>
            <div className="flex justify-between">
              <div className="w-full">
                <TextArea
                  Labelname="Article"
                  InputIcon={<MdOutlineArticle />}
                  InputName="article"
                  placeholderText="Enter your article here"
                  InputId="article"
                  required="required"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.article}
                  touched={formik.touched.article}
                />
                {formik.errors.article && formik.touched.article && (
                  <small className="text-primaryErrorMessage">
                    {formik.errors.article}
                  </small>
                )}
              </div>
              <img
                src={readingavatar}
                alt="avatar image"
                className="hidden md:flex w-1/2 -mt-10"
              />
            </div>
            <Button
              title="Submit Article"
              backgroundColor="primaryBlueColor"
              type="submit"
            />
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
