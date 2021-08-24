import React, { useContext } from 'react';
import {ThemeContext} from './ThemeContext';
import './ProductListItem.css';

export const ProductItem = ({product}) => {
    const theme = useContext(ThemeContext);
    //list-item-container is a css class defined in ProudctListItem.css
    return (
            <div
                style = {
                        {
                            backgroundColor: theme === 'dark' ? 'black' : 'white',
                            color: theme === 'dark' ? 'white': 'black'
                        }
                } 
                className="list-item-container">
                <h3>{product.name}</h3>
                <p>Count: {product.count}</p>
            </div>
            );
}