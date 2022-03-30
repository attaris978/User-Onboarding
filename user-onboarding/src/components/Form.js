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
  
  return (
    <Former>
        <button disabled={formState.submitDisabled}>Submit!</button>
    </Former>
  )
}
export default Form;