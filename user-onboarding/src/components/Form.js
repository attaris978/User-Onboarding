import { useState, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import formSchema from "../metaland/formSchema.js";

const Former = styled.form`
  color: red;
`;

const Form = (props) => {
  const [buttonEnabled,setButtonEnabled]=useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });
    useEffect(() => {
      formSchema
        .isValid(formState)
        .then((valid) => setButtonEnabled(valid))
    }, [formState]);

  const onChange = (event) => {
    const { name, type, value, checked } = event.target;
    console.log(checked);
    if (type === "checkbox") setFormState({...formState,[name]:!checked})
    else {
    setFormState({ ...formState, [name]: value });
    }
    //change callback here to update state and validate
  };
  const onSubmit = (event) => {
    //revalidate?
    //post
  };
  return (
    <Former onSubmit={() => onSubmit()}>
      <label htmlFor="formName">Name:</label>
      <input
        type="text"
        name="name"
        id="formName"
        value={formState.name}
        placeholder="Name of User"
        onChange={(e) => onChange(e)}
        maxLength="30"
      />
      <label htmlFor="formEmail">Email:</label>
      <input
        type="email"
        name="email"
        id="formEmail"
        value={formState.email}
        placeholder="User's Email Address"
        onChange={(e) => onChange(e)}
        maxLength="30"
      />
      <label htmlFor="formPassword">Password:</label>
      <input
      type="password"
      name="password"
      id="formPassword"
      value={formState.password}
      placeholder="Enter New User Password"
      onChange={(e) => onChange(e)}
      maxLength="30"
      />
      <label htmlFor="formTerms">I have read and agree to the terms and conditions for usage:</label>
      <input
      type="checkbox"
      name="terms"
      id="formTerms"
      checked={formState.terms}
      onChange={(e) => onChange(e)}
    />
      <button disabled={!buttonEnabled}>Submit!</button>
    </Former>
  );
};
export default Form;
