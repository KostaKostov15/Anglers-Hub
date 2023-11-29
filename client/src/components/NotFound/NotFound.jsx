import { Link } from 'react-router-dom';
import Path from '../../paths';

const NotFound = () => {
    return (
        <>
            <div className='grid h-5/6 px-4 bg-white place-content-center'>
                <div className='text-center'>
                    <h1 className='font-black text-gray-200 text-9xl'>404</h1>

                    <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Page not found</p>

                    <p className='mt-4 text-gray-500'>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>

                    <Link
                        to={Path.Home}
                        className='inline-block px-5 py-2 mt-6 text-sm font-medium text-white bg-blue-400 rounded hover:bg-blue-500 focus:outline-none focus:ring'>
                        Go back home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
