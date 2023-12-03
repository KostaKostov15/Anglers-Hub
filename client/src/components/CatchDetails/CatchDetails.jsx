import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CatchEdit from './CatchEdit/CatchEdit';
import AuthContext from '../../contexts/authContext';
import { getById } from '../../services/dataService';

import { MapPinIcon } from '@heroicons/react/24/outline';

// import { StarIcon } from '@heroicons/react/20/solid';

// const reviews = { href: '#', average: 4, totalCount: 117 };

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
// }

export default function CatchDetails() {
    const [catchDetails, setCatchDetails] = useState({});
    const [isEditOpen, setIsEditOpen] = useState(false);
    const { userId } = useContext(AuthContext);
    const { catchId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getById(catchId);
            setCatchDetails(result);
        };

        fetchData();
    }, [catchId]);

    const toggleEditModal = () => {
        setIsEditOpen((oldState) => !oldState);
    };

    const updateCatchDetails = (data) => {
        setCatchDetails(data);
    };

    const deleteClickHandler = () => {
        const result = confirm('Are you sure?');
        console.log(result);
    };

    return (
        <>
            <CatchEdit
                isOpen={isEditOpen}
                toggleModal={toggleEditModal}
                catchId={catchId}
                catchDetails={catchDetails}
                updateCatchDetails={updateCatchDetails}
            />
            <div className='bg-white'>
                {/* Product info */}
                <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-2 lg:pt-2'>
                    <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                        <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                            {catchDetails?.owner?.username}
                            {"'s Catch"}
                        </h1>
                    </div>

                    {/* Options */}
                    <div className='mt-4 lg:row-span-3 lg:mt-0'>
                        <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
                            <img
                                src={catchDetails.imageUrl}
                                alt={catchDetails.fishSpecie}
                                className='h-full w-full object-cover object-center'
                            />
                        </div>

                        <h2 className='sr-only'>Product information</h2>
                        <p className='text-3xl tracking-tight text-gray-900 mt-5 text-center italic'>
                            {catchDetails.fishSpecie} {catchDetails.fishWeight}
                            <span className='text-base uppercase'> kg</span>
                        </p>

                        {/* TODO: Reviews */}
                        {/* <div className='mt-6'>
                        <h3 className='sr-only'>Reviews</h3>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <StarIcon
                                        key={rating}
                                        className={classNames(
                                            reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                            'h-5 w-5 flex-shrink-0'
                                        )}
                                        aria-hidden='true'
                                    />
                                ))}
                            </div>
                            <p className='sr-only'>{reviews.average} out of 5 stars</p>
                        </div>
                    </div> */}

                        {userId === catchDetails?.owner?._id ? (
                            <>
                                <button
                                    onClick={toggleEditModal}
                                    className='mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                    Edit
                                </button>
                                <button
                                    onClick={deleteClickHandler}
                                    className='mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-2 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                    Delete
                                </button>
                            </>
                        ) : null}
                    </div>

                    <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
                        {/* Description and details */}

                        <div className='mt-5'>
                            <h2 className='text-lg font-medium text-gray-900'>Location</h2>

                            <div className='flex justify-start items-center mt-4 pl-2'>
                                <h3 className='text-sm text-gray-700 pr-1'>
                                    <MapPinIcon className='h-5 w-5' />
                                </h3>
                                <p className='text-base font-medium text-gray-600 capitalize'>
                                    {catchDetails.reservoirName}
                                    {', '}
                                    {catchDetails.region}
                                </p>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h2 className='text-lg font-medium text-gray-900'>Details</h2>

                            <div className='mt-4 space-y-6 pl-2'>
                                <p className='text-base font-medium text-gray-600'>{catchDetails.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
