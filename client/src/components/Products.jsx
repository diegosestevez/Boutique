import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Product from './Product';
// import {popularProducts} from './../data';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(cat
          ? `http://localhost:8000/api/products?category=${cat}`
          : 'http://localhost:8000/api/products');
          setProducts(res.data.products)
      }catch(err){
        console.log(err)
      }
    }
    getProducts()
  },[cat]);

  // useEffect(()=>{
  //   let itemArray = [];
  //   if(cat){
  //     const {color, size} = filters
  //
  //     products.forEach(item => {
  //       if(color === undefined || size === undefined) itemArray.push(item);
  //
  //       const checkColor = item.color.every(el => item.color.includes(color));
  //       const checkSize = item.size.every(el => item.size.includes(size));
  //
  //       if(checkColor && checkSize) itemArray.push(item)
  //     });
  //   }
  //   setFilteredProducts([...itemArray]);
  // },[products, cat, filters])

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value])=>
        item[key].includes(value)
    ))
  );
  },[products,cat,filters])

  useEffect(()=>{
    if(sort==='newest'){
      setFilteredProducts(prev => [...prev].sort((a,b)=> a.createdAt - b.createdAt))
    }else if(sort==='asc'){
      setFilteredProducts(prev => [...prev].sort((a,b)=> a.price - b.price))
    }else{
      setFilteredProducts(prev => [...prev].sort((a,b)=> b.price - a.price))
    }
  }, [sort])

  return (
      <Container>
        {cat
          ? filteredProducts.map(item => (
          <Product item={item} key={item._id}/>
          ))
          : products
            .slice(0,8)
            .map(item => (
          <Product item={item} key={item._id}/>
        ))}
      </Container>
  )
}

export default Products;
