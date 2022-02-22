import React, {useState} from 'react';
import {mobile, tablet} from './../responsive';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({height:"50px"})};
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tablet({padding:"10px 10px"})};
  ${mobile({padding:"10px 0px"})};
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 5px;
  padding: 5px;
  ${tablet({marginLeft:"5px"})};
  ${mobile({marginLeft:"3px"})};
`
const Input = styled.input`
  border: none;
  ${tablet({width:"100px"})};
  ${mobile({width:"15vw"})};
`
const Center = styled.div`
  flex: 1;
  text-align:center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({
    fontSize:"20px",
    marginLeft:'10px'
  })};
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent:"center"
  })};
`

const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left: 25px;
  ${tablet({marginLeft:"10px"})};
  ${mobile({
    fontSize:"10px",
    marginLeft: "5px"
  })};
`

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder='search' onChange={(e) => setSearchTerm(e.target.value)}/>
            <Link to={`/search/${searchTerm}`}>
              <Search style={{color:'gray', fontSize:16, cursor:'pointer'}}/>
            </Link>
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/' style={{textDecoration:'none', color:'black'}}>
            <Logo>
              BOUTIQUE.
            </Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{textDecoration:'none', color:'black'}}>
            <MenuItem>NEWSLETTER</MenuItem>
          </Link>
          <Link to="/cart" style={{textDecoration:'none', color:'black'}}>
            <MenuItem>
              <Badge badgeContent={quantity} color="secondary">
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar;
