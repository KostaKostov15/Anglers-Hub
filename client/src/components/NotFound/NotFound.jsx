import { Link } from 'react-router-dom';
import Path from '../../paths';

const NotFound = () => {
    return (
        <>
            <div className='grid h-5/6 px-4 bg-white place-content-center'>
                <div className='text-center'>
                    <h1 className='font-black text-gray-200 text-9xl'>404</h1>

                    <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Uh-oh!</p>

                    <p className='mt-4 text-gray-500'>We can&apos;t find that page.</p>

                    <Link
                        to={Path.Home}
                        className='inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-blue-400 rounded hover:bg-blue-500 focus:outline-none focus:ring'>
                        Go Back Home
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;
