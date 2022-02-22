import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navbar from './../components/Navbar';
import Announcement from './../components/Announcement';
import Product from './../components/Product';
import Newsletter from './../components/Newsletter';
import Footer from './../components/Footer';
import {useLocation} from 'react-router-dom';
import {publicRequest} from './../requestMethods';

const Container = styled.div``

const ProductContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const SearchText = styled.p`
  margin: 10px 0px 10px 10px;
  font-size: 20px;
`

const NoResultsContainer = styled.div`
height: 70vh;
background-color: #f5fafd;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 15%;
text-align: center;
`
const NoResultsText = styled.h1`
  font-size: 20px;
  font-weight: 500;
`

const Search = () =>{
  const location = useLocation();
  const searchTerm = location.pathname.split('/')[2];
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await publicRequest.get('/products');
        setProducts(res.data.products)
      }catch(err){
        console.log(err)
      }
    }
    getProducts();
  }, [searchTerm])

  //filters api results according to the search term typed
  const filteredProducts = products.filter(product =>{
    return product.title.toLowerCase().includes(searchTerm.replace(/%20/g, " ")) || product.desc.toLowerCase().includes(searchTerm.replace(/%20/g, " "))
  })

  return (
    <Container>
      <Navbar/>
      <Announcement/>
        <SearchText><strong>{filteredProducts.length}</strong> results found for <strong>{searchTerm.replace(/%20/g, " ")}</strong></SearchText>
        {filteredProducts.length > 0
        ?
        <ProductContainer>
        {filteredProducts && filteredProducts.map((filteredProduct, index)=>(
          <Product item={filteredProduct} key={filteredProduct._id}/>
        ))}
        </ProductContainer>
        :
        <NoResultsContainer>
          <NoResultsText>Your search returned no results. Please make sure not to include special characters</NoResultsText>
        </NoResultsContainer>
      }
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Search;
