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
                        className='block p-2.5 w-1/5 text-sm text-gray-900 bg-gray-50 rounded-s-lg border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'>
                        <option value='region'>Location</option>
                        <option value='fishSpecie'>Fish Specie</option>
                        <option value='fishBait'>Bait</option>
                    </select>
                    <input
                        type='search'
                        id='search'
                        name='search'
                        onChange={changeSearchHandler}
                        value={searchValue}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
                        placeholder='Search Locations, Fish Species, Baits...'
                    />
                    <button
                        type='submit'
                        onClick={submitHandler}
                        className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        <MagnifyingGlassIcon className='w-5 h-5' />
                        <span className='sr-only'>Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
