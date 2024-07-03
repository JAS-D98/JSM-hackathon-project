import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import FormInput from "../components/formInput/FormInput";
import TextArea from "../components/TextArea/TextArea";
import ContactUsMessage from "../components/contactUsMessage/ContactUsMessage";
import Button from "../components/button/Button";
import { avatar } from "../assets/images";
import { MdOutlineMail, MdOutlinePhoneInTalk, MdOutlineMessage  } from "react-icons/md";

function ContactUsPage() {
  return (
    <div className="px-20">
      <div className="w-full h-96 flex items-center justify-center flex-col">
        <h1 className="font-bold text-3xl md:text-6xl text-primaryBlackColor">
          <span className="text-primaryBlueColor">We would</span> like to hear{" "}
          <span className="text-primaryBlueColor">from you</span>
        </h1>
        <p className="text-md md:text-2xl text-secondaryBlackColor mt-2">
          Call us or Text Us using the details outlined below
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <h1 className="font-semibold capitalize text-primaryBlackColor text-2xl">
            <span className="text-primaryBlueColor">0.1</span> Fill in the form
            Below
          </h1>
          <form action="" className="mt-2">
            <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap justify-between">
              <FormInput
                InputType="text"
                Labelname="First Name"
                InputIcon={<FaUserEdit />}
                InputId="First Name"
                InputName="First Name"
                placeholderText="Enter your first name here"
              />
              <FormInput
                InputType="text"
                Labelname="Last Name"
                InputIcon={<FaUserEdit />}
                InputId="Last Name"
                InputName="Last Name"
                placeholderText="Enter your last name here"
              />
              <FormInput
                InputType="email"
                Labelname="Email Address"
                InputIcon={<MdOutlineMail />}
                InputId="Email Address"
                InputName="Email Address"
                placeholderText="Enter your email address here"
              />
              <FormInput
                InputType="number"
                Labelname="Phone Number"
                InputIcon={<MdOutlinePhoneInTalk />}
                InputId="Phone Number"
                InputName="Phone Number"
                placeholderText="Enter your phone number here e.g +254706..."
              />
            </div>
            <h1 className="font-semibold capitalize mt-2 text-primaryBlackColor text-2xl ">
              <span className="text-primaryBlueColor">0.2</span> Attach Your
              Message Below
            </h1>
            <div className="flex justify-between">
              <TextArea
                Labelname="Message"
                InputIcon={<MdOutlineMessage />}
                InputName="Contact Message"
                placeholderText="Enter your message here"
                InputId="Contact Message"
              />
              <img src={avatar} alt="avatar image" className="hidden md:flex" />
            </div>
            <Button
              title="Send Us Your Message"
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

export default ContactUsPage;
