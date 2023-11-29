import { MapPinIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
export default function BrowseItem({ _id, imageUrl, fishSpecie }) {
    return (
        <a key={_id} href={imageUrl} className='group'>
            <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                <img
                    src={imageUrl}
                    alt={fishSpecie}
                    className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
            </div>
            <h3 className='mt-4 text-sm text-gray-700'>
                <MapPinIcon />
            </h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>{fishSpecie}</p>
        </a>
    );
}
