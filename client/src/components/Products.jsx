import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Product from './Product';
import {popularProducts} from './../data';
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

  useEffect(()=>{
    let removeDuplicateItemValues = [];

    if(cat){
      let itemValues = []
      const filterValues = Object.values(filters) // ['Red','M']
      products.forEach(item => {
        const {color, size} = item

        let colorResult = filterValues.filter(el => color.includes(el))
        let sizeResult = filterValues.filter(el => size.includes(el))

        if(colorResult.length > 0) itemValues.push(item)
        if(sizeResult.length > 0) itemValues.push(item)

        removeDuplicateItemValues = [...new Set(itemValues)]
      });
    }
    setFilteredProducts(removeDuplicateItemValues);
  },[products, cat, filters])

  return (
      <Container>
        {popularProducts.map(item => (
          <Product item={item} key={item.id}/>
        ))}
      </Container>
  )
}

export default Products;
