import * as Yup from "yup";

export const articleFormValidation= Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email address is required"),
  title: Yup.string().required("Article title is required"),
  article: Yup.string().required("Article is required"),
});
