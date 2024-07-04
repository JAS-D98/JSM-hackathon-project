import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaLinkedin, FaSchool, FaUserEdit } from "react-icons/fa";
import FormInput from "../components/formInput/FormInput";
import TextArea from "../components/TextArea/TextArea";
import ContactUsMessage from "../components/contactUsMessage/ContactUsMessage";
import Button from "../components/button/Button";
import { avatar } from "../assets/images";
import {
  MdOutlineMail,
  MdOutlinePhoneInTalk,
  MdOutlineMessage,
  MdOutlineFacebook,
} from "react-icons/md";
import { FaBookBookmark, FaLocationPin } from "react-icons/fa6";

function AddSchoolsPage() {
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
      <div className="flex flex-col-reverse md:flex-row">
        <div className="w-full md:w-2/3">
          <h1 className="font-semibold capitalize text-primaryBlackColor text-2xl">
            <span className="text-primaryBlueColor">0.1</span> school details
          </h1>
          <form action="" className="mt-2">
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <FormInput
                InputType="text"
                Labelname="School Name"
                InputIcon={<FaSchool />}
                InputId="School Name"
                InputName="School Name"
                placeholderText="Enter the name of your school here"
              />
              <FormInput
                InputType="text"
                Labelname="School Location"
                InputIcon={<FaLocationPin />}
                InputId="School Location"
                InputName="School Location"
                placeholderText="Enter the location of your school here"
              />
              <FormInput
                InputType="email"
                Labelname="Email Address"
                InputIcon={<MdOutlineMail />}
                InputId="Email Address"
                InputName="Email Address"
                placeholderText="Enter email address for the school here"
              />
              <FormInput
                InputType="number"
                Labelname="Phone Number"
                InputIcon={<MdOutlinePhoneInTalk />}
                InputId="Phone Number"
                InputName="Phone Number"
                placeholderText="Enter schools phone number here e.g +254706..."
              />
              <FormInput
                InputType="text"
                Labelname="LinkedIn"
                InputIcon={<FaLinkedin/>}
                InputId="LinkedIn"
                InputName="LinkedIn Link(Optional)"
                placeholderText="Enter schools linkedIn link here"
              />
              <FormInput
                InputType="text"
                Labelname="Facebook"
                InputIcon={<MdOutlineFacebook />}
                InputId="Facebook"
                InputName="Facebook Link(Optional)"
                placeholderText="Enter schools facebook link here"
              />
            </div>
            <h1 className="font-semibold capitalize mt-2 text-primaryBlackColor text-2xl ">
              <span className="text-primaryBlueColor">0.2</span> About the school
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
              <TextArea
                Labelname="About"
                InputIcon={<MdOutlineMessage />}
                InputName="About School"
                placeholderText="Give a brief description of the school"
                InputId="About"
              />
              <TextArea
                Labelname="Vision"
                InputIcon={<FaBookBookmark />}
                InputName="School Vision"
                placeholderText="Enter a the schools vision"
                InputId="School Vision"
              />
            </div>
            <Button
              title="Register School"
              backgroundColor="primaryBlueColor"
              marginTop="4"
            />
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

export default AddSchoolsPage;
