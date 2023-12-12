/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { getByQuery } from '../../../services/dataService';

export default function Search({ searchHandler }) {
    const [searchValue, setSearchValue] = useState('');
    const [categoryOption, setCategoryOption] = useState('region');

    const changeSearchHandler = (e) => {
        setSearchValue(e.target.value);
    };

    const changeCategoryHandler = (e) => {
        setCategoryOption(e.target.value);
    };

    const submitHandler = async () => {
        const result = await getByQuery(categoryOption, searchValue);

        searchHandler(result);
    };

    return (
        <form className='mw-auto mb-8' onSubmit={(e) => e.preventDefault()}>
            <div className='flex'>
                <div className='relative w-full flex'>
                    <select
                        id='category'
                        name='category'
                        value={categoryOption}
                        onChange={changeCategoryHandler}
                        className='block w-1/4 rounded-s-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-base sm:leading-6'>
                        <option value='region'>Location</option>
                        <option value='reservoirName'>Reservoir Name</option>
                        <option value='fishSpecie'>Fish Specie</option>
                        <option value='fishBait'>Bait</option>
                    </select>
                    <input
                        type='search'
                        id='search'
                        name='search'
                        onChange={changeSearchHandler}
                        value={searchValue}
                        className='block w-full  border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
                        placeholder='Search Locations, Fish Species, Baits...'
                    />

                    <button
                        type='submit'
                        onClick={submitHandler}
                        className='p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        <MagnifyingGlassIcon className='w-6 h-6' />
                        <span className='sr-only'>Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
