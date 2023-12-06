import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import AuthContext from '../../contexts/authContext';
import Loader from '../Loader/Loader';

import Path from '../../paths';
import logo from '../../assets/logo.png';
import Input from '../Input/Input';
import {
    email_validation,
    password_validation,
    rePassword_validation,
    username_validation,
} from '../../util/inputValidations';

const Register = () => {
    const { registerSubmitHandler, isLoading } = useContext(AuthContext);

    const methods = useForm();

    const onFormSubmit = methods.handleSubmit((data) => {
        registerSubmitHandler(data.email, data.username, data.password);

        methods.reset();
    });

    return (
        <div className='flex min-h-full flex-1 flex-col justify-center'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                <img className='mx-auto h-12 w-auto' src={logo} alt='Site Logo' />
                <h2 className='mt-9 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                    Sign Up Now
                </h2>
            </div>

            <div className='mt-9 sm:mx-auto sm:w-full sm:max-w-sm'>
                <FormProvider {...methods}>
                    <form onSubmit={(e) => e.preventDefault} noValidate autoComplete='off' className='space-y-6'>
                        <Input {...email_validation} />

                        <Input {...username_validation} />

                        <Input {...password_validation} />

                        <Input {...rePassword_validation} />

                        <div>
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <button
                                    onClick={onFormSubmit}
                                    className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                    Sign up
                                </button>
                            )}
                        </div>
                    </form>
                </FormProvider>

                <p className='mt-9 text-center text-sm text-gray-500'>
                    Already a member?{' '}
                    <Link to={Path.Login} className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
