// eslint-disable-next-line react/prop-types
export default function DetailsInput({ value, onChange }) {
    return (
        <div className='col-span-full'>
            <label htmlFor='details' className='block text-sm font-medium leading-6 text-gray-900'>
                Details
            </label>
            <p className='mt-3 text-sm leading-6 text-gray-600'>
                Write a few sentences about the catch, baits or the fishing gear used.
            </p>
            <div className='mt-2'>
                <textarea
                    id='details'
                    name='details'
                    rows={3}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}
