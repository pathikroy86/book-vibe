import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const books = useLoaderData();
    const params = useParams();
    const expectedBook = books.find(book => book.bookId == params.id);
    console.log(expectedBook);
    return (
        <div className='container mx-auto md:flex gap-10 mt-5 md:mt-10'>
            <figure className='flex-1 flex justify-center items-center bg-neutral-200 rounded-lg'>
                <img className='h-[300px]' src={expectedBook.image} alt="" />
            </figure>
            <div className='flex-1'>
                <h1 className='text-[40px] font-bold'>{expectedBook.bookName}</h1>
                <p className='text-xl font-medium'>By: {expectedBook.author}</p>
                <p className='text-xl font-medium'>{expectedBook.category}</p>
                <hr className='my-3 text-gray-300' />
                <p className='mb-2'><span className='font-bold'>Review: </span>{expectedBook.review}</p>
                <div className='flex gap-5'>
                    <strong>Tag</strong>
                    {
                        expectedBook.tags.map((tag, index) => <strong key={index} className='text-[#23Be0A]'>#{tag}</strong>)
                    }
                </div>
                <hr className='my-3 text-gray-300' />
                <p className='space-x-28 mb-3'><span className='text-[#131313B3]'>Number of Pages:</span><span className='font-semibold'>{expectedBook.totalPages}</span></p>
                <p className='space-x-28 mb-3'><span className='text-[#131313B3]'>Publisher:</span><span className='font-semibold'>{expectedBook.publisher}</span></p>
                <p className='space-x-28 mb-3'><span className='text-[#131313B3]'>Year of Publishing:</span><span className='font-semibold'>{expectedBook.yearOfPublishing}</span></p>
                <p className='space-x-28 mb-3'><span className='text-[#131313B3]'>Rating:</span><span className='font-semibold'>{expectedBook.rating}</span></p>
                <div className='flex gap-3'>
                    <button className='btn'>Read</button>
                    <button className='btn btn-info'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;