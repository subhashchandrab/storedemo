import React from 'react';
import {ProductList} from '../ProductList';

const products = [
    {
      name: "Pen",
      count: 10
    },
    {
      name: "Pencil",
      count: 15
    },
    {
      name: "Book",
      count: 5
    }    
  
  ];

export const ProductListPage  = () => (
    <>
        <h1>The Product List Page</h1>
        <ProductList products={products}/>
    </>
)