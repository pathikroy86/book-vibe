import React from 'react';
import image from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div className='container mx-auto mt-5 mb-5 md:mb-10'>
            <div className="bg-base-200 py-5 md:py-10 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img
                        src={image}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='space-y-10 md:ms-24'>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn btn-success">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;