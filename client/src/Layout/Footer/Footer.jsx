import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import Path from '../../paths';

const Footer = () => {
    return (
        <footer id='footer' className={styles['site-footer']}>
            <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
                <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                    © 2023{' '}
                    <Link to={Path.Home} className='hover:underline'>
                        AnglersHub™
                    </Link>
                    . All Rights Reserved.
                </span>
                <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
                    <li>
                        <Link to={Path.About} className='hover:underline me-4 md:me-6'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
