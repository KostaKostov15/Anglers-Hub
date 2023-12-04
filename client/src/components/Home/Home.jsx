import { useEffect, useState } from 'react';

import { getLatest } from '../../services/dataService';
import BrowseItem from '../Browse/BrowseItem/BrowseItem';
import Loader from '../Loader/Loader';
import hero from '../../assets/hero.jpg';
import Path from '../../paths';
import { Link } from 'react-router-dom';

const links = [
    { name: 'Add catch', to: `${Path.CatchCreate}` },
    { name: 'Browse catches', to: `${Path.Browse}` },
    { name: 'About', to: `${Path.About}` },
];

export default function Home() {
    const [latestCatches, setLatestCatches] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
        <>
            <div className='relative isolate overflow-hidden bg-gray-900 py-36 sm:py-48'>
                <img
                    src={hero}
                    alt='hero-image'
                    className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center'
                />
                <div
                    className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
                    aria-hidden='true'>
                    <div
                        className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div
                    className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
                    aria-hidden='true'>
                    <div
                        className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='mx-auto max-w-2xl lg:mx-0'>
                        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-5xl'>
                            Welcome to Anglers Hub
                        </h2>
                        <p className='mt-6 text-lg leading-8 text-gray-300'>
                            Dive into the world of angling with Anglers Hub, the go-to platform for passionate anglers
                            to chronicle their fishing escapades. Whether you&apos;re a seasoned angler or a beginner,
                            this platform is designed to help you effortlessly log and share every thrilling moment you
                            spend on the water.
                        </p>
                    </div>
                    <div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
                        <div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10'>
                            {links.map((link) => (
                                <Link key={link.name} to={link.to}>
                                    {link.name} <span aria-hidden='true'>&rarr;</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className='mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8'>
                    <h2 className='font-raleway text-3xl text-center py-4 font-bold tracking-tight text-slate-600 sm:text-5xl'>
                        Latest Catches
                    </h2>

                    {isLoading ? (
                        <Loader />
                    ) : (
                        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
                            {latestCatches.map((singleCatch) => (
                                <BrowseItem {...singleCatch} key={singleCatch._id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
