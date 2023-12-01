// eslint-disable-next-line react/prop-types
export default function ImageUrlInput({ value, onChange }) {
    return (
        <div className='col-span-full'>
            <label htmlFor='imageUrl' className='block text-sm font-medium leading-6 text-gray-900'>
                Image Url *
            </label>
            <div className='mt-2'>
                <input
                    value={value}
                    onChange={onChange}
                    id='imageUrl'
                    name='imageUrl'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
            </div>
        </div>
    );
}
