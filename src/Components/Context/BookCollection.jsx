import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookCollection = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const handleMarkAsRead = (currentBook) => {
        const isExistedBook = storedBooks.find(book => book.bookId == currentBook.bookId);
        if (isExistedBook) {
            toast.error('Already marked as read.')
        }
        else {
            toast.success('Successfully added to mark as read list');
            setStoredBooks([...storedBooks, currentBook]);
        }
    };

    const [wishlist, setWishlist] = useState([]);
    const handleWishlist = (currentBook) => {
        const isExistedinWishlist = wishlist.find(book => book.bookId == currentBook.bookId);
        const isAlreadyRead = storedBooks.find(book => book.bookId == currentBook.bookId);

        if (isExistedinWishlist) {
            toast.error('Already selected in wishlist.');
            return;
        }
        else if (isAlreadyRead) {
            toast.error('Already marked as read.');
            return;
        }
        else {
            toast.success('Successfully addded in wishlist');
            setWishlist([...wishlist, currentBook]);
        }
    }

    const data = {
        handleMarkAsRead,
        storedBooks,
        setStoredBooks,
        handleWishlist,
        wishlist
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookCollection;