import * as Yup from "yup";

export const loginAuthenticationValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter valid Email")
    .required("Please Enter Your Email"),
    password: Yup.string()
    .matches(/^\+?\d{8,}$/, "Password should not be less than 8 characters")
    .required("Please enter password"),
});


export const signUpAuthenticationValidation = Yup.object({
  name: Yup.string().min(3).required("Please Enter Name"),
  email: Yup.string()
    .email("Please Enter valid Email")
    .required("Please Enter Your Email"),
    password: Yup.string()
    .matches(/^\+?\d{8,}$/, "Password should not be less than 8 characters")
    .required("Please enter password"),
});