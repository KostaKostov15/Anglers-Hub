import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

const defaultFormData = {
    email: '',
    password: '',
    rePassword: '',
};

const Register = () => {
    const [formData, setFormData] = useState(defaultFormData);

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setFormData((oldValue) => ({
            ...oldValue,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(formData);

        setFormData(defaultFormData);
    };

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <img className='mx-auto h-12 w-auto' src={logo} alt='Site Logo' />
                <h2 className='mt-9 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                    Sign Up Now
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
                                value={formData.email}
                                onChange={changeHandler}
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
                                value={formData.password}
                                onChange={changeHandler}
                                required
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>

                    <div>
                        <div className='flex items-center justify-between'>
                            <label htmlFor='rePassword' className='block text-sm font-medium leading-6 text-gray-900'>
                                Repeat password
                            </label>
                        </div>
                        <div className='mt-2'>
                            <input
                                id='rePassword'
                                name='rePassword'
                                type='password'
                                value={formData.rePassword}
                                onChange={changeHandler}
                                required
                                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            Sign up
                        </button>
                    </div>
                </form>

                <p className='mt-9 text-center text-sm text-gray-500'>
                    Already a member?{' '}
                    <Link to='/users/login' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
