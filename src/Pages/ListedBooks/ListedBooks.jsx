import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../Components/Context/BookCollection';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CiLocationOn } from "react-icons/ci";

const ListedBooks = () => {

    const { storedBooks, wishlist } = useContext(BookContext);
    const [sortingType, setSortingType] = useState('');
    const [filteredReadList, setFilteredReadList] = useState(storedBooks)

    useEffect(() => {
        if (sortingType) {
            if (sortingType === "pages") {
                const sortedData = [...storedBooks].sort(
                    (a, b) => a.totalPages - b.totalPages,
                );

                setFilteredReadList(sortedData)
            }
            else if (sortingType === "rating") {
                const sortedData = [...storedBooks].sort(
                    (a, b) => a.rating - b.rating,
                );
                setFilteredReadList(sortedData)
            }

        }
    }, [sortingType, storedBooks])
    return (
        <div className='container mx-auto mt-5'>
            <div className='flex justify-center my-10'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType("pages")}><a>Pages</a></li>
                        <li onClick={() => setSortingType("rating")}><a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Mark as Read</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    {
                        storedBooks.map(book =>
                            <div className="card lg:card-side bg-base-100 shadow-sm mb-5 gap-8">
                                <figure className='bg-gray-100 rounded-xl'>
                                    <img className='h-[200px] p-10'
                                        src={book.image} />
                                </figure>
                                <div className="space-y-3">
                                    <h2 className="card-title">{book.bookName}</h2>
                                    <p>By: {book.author}</p>
                                    <div className='flex gap-5'>
                                        <p className='font-bold'>Tag: </p>
                                        {
                                            book.tags.map((tag, index) => <p key={index} className='badge bg-gray-100 text-[#23BE0A]'>#{tag}</p>)
                                        }
                                        <p className='flex items-center'><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                    <div className='flex gap-5'>
                                        <p>Publisher: {book.publisher}</p>
                                        <p>Page: {book.totalPages}</p>
                                    </div>
                                    <hr className='text-gray-200 my-3' />
                                    <div className='space-x-5'>
                                        <p className='badge badge-soft badge-info'>Category: {book.category}</p>
                                        <p className="badge badge-soft badge-warning">Rating: {book.rating}</p>
                                        <p className='badge badge-success'>View Details</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishlist.map(book =>
                            <div className="card lg:card-side bg-base-100 shadow-sm mb-5 gap-8">
                                <figure className='bg-gray-100 rounded-xl'>
                                    <img className='h-[200px] p-10'
                                        src={book.image} />
                                </figure>
                                <div className="space-y-3">
                                    <h2 className="card-title">{book.bookName}</h2>
                                    <p>By: {book.author}</p>
                                    <div className='flex gap-5'>
                                        <p className='font-bold'>Tag: </p>
                                        {
                                            book.tags.map((tag, index) => <p key={index} className='badge bg-gray-100 text-[#23BE0A]'>#{tag}</p>)
                                        }
                                        <p className='flex items-center'><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                                    <div className='flex gap-5'>
                                        <p>Publisher: {book.publisher}</p>
                                        <p>Page: {book.totalPages}</p>
                                    </div>
                                    <hr className='text-gray-200 my-3' />
                                    <div className='space-x-5'>
                                        <p className='badge badge-soft badge-info'>Category: {book.category}</p>
                                        <p className="badge badge-soft badge-warning">Rating: {book.rating}</p>
                                        <p className='badge badge-success'>View Details</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default ListedBooks;