import * as Yup from "yup";

const formSchema = Yup.object().shape({
  name: Yup.string("You must enter a valid name string")
    .trim()
    .required("Please enter the new user's name"),
  email: Yup.string("You must enter a valid email address")
    .trim()
    .email("You must enter a valid email address")
    .required("Please enter the new user's email address"),
  password: Yup.string("Enter a valid password string")
    .trim()
    .required("ou must enter a password"),
  terms: Yup.boolean()
    .required("You must accept the terms and conditions in order to continue"),
  submitDisabled: Yup.boolean()

});
export default formSchema;
