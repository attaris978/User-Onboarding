import { useState, useEffect } from "react";
import styled from "styled-components";
import * as Yup from "yup";
import formSchema from "../metaland/formSchema.js";
import axios from "axios";

const Former = styled.form`
  color: red;
`;

const Form = (props) => {
  const { addUser } = props;
  const [buttonEnabled, setButtonEnabled] = useState(false);
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
    formSchema.isValid(formState).then((valid) => setButtonEnabled(valid));
  }, [formState]);

  const onChange = (event) => {
    const { name, type, value, checked } = event.target;
    const viableValue = type === "checkbox" ? checked : value;

    setFormState({ ...formState, [name]: viableValue });

    Yup.reach(formSchema, [name])
      .validate(viableValue)
      .then((valid) => setFormError({ ...formError, [name]: "" }))
      .catch(err => setFormError({...formError, [name]:err.errors[0]}))
  };
  const onSubmit = (event) => {
    event.preventDefault();
    fetch("https://reqres.in/api/users", {
      method: "POST",
      body: JSON.stringify(formState),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      // axios.post("https://reqres.in/api/users",formState)
      // .then(response => console.log(response));
      .then((response) => response.json())
      .then((json) => addUser(json))
      .catch((err) => console.error(err));
  };
  return (
    <Former onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="formName">Name:</label>
      <input
        type="text"
        name="name"
        id="formName"
        value={formState.name}
        placeholder="Name of User"
        onChange={(e) => onChange(e)}
        maxLength="30"
        data-cy="nameInput"
      />
      {formError.name.length > 0 ? <p>{formError.name}</p> : null}
      <label htmlFor="formEmail">Email:</label>
      <input
        type="email"
        name="email"
        id="formEmail"
        value={formState.email}
        placeholder="User's Email Address"
        onChange={(e) => onChange(e)}
        maxLength="30"
        data-cy="emailInput"
      />
      {formError.email.length > 0 ? <p>{formError.email}</p> : null}
      <label htmlFor="formPassword">Password:</label>
      <input
        type="password"
        name="password"
        id="formPassword"
        value={formState.password}
        placeholder="Enter New User Password"
        onChange={(e) => onChange(e)}
        maxLength="30"
        data-cy="passwordInput"
      />
      <label htmlFor="formTerms">
        I have read and agree to the terms and conditions for usage:
      </label>
      <input
        type="checkbox"
        name="terms"
        id="formTerms"
        checked={formState.terms}
        onChange={(e) => onChange(e)}
        data-cy="termsInput"
      />
      <button disabled={!buttonEnabled} data-cy="submitButton">Submit!</button>
    </Former>
  );
};
export default Form;
