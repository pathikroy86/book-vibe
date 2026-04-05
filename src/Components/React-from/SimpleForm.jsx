import React from 'react';

const SimpleForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div className='mt-5'>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name='name' placeholder="Type here" className="input" />
                <br />
                <input type="email" name='email' placeholder="Enter Email" className="input" />
                <br />
                <button className='btn btn-primary mt-2' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;