import { Link } from 'react-router-dom';
import dateFormatter from '../../../util/dateFormatter';

/* eslint-disable react/prop-types */
export default function ProfileCatchesItem({ _id, imageUrl, fishSpecie, fishWeight, owner, createdAt }) {
    return (
        <Link to={`/data/${_id}/details`}>
            <li className='flex justify-between gap-x-6 py-5'>
                <div className='flex min-w-0 gap-x-4 items-center'>
                    <img className='h-16 w-16 flex-none rounded-full bg-gray-50' src={imageUrl} alt='' />
                    <div className='min-w-0 flex-auto'>
                        <p className='text-base font-semibold leading-6 text-gray-900'>{fishSpecie}</p>
                        <p className='mt-1 truncate text-base leading-5 text-gray-500'>{fishWeight} kg</p>
                    </div>
                </div>
                <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
                    <p className='text-sm leading-6 text-gray-900'>{owner?.email}</p>
                    <p className='mt-1 text-xs leading-5 text-gray-500'>
                        Created <time dateTime={createdAt}>{dateFormatter(createdAt)}</time>
                    </p>
                </div>
            </li>
        </Link>
    );
}
