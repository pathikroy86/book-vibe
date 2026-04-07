import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';

const fetchData = async () => {
    const res = await fetch('/booksData.json');
    return res.json();
}
const Home = () => {
    const booksResponse = fetchData();
    return (
        <div>
            <Banner></Banner>
            <Suspense fallback={<span className="loading loading-spinner text-secondary"></span>}>
                <Books booksResponse={booksResponse}></Books>
            </Suspense>
        </div>
    );
};

export default Home;