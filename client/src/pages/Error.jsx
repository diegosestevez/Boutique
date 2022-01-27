import React from 'react';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';

const Error = () => {
  return (
    <>
    <Announcement/>
    <Navbar/>
    <h1>404 this page does not exist!</h1>
    <h4>If you were trying to access login or register pages you got this message because are already logged in. Please sign out.</h4>
    <Footer/>
    </>
  )
}

export default Error;
