import React from 'react';
import styled from 'styled-components';
import {Add, Remove} from '@material-ui/icons';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Footer from './../components/Footer';
import {mobile, tablet} from './../responsive'

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
  cursor: pointer;
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
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${tablet({margin:'5px 15px'})};
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${tablet({marginBottom:'20px'})};
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
  color: ${props => props.type === 'discount' && 'red'};
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
  return (
      <Container>
        <Navbar/>
        <Announcement/>
          <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
              <TopButton>CONTINUE SHOPPING</TopButton>
              <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
              </TopTexts>
              <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
              <Info>
                <Product>
                  <ProductDetail>
                    <Image src='https://www.pngarts.com/files/5/Plaid-Skirt-PNG-High-Quality-Image.png'/>
                    <Details>
                      <ProductName><b>Product:</b> Plaid Skirt</ProductName>
                      <ProductId><b>ID:</b> 923846710845687</ProductId>
                      <ProductColor color='tan'/>
                      <ProductSize><b>Size:</b> 7</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>1</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice> $25.99</ProductPrice>
                  </PriceDetail>
                </Product>
                <HR/>
                <Product>
                  <ProductDetail>
                    <Image src='https://www.pngarts.com/files/3/Womens-T-Shirt-PNG-High-Quality-Image.png'/>
                    <Details>
                      <ProductName><b>Product:</b> Women's T-Shirt - Pride & Prejudice</ProductName>
                      <ProductId><b>ID:</b> 987856740815987</ProductId>
                      <ProductColor color='#000059'/>
                      <ProductSize><b>Size:</b> M</ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Add/>
                      <ProductAmount>1</ProductAmount>
                      <Remove/>
                    </ProductAmountContainer>
                    <ProductPrice> $14.99</ProductPrice>
                  </PriceDetail>
                </Product>
              </Info>
              <Summary>
                <SummaryTitle>ORDER Summary</SummaryTitle>
                <SummaryItem>
                  <SummaryItemText>Subtotal</SummaryItemText>
                  <SummaryItemPrice>$ 40.98</SummaryItemPrice>
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
                  <SummaryItemPrice>$ 40.98</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
              </Summary>
            </Bottom>
          </Wrapper>
        <Footer/>
      </Container>
  )
}

export default Cart;
