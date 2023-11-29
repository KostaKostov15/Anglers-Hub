import { MapPinIcon } from '@heroicons/react/24/outline';

// eslint-disable-next-line react/prop-types
export default function BrowseItem({ _id, imageUrl, reservoirName, region, fishWeight, fishSpecie }) {
    return (
        <a key={_id} href={imageUrl} className='group border-2 rounded-lg overflow-hidden'>
            <div className='aspect-h-1 aspect-w-1 w-full  overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                <img
                    src={imageUrl}
                    alt='fishImage'
                    className='h-full w-full object-cover object-center group-hover:opacity-75'
                />
            </div>

            <div className='flex justify-center items-center mt-1'>
                <h3 className='text-sm text-gray-700 pr-1'>
                    <MapPinIcon className='h-5 w-5' />
                </h3>
                <p className='mt-1 text-sm font-medium text-gray-900 capitalize'>
                    {reservoirName}
                    {', '}
                    {region}
                </p>
            </div>

            <div className='flex justify-center items-center mb-1'>
                <h3 className='text-sm font-semibold text-gray-600 pr-2'>{fishSpecie}</h3>
                <p className='text-sm font-medium text-gray-600'>{fishWeight} kg</p>
            </div>
        </a>
    );
}
