import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup'
import { UserContext } from '../../Context/userContext';
import { Helmet } from 'react-helmet';

export default function Register() {

  const [Erorr, setErorr] = useState('');
  const [Spiner, setSpiner] = useState(false);
  let { setUserLogin } = useContext(UserContext);
  let navigat = useNavigate();

  let validationSchema = yup.object().shape({
    name: yup.string().min(5, 'the min lenth is 5').max(15, 'the max lenth is 15').required('the name is required'),
    phone: yup.string().matches(/^01[0125][0-9]{8}$/, 'the phone must egyption number').required('the phone is required'),
    email: yup.string().email('the email is not valid').required('the email is required'),
    password: yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'the password is not valid').required('the password is required'),
    rePassword: yup.string().oneOf([yup.ref('password')], 'the password is not match').required('the rePassword is required')
  })

  function handelRegister(formikValus) {
    setSpiner(true);

    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', formikValus)
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
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',

    },
    validationSchema,
    onSubmit: handelRegister

  })

  return <>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <div className="max-w-lg mx-auto rounded-lg border shadow-md px-8 py-10 flex flex-col items-center">

      <form onSubmit={formik.handleSubmit} action="#" className="w-full flex flex-col gap-4">
        <h1 className='text-center text-white'>Register Now</h1>
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="name" className="text-sm text-gray-300 mr-2"> Name:</label>
          <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} id="name" name="name" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.name}</span>
        </div> : null}
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="email" className="text-sm text-gray-300 mr-2">Email:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.email}</span>
        </div> : null}
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="phone" className="text-sm text-gray-300 mr-2">Phone:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="text" id="phone" name="phone" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.phone}</span>
        </div> : null}
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="password" className="text-sm text-gray-300 mr-2">Password:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.password}</span>
        </div> : null}
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="rePassword" className="text-sm text-gray-300 mr-2">rePassword:</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" id="rePassword" name="rePassword" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
        {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.rePassword}</span>
        </div> : null}
        <button type="submit" className="text-white me-5 bg-gray-700 hover:bg-gray-800 focus:ring-4  focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          {Spiner ? <> <i className="fa-solid fa-rotate mx-3"></i>Register </> : 'Register'}
        </button>

        {Erorr ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{Erorr}</span>
        </div> : null}
      </form>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
        <Link to={'/Login'} className="font-semibold border-b-2 text-blue-500 hover:text-blue-600">Login</Link>
      </div>
    </div>

  </>
}
