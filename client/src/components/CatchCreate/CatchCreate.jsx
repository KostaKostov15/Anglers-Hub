import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import { create } from '../../services/dataService';
import Input from '../Input/Input';
import Loader from '../Loader/Loader';

import {
    details_validation,
    fishSpecie_validation,
    fishWeight_validation,
    imageUrl_validation,
    region_validation,
    reservoirName_validation,
} from '../../util/formValidations';
import Path from '../../paths';
import Select from '../Input/Select';

const CatchCreate = () => {
    const [isLoading, setIsLoading] = useState(false);

    const methods = useForm();

    const navigate = useNavigate();

    const resetFormHandler = () => {
        methods.reset();
    };

    const onFormSubmit = methods.handleSubmit(async (data) => {
        setIsLoading(true);

        try {
            await create(data);

            resetFormHandler();
            navigate(Path.Browse);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    });

    return (
        <FormProvider {...methods}>
            <form onClick={(e) => e.preventDefault()} noValidate autoComplete='off' className='p-4'>
                <div className='space-y-12'>
                    <div className='border-b border-gray-900/10 pb-12'>
                        <h2 className='text-base font-semibold leading-7 text-gray-900 text-xl'>Location Info</h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>Write the location of the caught fish.</p>

                        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4'>
                            <Input {...reservoirName_validation} className={'sm:col-span-2 sm:col-start-1'} />

                            <Input {...region_validation} className='sm:col-span-2' />
                        </div>
                    </div>

                    <div className='border-b border-gray-900/10 pb-12'>
                        <h2 className='text-base font-semibold leading-7 text-gray-900 text-xl'>Catch Info</h2>
                        <p className='mt-1 text-sm leading-6 text-gray-600'>
                            Write some details about the fish you caught.
                        </p>

                        <div className='mt-10 space-y-10'>
                            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                                <Select {...fishSpecie_validation} className='sm:col-span-3' />

                                <Input {...fishWeight_validation} className='sm:col-span-3' />
                            </div>

                            <Input {...imageUrl_validation} className='col-span-full' />

                            <Input {...details_validation} className='col-span-full' />
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex items-center justify-end gap-x-6'>
                    <button
                        onClick={resetFormHandler}
                        type='button'
                        className='text-sm font-semibold leading-6 text-gray-900'>
                        Cancel
                    </button>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <button
                            onClick={onFormSubmit}
                            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                            Create
                        </button>
                    )}
                </div>
            </form>
        </FormProvider>
    );
};

export default CatchCreate;
