import React, { useState } from 'react';

const FormAction = () => {

    const handleFormAction = (formdata) => {
        console.log(formdata.get('name'));
        console.log(formdata.get('email'));
    }

    const handleFormReload = (e) => {
        e.preventDefault();
        console.log(e.target.mail.value);
        console.log(e.target.password.value);
    }

    const [password, setPassword] = useState('');
    const handleControlledPassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    }
    return (
        <div>
            <form className='space-y-2 mb-10' action={handleFormAction}>
                <input type="text" placeholder="Type here" name='name' className="input" required />
                <br />
                <input type="text" placeholder="Type here" name='email' className="input" required />
                <br />
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
            <form className='space-y-2' onSubmit={handleFormReload}>
                <input type="email" placeholder="Enter your email" name='mail' className="input" required />
                <br />
                <input type="password" placeholder="Enter password" name='password' defaultValue={password} onChange={handleControlledPassword} className="input" required />
                <br />
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormAction; <form action="">
</form>