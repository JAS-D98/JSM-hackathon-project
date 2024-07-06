import React from 'react'
import FormInput from '../../components/formInput/FormInput'
import { MdOutlineEmail, MdOutlinePassword, MdOutlinePerson } from 'react-icons/md'
import { signUpAuthenticationValidation } from '../../formvalidations/authenticationValidation';
import { useFormik } from 'formik';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

const initialValues = {
    name:"",
    email: "",
    password:""
  };

export default function SignUp() {
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema:signUpAuthenticationValidation,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className='min-h-[100vh] w-full px-10 py-20 flex items-center justify-center'>
        <div className='flex items-center justify-center w-full md:w-[70%] min-h-[70vh] mx-auto shadow-2xl rounded overflow-hidden'>
            <div className='w-full h-full flex flex-col items-center justify-between px-2'>
                <h1 className='text-primaryBlackColor font-bold text-xl md:text-2xl capitalize'>Create Account</h1>
                <form action="" onSubmit={handleSubmit} className='w-full'>
                <div className="w-full">
                <FormInput
                  InputType="name"
                  Labelname="Your Name"
                  InputIcon={<MdOutlinePerson />}
                  InputId="name"
                  InputName="name"
                  placeholderText="Enter your name here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <small className="text-primaryErrorMessage">
                    {errors.name}
                  </small>
                )}
              </div>
                <div className="w-full">
                <FormInput
                  InputType="email"
                  Labelname="Your Email"
                  InputIcon={<MdOutlineEmail />}
                  InputId="email"
                  InputName="email"
                  placeholderText="Enter your email address here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <small className="text-primaryErrorMessage">
                    {errors.email}
                  </small>
                )}
              </div>
                <div className="w-full">
                <FormInput
                  InputType="password"
                  Labelname="Your Password"
                  InputIcon={<MdOutlinePassword />}
                  InputId="password"
                  InputName="password"
                  placeholderText="Enter your password here"
                  required="required"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <small className="text-primaryErrorMessage">
                    {errors.password}
                  </small>
                )}
              </div>
             <div className='w-full flex gap-4 flex-col items-center justify-center'>
             <Button title="Sign Up" backgroundColor="secondaryBlackColor"/>
             <p className='md:hidden'>Already have an account? <Link to="/login" className='text-md font-semibold underline'>Log In</Link></p>
             </div>
                </form>
            </div>
            <div className='w-10/12 hidden md:flex min-h-[70vh] bg-primaryBlueColor flex-col items-center justify-center p-2 text-center text-primaryWhiteColor gap-3 rounded-tr-2xl rounded-br-2xl'>
                <h1 className='text-2xl text-primaryWhiteColor md:text-4xl font-bold'>Hello, Friend 👋</h1>
                <p className='text-tertiaryBlueColor  gap-4 text-sm md:text-md'>We are Schools Mine, your trusted schools resource. Explore with us. <span className='font-semibold text-md'>Let's Get Started</span></p>
                <Link to="/login"><Button title="Log In" border="border"/></Link>
            </div>
        </div>
    </div>
  )
}