import React from 'react';
import styled from 'styled-components';
import {Facebook, Pinterest, Twitter, Instagram, Room, Phone, MailOutline} from '@material-ui/icons';
import {mobile, tablet} from './../responsive';

const Container = styled.div`
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  ${tablet({
    flexDirection:'column',
    padding: '0px',
  })};
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${tablet({
    backgroundColor:'teal',
    color: 'white'
  })};
`

const Logo = styled.h1``

const Description = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${props => props.color};
  color: white;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${tablet({
    backgroundColor:'#fff8f8'
  })};
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BOUTIQUE.</Logo>
        <Description>
          Customer-focused team players are becoming actionable capability experts.
          Our Corporate Enterprise solution offers low hanging fruit a suite of end-to-end offerings.
          We aim to proactively virtualise our cloud by globally incentivizing our world-class wholesale alignments.
          Going forward, our next-generation industry leader will deliver value to prince2 practitioners.
        </Description>
        <SocialContainer>
          <SocialIcon color='3b5999'>
            <Facebook/>
          </SocialIcon>
          <SocialIcon color='e4405f'>
            <Instagram/>
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Twitter/>
          </SocialIcon>
          <SocialIcon color='e60023'>
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men's Fashion</ListItem>
          <ListItem>Women's Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:'10px'}}/>
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:'10px'}}/>
          +1 800 234 5678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:'10px'}}/>
          customerservice@boutique.com
        </ContactItem>
        <Payment src='https://www.transparentpng.com/thumb/credit-card/8pLVdL-credit-card-types-transparent-image.png'/>
      </Right>
    </Container>
  )
}

export default Footer;
