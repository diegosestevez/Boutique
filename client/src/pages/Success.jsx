import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../requestMethods";
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import {mobile, tablet} from './../responsive';
import {deleteAllProducts} from './../redux/cartRedux';

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${mobile({padding: '10px'})};
`
const TitleContainer = styled.div`
  width: 90vw;
  color:white;
  padding: 10px 0px;
  background-color:teal;
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const SubTitle = styled.p`
  font-weight: 500;
  text-align: center;
`

const Details = styled.div`
  width: 50vw;
  margin: 30px 0px;
  text-align: center;
`
const DetailsTitle = styled.h1`
  font-size:24px;
`

const DetailsText = styled.p`
  font-size:16px;
  font-weight:300;
  margin-top: 10px;
  color: #555;
`

const HR = styled.hr`
  width: 90vw;
  background-color: #eee;
  border: none;
  height: 1px;
`

const Button = styled.button`
  width: 30%;
  margin-top: 50px;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Success = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [orderData, setOrderData] = useState(false);

  useEffect(() => {
    if(!location.state){
      navigate('/')}
    else{
      const {cart, stripeData} = location.state;

      const createOrder = async () => {
        try {
          const res = await userRequest.post("/orders", {
            id: stripeData.id,
            products: cart.products.map((item) => ({
              productId: item._id,
              quantity: item._quantity,
              img: item.img,
              title:item.title,
              price:item.price
            })),
            amount: cart.total,
            address: stripeData.billing_details.address,
          });
          setOrderData(res.data.savedOrder);
        } catch(err){
          console.log(err)
        }
      };
       createOrder();
    }
  }, [location.state]);

  const handleClick = (e) =>{
    e.preventDefault();
    dispatch(deleteAllProducts()); // clear cart after purchase
    navigate('/');
  }

  return(
    <Container>
      <Navbar/>
      {orderData
        ? <Wrapper>
          <TitleContainer>
            <Title>Your Receipt:</Title>
            <SubTitle>Please save or print this receipt for your records</SubTitle>
          </TitleContainer>
          <Details>
            <DetailsTitle>Order Details</DetailsTitle>
            <DetailsText>Amount Total Paid: <strong>$ {orderData.amount} </strong></DetailsText>
            <DetailsText>Your order number is:<strong> {orderData._id} </strong></DetailsText>
          </Details>
          <HR/>
          <Details>
          <DetailsTitle>Purchase Details</DetailsTitle>
            {orderData.products.map((product, index) =>(
              <div key={index} style={{marginTop: '25px'}}>
                <DetailsText>Product Name: <strong>{product.title}</strong></DetailsText>
                <DetailsText>Product Id: <strong>{product.productId}</strong></DetailsText>
                <DetailsText>Unit Price: <strong>$ {product.price}</strong></DetailsText>
              </div>
            ))}
          </Details>
          <HR/>
          <Details>
          <DetailsTitle>Ship To:</DetailsTitle>
            <DetailsText>Country: <strong>{orderData.address.country}</strong></DetailsText>
            <DetailsText>State/Province <strong>{orderData.address.state}</strong></DetailsText>
            <DetailsText>City: <strong>{orderData.address.city}</strong></DetailsText>
            <DetailsText>Street: <strong>{orderData.address.line1}</strong></DetailsText>
            <DetailsText>Postal Code: <strong>{orderData.address.postal_code}</strong></DetailsText>
          </Details>
          <HR/>
           <Button onClick={handleClick}>Back to Homepage</Button>
        </Wrapper>
      : <Wrapper>
          <DetailsTitle>A problem occured with your order and it did no go through, please try again...</DetailsTitle>
          <Button onClick={handleClick}>Back to Homepage</Button>
        </Wrapper>
      }
      <Footer/>
    </Container>

  )
}

export default Success;
