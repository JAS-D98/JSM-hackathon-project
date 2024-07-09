import * as Yup from "yup";

export const articleFormValidation = Yup.object({
  name: Yup.string().min(3).required("Please Enter Name"),
  title: Yup.string().min(3).required("Please Enter Title"),
  article: Yup.string().required("Please Enter Your Article"),
});
