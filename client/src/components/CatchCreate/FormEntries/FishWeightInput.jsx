// eslint-disable-next-line react/prop-types
export default function FishWeightInput({ value, onChange }) {
    return (
        <div className='sm:col-span-3'>
            <label htmlFor='fishWeight' className='block text-sm font-medium leading-6 text-gray-900'>
                Weight [kg] *
            </label>
            <div className='mt-2'>
                <input
                    value={value}
                    onChange={onChange}
                    type='number'
                    step={1}
                    min={0}
                    max={400}
                    name='fishWeight'
                    id='fishWeight'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                />
            </div>
        </div>
    );
}
