import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { bookName, author, category, image, rating, tags } = book;
    return (
        <Link to={`/details/${book.bookId}`}>
            <div className="card bg-base-100 shadow-sm">
                <figure className='bg-base'>
                    <img className='h-48 py-3'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div>
                        {
                            tags.map((tag, index) => <div key={index} className="badge badge-outline badge-success mr-5">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <hr className='my-2 text-gray-300' />
                    <div className="card-actions justify-between">
                        <div>{category}</div>
                        <div className='flex items-center gap-1'>{rating} <CiStar /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;