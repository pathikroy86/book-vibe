import React, { use } from 'react';
import Book from './Book';

const Books = ({ booksResponse }) => {
    const booksData = use(booksResponse);

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto mb-5 md:mb-10'>
            {
                booksData.map(book => <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;