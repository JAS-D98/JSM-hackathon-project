import * as Yup from "yup";

export const contactFormValidation = Yup.object({
  fname: Yup.string().min(3).required("Please Enter First Name"),
  lname: Yup.string().min(3).required("Please Enter Last Name"),
  email: Yup.string().email("Please Enter valid Email").required("Please Enter Your Email"),
  phone: Yup.string().matches(/^\+?\d{10,}$/, "Please enter a valid phone number").required("Please enter phone Number"),
  message: Yup.string().required("Please Enter Your Message"),
});
