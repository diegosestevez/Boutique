import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Send} from '@material-ui/icons';
import {mobile, tablet} from './../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({fontSize:'60px'})};
`
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${tablet({textAlign:'center'})};
  ${mobile({fontSize:'20px'})};
`

const Button = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  background-color:teal;
  justify-content: center;
  align-items: center;
`

const ButtonText = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-right: 5px;
  ${mobile({fontSize:'18px'})};
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <Link style={{width:'40%', color:'white', textDecoration:'none'}} to='/register'>
        <Button>
          <ButtonText>Sign Up</ButtonText>
          <Send/>
        </Button>
      </Link>

    </Container>
  )
}

export default Newsletter;
