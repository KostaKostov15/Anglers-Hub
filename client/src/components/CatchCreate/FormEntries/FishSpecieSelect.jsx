// eslint-disable-next-line react/prop-types
export default function FishSpecieSelect({ value, onChange }) {
    return (
        <div className='sm:col-span-3'>
            <label htmlFor='fishSpecie' className='block text-sm font-medium leading-6 text-gray-900'>
                Fish Specie *
            </label>
            <div className='mt-2'>
                <select
                    id='fishSpecie'
                    name='fishSpecie'
                    value={value}
                    onChange={onChange}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'>
                    <option value=''>---</option>
                    <option value='Pike'>Pike</option>
                    <option value='Trout'>Trout</option>
                    <option value='Perch'>Perch</option>
                    <option value='Carp'>Carp</option>
                    <option value='Catfish'>Catfish</option>
                    <option value='Sturgeon'>Sturgeon</option>
                </select>
            </div>
        </div>
    );
}
