import React from 'react';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  height: 70vh;
  background-color: #fbf0f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  text-align: center;
`
const ErrorTitle = styled.h1`
  margin-bottom: 15px;
`
const ErrorText = styled.p``

const Error = () => {
  return (
    <>
    <Navbar/>
      <Announcement/>
      <ErrorContainer>
        <ErrorTitle>404 Error: This page does not exist!</ErrorTitle>
        <ErrorText>The page you were trying to access does not exist or it has been moved.</ErrorText>
      </ErrorContainer>
      <Newsletter/>
    <Footer/>
    </>
  )
}

export default Error;
