import React from 'react';

export const BookItem = ({book}) => (
    <div>
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Edition: {book.edition}</p>
    </div>
)