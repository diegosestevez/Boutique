import React, {useState, useRef} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import styled from 'styled-components';
import {mobile, tablet} from './../responsive';
import {publicRequest} from './../requestMethods';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("https://images.pexels.com/photos/8422531/pexels-photo-8422531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
      bottom;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Message = styled.div`
  width: 50%;
  height: 25px;
  top: -20%;
  position: absolute;
  padding: 10px 0;
  /* background-color: teal; */
  color: white;
  text-align: center;
  font-size: 20px;
  transition: top .3s ease-out;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${tablet({width:'50%'})};
  ${mobile({width:'75%'})};
`

const Title= styled.h1`
  font-size: 24px;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  const [name, setName] = useState(false);
  const [email, setEmail] = useState(false);
  const [phone, setPhone] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState('');

  const navigate = useNavigate();

  const message = useRef();
  const setMessageCSS = (cssText) =>{
    return message.current.style.cssText = cssText;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (name && email && phone){
        const res = await publicRequest.post('/auth/signup', {
          username:name,
          email:email,
          phone:phone
        });

        setMessageCSS('background-color:teal;top:0');
        setConfirmMsg('Sign Up Successful! Redirecting...');

        setTimeout(() => navigate('/'), 1200);
      }else{
      throw 'missing form fields'
      }
    }catch(err){
      setMessageCSS('background-color:red;top:0');
      setConfirmMsg('Sign Up Not Successful, Please Try Again...');
    }
  }


  return (
    <Container>
     <Message ref={message}>{confirmMsg}</Message>
      <Wrapper>
        <Title>NEWLETTER SIGNUP</Title>
        <Form>
          <Input type='text'  placeholder='fullname (Jane Doe)' required onChange={(e => setName(e.target.value))}/>
          <Input type='email'  placeholder='email (janedoe@gmail.com)' required onChange={(e => setEmail(e.target.value))}/>
          <Input type='number' placeholder='phone number (6364517890)' minlength="7" required onChange={(e => setPhone(e.target.value))}/>
          <Agreement>
            By signing up to receive the BOUTIQUE monthly newsletter, I consent to the processing of my personal data
            in accordance with the following <b>TERMS & CONDITIONS</b>
          </Agreement>
          <Button onClick={handleSubmit}>SIGN UP</Button>
          <Link to='/' style={{color:'black', marginTop: '10px'}}>Home</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;
