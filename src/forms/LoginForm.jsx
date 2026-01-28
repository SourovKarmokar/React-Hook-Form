import React from 'react'
import Fieldset from "../components/FieldSet"
import Field from "../components/Field"

const LoginForm = () => {
  return (
    <form >
        <Fieldset label="Enter Login Details">
            <Field label="Email">           <input
               className='p-2 border box-border w-[300px] rounded-md border-gray-200'
               type="email"
               name="email"
               id ="email"
               placeholder ="Enter Email Address"
               />    
            </Field>

            <Field label="Password">           <input
               className='p-2 border box-border w-[300px] rounded-md border-gray-200'
               type="password"
               name="password"
               id ="password"
               placeholder ="Enter Password"
               />    
            </Field>
        </Fieldset>
    </form>
  )
}

export default LoginForm
