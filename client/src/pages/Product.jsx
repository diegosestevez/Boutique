import React from 'react';
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import {Add, Remove} from '@material-ui/icons';
import {mobile, tablet} from './../responsive';

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${tablet({
    flexDirection: 'column',
    padding: '10px'
  })}
`

const ImageContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${tablet({ height: '50vh'})}
  ${mobile({ height: '40vh'})}
`

const InfoContainer = styled.div`
  padding: 20px 50px;
  flex: 1;
  ${mobile({ padding: '10px'})}
`

const Title = styled.h1`
  font-weight: 200;
`

const Description = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${tablet({width: '100%'})}
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${tablet({width: '100%'})}
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor:pointer;
  font-weight: 500;

  &:hover{
    background-color: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
          <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Proactive standard setters conservatively enable world-class big datas for our propositions.
            Ethically touching base about revolutionizing organic growths will make us leaders in the mission critical core competency industry.
            Our synergy development lifecycle enables end-to-end, value-added brands. Efficiencies will come from conservatively growing our ballpark figures.
           </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='black'></FilterColor>
              <FilterColor color='darkblue'></FilterColor>
              <FilterColor color='gray'></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product;
