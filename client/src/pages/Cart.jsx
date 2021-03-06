import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom";
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import {mobile, tablet} from './../responsive';
import {useSelector, useDispatch} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import {userRequest} from './../requestMethods';
import {deleteProduct, deleteAllProducts} from './../redux/cartRedux';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: '10px'})};
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && "none" };
  background-color: ${props => props.type === 'filled' ? "black" : "transparent" };
  color: ${props => props.type === 'filled' && "white" }
`

const TopTexts = styled.div`
  ${tablet({
    display:'flex',
    flexDirection:'column',
  })};
  ${mobile({display:'none'})};
`

const TopText = styled.span`
  text-decoration: underline;
  margin: 0px 10px;
  ${tablet({margin:'5px 0px'})};
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({flexDirection:'column'})};
`

const Info = styled.div`
  flex: 3;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({flexDirection:'column'})};
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color}
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div``

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${tablet({marginBottom:'20px'})};
`

const ProductDelete = styled.span`
  padding-top:20px;
  color: red;
  cursor: pointer;
`

const HR = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #eee;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' ? '500' : props.type === 'discount' ? '200' : null};
  font-size: ${props => props.type === 'total' && '24px'};
  color: ${props => props.type === 'discount' && 'teal'};
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Cart = () => {
  const cart = useSelector(state=>state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token)=>{
    setStripeToken(token)
  }

  useEffect(()=>{
    const makeRequest = async () => {
      try{
        const res = await userRequest.post('/checkout/payment', {
          tokenId:stripeToken.id,
          amount:cart.total*100,
        })
        //example of an object sent to stripe in this post request { tokenId: 'tok_JL8945OPYH56OXT234S', amount: 2500 }
          history('/success', {state:
          {
            stripeData:res.data,
            cart: cart
          }
        });
      }catch(err){
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  },[stripeToken, cart.total, history])

  const handleDelete = (id, price, index) => {
    dispatch(deleteProduct({id, price, index}))
  }

  const handleDeleteAll = () => {
    dispatch(deleteAllProducts())
  }

  return (
      <Container>
        <Navbar/>
        <Announcement/>
          <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
              <TopButton onClick={handleDeleteAll}>CLEAR CART</TopButton>
              <TopTexts>
                <TopText>Shopping Cart ({cart.quantity})</TopText>
              </TopTexts>
              <Link to ='/'>
                <TopButton type='filled'>CONTINUE SHOPPING</TopButton>
              </Link>
            </Top>
            <Bottom>
              <Info>
              {cart.products.map((product, index)=>(
                <Product key={index}>
                  <ProductDetail>
                    <Image src={product.img}/>
                    <Details>
                      <ProductName><b>Product:</b>{product.title}</ProductName>
                      <ProductId><b>ID:</b> {product._id}</ProductId>
                      <ProductColor color={product.color}/>
                      <ProductSize><b>Size:</b>{product.size}</ProductSize>
                      <ProductAmount><b>Qty:</b> {product.quantity}</ProductAmount>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                      <ProductDelete onClick={() => handleDelete(product._id, product.price*product.quantity, index)}>DELETE</ProductDelete>
                    </ProductAmountContainer>
                  </PriceDetail>
                </Product>
                ))
              }
                <HR/>
              </Info>
              <Summary>
                <SummaryTitle>ORDER Summary</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                  <SummaryItemText>Estimated Shipping</SummaryItemText>
                  <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type= 'discount'>
                  <SummaryItemText>Shipping Discount</SummaryItemText>
                  <SummaryItemPrice>$ - 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type='total'>
                  <SummaryItemText>Total</SummaryItemText>
                  <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                </SummaryItem>
                <StripeCheckout
                  name='Boutique'
                  image='/img/logo.png'
                  description={`Your total is ${cart.total} dollars`}
                  billingAddress
                  shippingAddress
                  amount={cart.total*100}
                  token={onToken}
                  stripeKey={KEY}
                  >
                  <Button>CHECKOUT NOW</Button>
                </StripeCheckout>
              </Summary>
            </Bottom>
          </Wrapper>
        <Footer/>
      </Container>
  )
}

export default Cart;
