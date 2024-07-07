import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/formInput/FormInput';
import { MdOutlineEmail, MdOutlinePassword } from 'react-icons/md';
import { loginAuthenticationValidation } from '../../formvalidations/authenticationValidation';
import { useFormik } from 'formik';
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BarLoader } from 'react-spinners';

const initialValues = {
  email: "",
  password: ""
};

export default function Login() {
  const navigate = useNavigate();
  const [userLoginMessage, setUserLoginMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginAuthenticationValidation,
      onSubmit: async (values) => {
        try {
          setLoading(true);
          const response = await axios.post('http://localhost:5000/authentication/login', values);
          setUserLoginMessage(response.data.message);
          setError("");
          setLoading(false);
          navigate('/');
        } catch (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError("An issue occurred while logging into your account. Please try again.");
          }
          setUserLoginMessage("");
          setLoading(false);
        }
      },
    });

  return (
    <div className='min-h-[100vh] w-full px-10 py-20 flex items-center justify-center'>
      <div className='flex items-center justify-center w-full md:w-[70%] min-h-[70vh] mx-auto shadow-2xl rounded overflow-hidden'>
        <div className='w-full h-full flex flex-col items-center justify-between px-2'>
          {userLoginMessage && <p className="text-successColorCode text-sm md:text-xl text-center">{userLoginMessage}</p>}
          {error && <p className="text-primaryErrorMessage text-sm md:text-xl text-center">{error}</p>}
          {loading && (
            <div className='loading-container flex items-center justify-center flex-col gap-1'>
              <p className='text-primaryBlackColor'>Logging in, Please Wait...</p>
              <BarLoader
                height={4}
                width={100}
                color="#87CEEB"
                loading={true}
              />
            </div>
          )}
          <h1 className='text-primaryBlackColor font-bold text-xl md:text-2xl capitalize'>Sign In</h1>
          <form onSubmit={handleSubmit} className='w-full'>
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
            <div className='w-full flex flex-col gap-4 items-center justify-center'>
              <Button title="Log In" backgroundColor="secondaryBlackColor" />
              <p className='md:hidden'>Don't have an account? <Link to="/sign-up" className='text-md font-semibold underline'>SIGN UP</Link></p>
            </div>
          </form>
        </div>
        <div className='w-10/12 md:flex min-h-[70vh] bg-primaryBlueColor hidden flex-col items-center justify-center p-2 text-center text-primaryWhiteColor gap-3 rounded-tr-2xl rounded-br-2xl'>
          <h1 className='text-2xl text-primaryWhiteColor md:text-4xl font-bold'>Hello, Friend 👋</h1>
          <p className='text-tertiaryBlueColor text-sm md:text-md'>We are Schools Mine, your trusted schools resource. Explore with us. <span className='font-semibold text-md'>Let's Get Started</span></p>
          <Link to="/sign-up"><Button title="Sign Up" border="border" /></Link>
        </div>
      </div>
    </div>
  );
}
