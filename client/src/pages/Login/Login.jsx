import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Path from '../../paths';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const submitHandler = (e) => {
        e.preventDefault();

        // TODO: Make POST request to server with user data
        resetForm();
    };

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <img className='mx-auto h-12 w-auto' src={logo} alt='Site Logo' />
                <h2 className='mt-9 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                    Sign in to your account
                </h2>
            </div>

            <div className='mt-9 sm:mx-auto sm:w-full sm:max-w-sm'>
                <form onSubmit={submitHandler} className='space-y-6'>
                    <div>
                        <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                            Email address
                        </label>
                        <div className='mt-2'>
                            <input
                                id='email'
                                name='email'
                                type='email'
                                onChange={emailChangeHandler}
                                value={email}
                                required
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center justify-between'>
                            <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                                Password
                            </label>
                        </div>
                        <div className='mt-2'>
                            <input
                                id='password'
                                name='password'
                                type='password'
                                onChange={passwordChangeHandler}
                                value={password}
                                required
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            Sign in
                        </button>
                    </div>
                </form>

                <p className='mt-9 text-center text-sm text-gray-500'>
                    Not a member?{' '}
                    <Link to={Path.Register} className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
