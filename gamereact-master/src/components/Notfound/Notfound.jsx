import React from 'react';

import image from "../../assets/images/icons8-page-not-found-64.png"
import { Helmet } from 'react-helmet';


export default function Notfound() {

  return <>
    <Helmet>
      <title>not_found</title>
    </Helmet>
    <img className='w-1/4 flex justify-center mx-auto' src={image} alt="not_found" />
    <h1 className='text-center'>not_found</h1>
  </>
}
