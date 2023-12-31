import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import BrowseItem from './BrowseItem/BrowseItem';
import Search from './Search/Search';
import Loader from '../Loader/Loader';

import { getAll } from '../../services/dataService';
import Path from '../../paths';

export default function Browse() {
    const [catches, setCatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await getAll();

            setIsLoading(false);

            setCatches(result);
        };

        fetchData();
    }, []);

    const searchCatchesHandler = (foundCatches) => {
        setCatches(foundCatches);
    };

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8'>
                <h2 className='sr-only'>Browse</h2>

                <Search searchHandler={searchCatchesHandler} />

                {isLoading ? (
                    <Loader />
                ) : (
                    <>
                        {catches.length > 0 ? (
                            <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                                {catches.map((singleCatch) => (
                                    <BrowseItem {...singleCatch} key={singleCatch._id} />
                                ))}
                            </div>
                        ) : (
                            <div>
                                <h2 className='text-3xl text-center py-4 font-bold tracking-tight text-slate-600 sm:text-5xl'>
                                    No catches found...
                                </h2>
                                <p className='text-2xl text-center'>
                                    Click{' '}
                                    <Link className='text-sky-600 font-bold' to={Path.CatchCreate}>
                                        here
                                    </Link>{' '}
                                    to create one
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
