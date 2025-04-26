import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { UserContext } from '../../Context/userContext';
import { Helmet } from 'react-helmet';

export default function Login() {
  const [Erorr, setErorr] = useState('');
  const [Spiner, setSpiner] = useState(false);
  let { setUserLogin } = useContext(UserContext);
  let navigat = useNavigate();
  let validationSchema = yup.object().shape({
    email: yup.string().email('the email is not valid').required('the email is required'),
    password: yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'the password is not valid').required('the password is required'),
  })

  function handelLogin(formikValus) {
    setSpiner(true);
    let { data } = axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', formikValus)
      .then((apiResponse) => {
        setSpiner(false);
        if (apiResponse.data.message === 'success') {
          setUserLogin(apiResponse.data.token)
          localStorage.setItem('userToken', apiResponse.data.token);
          navigat('/');
        }
      })
      .catch(
        (apiResponse) => {
          setSpiner(false);
          setErorr(apiResponse?.response?.data?.message)
          console.log(apiResponse);
        }
      )
  }
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handelLogin
  })

  return <>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div className="max-w-lg mx-auto rounded-lg border shadow-md px-8 py-10 flex flex-col items-center ">
      <form onSubmit={formik.handleSubmit} action="#" className="w-full flex flex-col gap-4 ">
        <h1 className='text-center text-white'>Login Now</h1>
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="email" className="text-sm text-gray-300 dark:text-gray-200 mr-2">Email:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.email}</span>
        </div> : null}
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="password" className="text-sm text-gray-300 dark:text-gray-200 mr-2">Password:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.password}</span>
        </div> : null}
        <button type="submit" className="text-white me-5 bg-gray-700 hover:bg-gray-800 focus:ring-4  focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          {Spiner ? <> <i className="fa-solid fa-rotate mx-3"></i>Login </> : 'Login'}
        </button>

        {Erorr ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{Erorr}</span>
        </div> : null}
      </form>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
        <Link to={'/Register'} className="font-semibold border-b-2 text-blue-500 hover:text-blue-600">Register</Link>
      </div>
    </div>

  </>
}
