import React from 'react';
import {ProductItem} from './ProductListItem';
import styled from 'styled-components';

//The below is done using styled-components package. 
const Wrapper = styled.div`
    border: 2px solid white;
    padding: 32px;
`;

export const ProductList = ({products}) =>(
    <Wrapper>
    {/*Wrapper is a new css class defined using styled-components package*/}
    {products.map(product => <ProductItem product={product} key={product.name}/>)}
    </Wrapper>
);
