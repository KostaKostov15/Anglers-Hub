import { useEffect, useState } from 'react';
import {} from 'react-router-dom';
import { getLatest } from '../../services/dataService';
import BrowseItem from '../Browse/BrowseItem/BrowseItem';
import Loader from '../Loader/Loader';

export default function Home() {
    const [latestCatches, setLatestCatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await getLatest();

            setIsLoading(false);
            setLatestCatches(result);
        };

        fetchData();
    }, []);

    return (
        <div className='bg-white'>
            <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8'>
                <h2>Latest Catches</h2>

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                        {latestCatches.map((singleCatch) => (
                            <BrowseItem {...singleCatch} key={singleCatch._id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
