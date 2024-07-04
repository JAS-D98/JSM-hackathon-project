import React from "react";
import { MdOutlineMail, MdOutlineMessage } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import Button from "../components/button/Button";
import { readingavatar } from "../assets/images";
import TextArea from "../components/TextArea/TextArea";
import FormInput from "../components/formInput/FormInput";

export default function ArticlesPageWrite() {
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
          <form action="" className="mt-2">
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <FormInput
                InputType="text"
                Labelname="Name"
                InputIcon={<FaUserEdit />}
                InputId="Name"
                InputName="Name"
                placeholderText="Enter your name here"
              />
              {/* <FormInput
                InputType="text"
                Labelname="Last Name"
                InputIcon={<FaUserEdit />}
                InputId="Last Name"
                InputName="Last Name"
                placeholderText="Enter your last name here"
              /> */}
              <FormInput
                InputType="email"
                Labelname="Email Address"
                InputIcon={<MdOutlineMail />}
                InputId="Email Address"
                InputName="Email Address"
                placeholderText="Enter your email address here"
              />
            </div>
            <h1 className="font-semibold capitalize mt-2 text-primaryBlackColor text-2xl ">
              <span className="text-primaryBlueColor">0.2</span> Attach Your
              Article Below
            </h1>
            <div className="flex justify-between">
              <TextArea
                Labelname="Article"
                InputIcon={<MdOutlineMessage />}
                InputName="Article Message"
                placeholderText="Type your article here"
                InputId="Article Message"
              />
              <img
                src={readingavatar}
                alt="avatar image"
                className="hidden md:flex w-1/2 -mt-10"
              />
            </div>
            <Button title="Submit Article" backgroundColor="primaryBlueColor" />
          </form>
        </div>
      </div>
    </>
  );
}
