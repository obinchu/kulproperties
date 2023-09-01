import React from 'react'
import FormInput from './form/FormInput'
import Password from './form/Password'
import { Link } from 'react-router-dom'


const UserSignup = () => {
  return (
   <div className='flex flex-col  w-full h-[80vh] md:h-[100vh] pt-4'>
         <div className="flex flex-col w-full  h-[90%] m-auto md:max-w-6xl">
            <form className="flex flex-col h-[85%] md:h-[65%] w-[80%] md:w-[33%] shadow-lg p-1 justify-items-center items-center m-auto rounded bg-white">
                <div className="flex flex-col w-full m-auto">
                        <span className='mx-auto text-3xl mt-2'>Create Account</span>
                        <FormInput placeholder={"Full Name"} type={"text"} />
                        <FormInput placeholder={"Email"} type={"email"} />
                        <FormInput placeholder={"Phone"} type={"number"} />
                        <Password placeholder={"Password"}/>
                        <Password placeholder={"Confirm Password"}/>
                        <button className='w-[76%] md:w-[70%] hover:bg-orange-500 font-semibold hover:font-bold rounded mx-auto'>CREATE</button>
                        <span className='w-[76%] md:w-70% mx-auto mt-2 text-center'>Have an Account?<Link to="/churchproject/login" className='text-orange-400 hover:text-orange-500 mx-1 hover:font-semibold'>Sign In</Link></span>
                </div>
               
            </form>
         </div>
         </div>
  )
}
export default UserSignup