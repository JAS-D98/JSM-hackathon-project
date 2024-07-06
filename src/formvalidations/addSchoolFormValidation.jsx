import * as Yup from "yup";

export const addSchoolValidation = Yup.object({
    schoolName: Yup.string().required("School name is required"),
    schoolLocation: Yup.string().required("School location is required"),
    emailAddress: Yup.string()
      .email("Invalid email format")
      .required("Email address is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    aboutSchool: Yup.string().required("About school is required"),
    schoolVision: Yup.string().required("School vision is required"),
  });