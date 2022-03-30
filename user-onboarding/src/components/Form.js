import {useState,useEffect} from 'react';
import {styled} from 'styled-components';
import * as Yup from 'yup';
import formSchema from './metaland/formSchema.js';

const Former = styled.form`
`

const Form = (props) => {
  const [formState,setFormState] = useState({
      name:"",
      email:"",
      password:"",
      terms:"",
      submitDisabled:true
  })
  const [formError,setFormError] = useState({
    name:"",
    email:"",
    password:"",
    terms:""
  })
  useEffect(() => {
      formSchema.isValid(formState)
      .then(valid => setFormState({...formState,submitDisabled:!valid}))
  },[formState]);

  const onChange = (event) => {
      const {name,type,value,checked} = event.target;
      //change callback here to update state and validate
  }
const onSubmit = (event) => {
    //revalidate?
    //post
}
  return (
    <Former onSubmit={() => onSubmit()}>
        <label for="formName">Name:</label>

        <button disabled={formState.submitDisabled}>Submit!</button>
    </Former>
  )
}
export default Form;