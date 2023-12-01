import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getById } from '../../services/dataService';

// import { StarIcon } from '@heroicons/react/20/solid';

// const reviews = { href: '#', average: 4, totalCount: 117 };

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ');
// }

// details: 'Big fishy man im telling you';
// fishSpecie: 'Pike';
// fishWeight: 44;
// imageUrl: 'h';
// owner: '656613ae1b7db4e392d463b1';
// region: 'Montana';
// reservoirName: 'Ogosta';
// __v: 0;
// _id: '656681273b183ae2c50c269c';

export default function CatchDetails() {
    const [catchDetails, setCatchDetails] = useState({});
    const { catchId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getById(catchId);
            setCatchDetails(result);
        };

        fetchData();
    }, [catchId]);

    return (
        <div className='bg-white'>
            {/* Product info */}
            <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-4 lg:pt-4'>
                <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                    <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
                        {catchDetails?.owner?.username}
                        {"'s Fish"}
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
                    <p className='text-3xl tracking-tight text-gray-900 mt-6 text-center'>
                        {catchDetails.fishSpecie} / {catchDetails.fishWeight}
                        <span className='text-base uppercase italic'> kg</span>
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

                    {}
                    <button className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                        Edit
                    </button>
                </div>

                <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
                    {/* Description and details */}

                    <div className='mt-8'>
                        <h2 className='text-lg font-medium text-gray-900'>Details</h2>

                        <div className='mt-4 space-y-6'>
                            <p className='text-lg text-gray-600'>{catchDetails.details}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}