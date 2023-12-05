/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../../contexts/authContext';

import { MapPinIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';

export default function BrowseItem({ _id, imageUrl, reservoirName, region, fishWeight, fishSpecie, owner }) {
    const { userId } = useContext(AuthContext);

    return (
        <Link key={_id} to={`/data/${_id}/details`} className='group border-2 rounded-lg overflow-hidden'>
            <div className='aspect-h-1 aspect-w-1 w-full  overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                <img
                    src={imageUrl}
                    alt='fishImage'
                    className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
            </div>

            <div className='flex justify-center items-center mt-2 gap-2'>
                <h3 className='text-sm text-gray-700'>
                    <MapPinIcon className='h-5 w-5' />
                </h3>
                <p className=' text-sm font-medium text-gray-900 capitalize'>{reservoirName}, </p>
                <p className=' text-sm font-medium text-gray-900 capitalize'>{region}</p>
            </div>

            <div className='flex justify-center items-center mb-1 gap-4'>
                {userId === owner ? <CheckBadgeIcon className='h-5 w-5 text-cyan-600' /> : null}
                <h3 className='text-sm font-semibold text-gray-600 py-1'>{fishSpecie}</h3>
                <p className='text-sm font-medium text-gray-600'>{fishWeight} kg</p>
            </div>
        </Link>
    );
}
