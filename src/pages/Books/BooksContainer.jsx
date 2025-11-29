import React from 'react';
import Book from './Book';

const BooksContainer = ({data}) => {
    // console.log(data);
    
    return (
        <div>
            <h3 className='text-2xl md:text-4xl font-bold text-center'>Books : {data.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {
                data.map((book)=><Book key={book.bookId} book={book}></Book>)
               }
            </div>
        </div>
    );
};

export default BooksContainer;