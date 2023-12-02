/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from 'react';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { update } from '../../services/dataService';

export default function CatchEdit({ isOpen, toggleModal, catchId, catchDetails, updateCatchDetails }) {
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        const { reservoirName, region, fishSpecie, fishWeight, imageUrl, details } = catchDetails;
        setFormValues({ reservoirName, region, fishSpecie, fishWeight, imageUrl, details });
    }, [catchDetails]);

    const changeHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            default:
                value = e.target.value;
                break;
        }

        setFormValues((state) => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        const result = await update(catchId, formValues);
        updateCatchDetails(result);
        toggleModal();
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={toggleModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'>
                    <div className='fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block' />
                </Transition.Child>

                <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
                    <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'
                            enterTo='opacity-100 translate-y-0 md:scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 translate-y-0 md:scale-100'
                            leaveTo='opacity-0 translate-y-4 md:translate-y-0 md:scale-95'>
                            <Dialog.Panel className='flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl'>
                                <div className='relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                                    <button
                                        type='button'
                                        className='absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'
                                        onClick={toggleModal}>
                                        <span className='sr-only'>Close</span>
                                        <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                                    </button>

                                    <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-8 lg:gap-x-8'>
                                        <div className='mt-1 sm:mx-auto sm:w-full sm:max-w-sm sm:col-span-8'>
                                            <form onSubmit={submitHandler} className='space-y-6'>
                                                {/* reservoirName */}
                                                <div>
                                                    <label
                                                        htmlFor='reservoirName'
                                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                                        Reservoir Name
                                                    </label>
                                                    <div className='mt-2'>
                                                        <input
                                                            id='reservoirName'
                                                            name='reservoirName'
                                                            type='text'
                                                            value={formValues.reservoirName}
                                                            onChange={changeHandler}
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>
                                                </div>

                                                {/* region */}
                                                <div>
                                                    <div className='flex items-center justify-between'>
                                                        <label
                                                            htmlFor='region'
                                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                                            Area / Province
                                                        </label>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <input
                                                            id='region'
                                                            name='region'
                                                            type='text'
                                                            onChange={changeHandler}
                                                            value={formValues.region}
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>
                                                </div>

                                                {/* fishWeight */}
                                                <div>
                                                    <div className='flex items-center justify-between'>
                                                        <label
                                                            htmlFor='fishWeight'
                                                            className='block text-sm font-medium leading-6 text-gray-900'>
                                                            Weight [kg]
                                                        </label>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <input
                                                            id='fishWeight'
                                                            name='fishWeight'
                                                            type='number'
                                                            onChange={changeHandler}
                                                            value={formValues.fishWeight}
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>
                                                </div>

                                                {/* imageUrl */}
                                                <div className='col-span-full'>
                                                    <label
                                                        htmlFor='imageUrl'
                                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                                        Image Url
                                                    </label>
                                                    <div className='mt-2'>
                                                        <input
                                                            value={formValues.imageUrl}
                                                            onChange={changeHandler}
                                                            id='imageUrl'
                                                            name='imageUrl'
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                        />
                                                    </div>
                                                </div>

                                                {/* details */}
                                                <div className='col-span-full'>
                                                    <label
                                                        htmlFor='details'
                                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                                        Details
                                                    </label>

                                                    <div className='mt-2'>
                                                        <textarea
                                                            id='details'
                                                            name='details'
                                                            rows={3}
                                                            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                                            value={formValues.details}
                                                            onChange={changeHandler}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type='submit'
                                                        className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
