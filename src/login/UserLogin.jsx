import React , {useState} from 'react'
import FormInput from './form/FormInput'
import Password from './form/Password'
import { Link } from 'react-router-dom'
import  { forwardRef } from 'react';

const UserLogin = forwardRef((props,ref) => {
 const [signActive,setSignActive] = useState(false)


 const handleSignUp = () =>{
  setSignActive(!signActive)
 }

  return (
   <div  className='w-full h-screen lg:h-[100vh] pt-4'>
         {!signActive ? 
         <div className="flex flex-col w-full  h-[100%] m-auto lg:max-w-6xl">
            <form ref={ref} className="flex flex-col h-[40%] lg:h-[35%] w-[87%] md:w-[45%] lg:w-[30%]  shadow-lg p-1 justify-items-center items-center m-auto rounded bg-white">
                <div className="flex flex-col w-full m-auto">
                        <span className='mx-auto text-3xl mt-2'>Sign In</span>
                        <FormInput placeholder={"Email"} type={"text"} />
                        <Password placeholder={"Password"} />
                        <button className='w-[76%] lg:w-[70%] bg-orange-500 font-medium hover:font-bold rounded p-2 text-white mx-auto'>Sign In</button>
                        <span className='w-[76%] lg:w-70% mx-auto text-center my-2'><Link>forgot password?</Link></span>
                        <span className='w-[76%] lg:w-70% mx-auto text-center'>Not a member?<span onClick={handleSignUp} to="/churchproject/signup" className='text-orange-400 hover:text-orange-500 mx-1 hover:font-semibold hover:cursor-pointer'>Sign Up</span></span>
                </div>
               
            </form>
         </div>
         : 
         <div className="flex flex-col w-full  h-[100%] m-auto lg:max-w-6xl">
            <form ref={ref} className="flex flex-col h-[65%] lg:h-[55%] w-[90%] md:w-[45%] lg:w-[30%]  shadow-lg p-1 justify-items-center items-center m-auto rounded bg-white">
                <div className="flex flex-col w-full m-auto">
                        <span className='mx-auto text-3xl mt-2'>Create Account</span>
                        <FormInput placeholder={"Full Name"} type={"text"} />
                        <FormInput placeholder={"Email"} type={"email"} />
                        <FormInput placeholder={"Phone"} type={"number"} />
                        <Password placeholder={"Password"}/>
                        <Password placeholder={"Confirm Password"}/>
                        <button className='w-[76%] lg:w-[70%] bg-orange-500 text-white font-medium hover:font-bold rounded mx-auto p-2'>CREATE</button>
                        <span className='w-[76%] lg:w-70% mx-auto mt-2 text-center'>Have an Account??<span onClick={handleSignUp} to="/churchproject/signup" className='text-orange-400 hover:text-orange-500 mx-1 hover:font-semibold hover:cursor-pointer'>Sign In</span></span>
                </div>
               
            </form>
         </div>
         }
         </div>
  )
});

export default UserLogin