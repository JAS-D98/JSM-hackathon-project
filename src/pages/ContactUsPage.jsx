import React, { useState } from "react";
import axios from 'axios'; // Import Axios
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import FormInput from "../components/formInput/FormInput";
import TextArea from "../components/TextArea/TextArea";
import ContactUsMessage from "../components/contactUsMessage/ContactUsMessage";
import Button from "../components/button/Button";
import { avatar } from "../assets/images";
import {
  MdOutlineMail,
  MdOutlinePhoneInTalk,
  MdOutlineMessage,
} from "react-icons/md";
import { useFormik } from "formik";
import { contactFormValidation } from "../formvalidations/ContactFormValidation.jsx";
import { BarLoader } from 'react-spinners';

const initialValues = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  message: "",
};

function ContactUsPage() {
  const [sentMessage, setSentMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactFormValidation,
      onSubmit: async (values) => {
        try {
          setLoading(true);
          const response = await axios.post('http://localhost:5000/api/schools-mine/contacts', values);
          setSentMessage(response.data.data);
          setError("");
          setLoading(false);
          setTimeout(() => {
            setSentMessage("");
          }, 5000);
        } catch (error) {
          if (error.response) {
            setError(error.response.data.data);
          } else {
            setError("There was a problem when submitting your form");
          }
          setSentMessage("");
          setLoading(false);
          setTimeout(() => {
            setError("");
          }, 5000); 
        }
      },
    });

  return (
    <div className="px-10 md:px-20">
      <div className="w-full h-96 flex items-center justify-center flex-col">
        <h1 className="font-bold text-3xl md:text-6xl text-primaryBlackColor text-center">
          <span className="text-primaryBlueColor">We would</span> like to hear{" "}
          <span className="text-primaryBlueColor">from you</span>
        </h1>
        <p className="text-md md:text-2xl text-secondaryBlackColor mt-2 text-center">
          Call us or Text Us using the details outlined below
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <h1 className="font-semibold capitalize text-primaryBlackColor text-xl md:text-2xl">
            <span className="text-primaryBlueColor">0.1</span> Fill in the form
            Below
          </h1>
          <form action="" className="mt-2" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="First Name"
                  InputIcon={<FaUserEdit />}
                  InputId="fname"
                  InputName="fname"
                  placeholderText="Enter your first name here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fname}
                />
                {errors.fname && touched.fname && (
                  <small className="text-primaryErrorMessage">
                    {errors.fname}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="text"
                  Labelname="Last Name"
                  InputIcon={<FaUserEdit />}
                  InputId="lname"
                  InputName="lname"
                  placeholderText="Enter your last name here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lname}
                />
                {errors.lname && touched.lname && (
                  <small className="text-primaryErrorMessage">
                    {errors.lname}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="email"
                  Labelname="Email Address"
                  InputIcon={<MdOutlineMail />}
                  InputId="email"
                  InputName="email"
                  placeholderText="Enter your email address here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <small className="text-primaryErrorMessage">
                    {errors.email}
                  </small>
                )}
              </div>
              <div className="w-full md:w-[48%]">
                <FormInput
                  InputType="tel"
                  Labelname="Phone Number"
                  InputIcon={<MdOutlinePhoneInTalk />}
                  InputId="phone"
                  InputName="phone"
                  placeholderText="Enter your phone number here e.g +254706..."
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                />
                {errors.phone && touched.phone && (
                  <small className="text-primaryErrorMessage">
                    {errors.phone}
                  </small>
                )}
              </div>
            </div>
            <h1 className="font-semibold capitalize mt-2 text-primaryBlackColor text-xl md:text-2xl ">
              <span className="text-primaryBlueColor">0.2</span> Attach Your
              Message Below
            </h1>
            <div className="flex justify-between">
              <div className="w-full">
                <TextArea
                  Labelname="Message"
                  InputIcon={<MdOutlineMessage />}
                  InputName="message"
                  placeholderText="Enter your message here"
                  InputId="message"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  error={errors.message}
                  touched={touched.message}
                />
                {errors.message && touched.message && (
                  <small className="text-primaryErrorMessage">
                    {errors.message}
                  </small>
                )}
              </div>
              <img src={avatar} alt="avatar image" className="hidden md:flex" />
            </div>
            <Button
              title="Send Us Your Message"
              backgroundColor="primaryBlueColor"
              type="submit"
              />
              {sentMessage && <p className="text-successColorCode text-sm md:text-xl">{sentMessage}</p>}
              {error && <p className="text-primaryErrorMessage text-sm md:text-xl">{error}</p>}
              {loading && (
              <div className='loading-container'>
                <p className='text-primaryBlackColor'>Submitting, Please Wait...</p>
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

        <div className="w-full mt-8 md:mt-0 md:w-1/3 h-full text-center flex flex-col justify-center items-center text-secondaryBlackColor">
          <h1 className="text-2xl font-semibold text-primaryBlackColor">
            CONTACT US
          </h1>
          <p className=" text-secondaryBlackColor text-center">
            Alternatively you can reach us through <br /> the details below
          </p>
          <img src={avatar} alt="avatar image" className="flex md:hidden" />
          <ContactUsMessage title="Office Line" Message="+254706235398" />
          <ContactUsMessage
            title="Whats App"
            Message="+254706235398"
            Icon={<IoLogoWhatsapp />}
          />
          <ContactUsMessage title="Email Us" Message="schoolmines@gmail.com" />
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
