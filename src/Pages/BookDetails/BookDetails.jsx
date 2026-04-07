import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const books = useLoaderData();
    const params = useParams();
    const expectedBook = books.find(book => book.bookId == params.id);
    console.log(expectedBook);
    return (
        <div>

        </div>
    );
};

export default BookDetails;