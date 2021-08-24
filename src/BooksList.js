import React from 'react';
import {BookItem} from './BookItem';

export const BooksList = ({books}) =>(
    <>
    {books.map(book => <BookItem book={book} key={book.title}/>)}
    </>
);