import React from 'react';
import CategoryItem from './CategoryItem';
import styled from 'styled-components';
import {categories} from './../data';
import {mobile, tablet} from './../responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${tablet({
    flexDirection: 'column'
  })};
  ${mobile({
    padding: '0px',
    flexDirection: 'column'
  })};
`

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
       <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories;
