import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router';
import  errorImg from '../assets/vecteezy_3d-error-404-for-landing-page_24584233.png'

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center',height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='poppins-semibold'>Oops! Something went wrong.</h1>
      <h2 className='poppins-semibold'>Error 404: Page Not Found</h2>
      <p className='poppins-regular mt-3'>We couldn't find the page you were looking for. Please try one of the options below:</p>

      <img src={errorImg} alt="Error Illustration" style={{ width: '100px', margin: '20px 0' }} />
      <div>
        <Link href="/" className='text-decoration-none' style={{ marginRight: '10px'}}>
        <Button variant="outlined">Go to Homepage</Button>
        </Link>
       
        <Button onClick={() => window.location.reload()} variant="outlined">Refresh</Button>
      </div>
      <p className='poppins-regular mt-3'>If the problem persists, contact us at <Link className='text-decoration-none' href="Email:support@example.com">support@example.com</Link>.</p>
    </div>
  );
};

export default ErrorPage;