import * as Yup from "yup";

export const addSchoolValidation = Yup.object({
  schoolName: Yup.string().required("School name is required"),
  schoolLocation: Yup.string().required("School location is required"),
  schoolEmail: Yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  schoolPhone: Yup.string().required("Phone number is required"),
  schoolCategory: Yup.string().required("School category is required"),
  schoolAbout: Yup.string().required("About school is required"),
  schoolVision: Yup.string().required("School vision is required"),
  schoolImage: Yup.string().required("School image is required"),
});
