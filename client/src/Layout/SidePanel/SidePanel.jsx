import styles from './SidePanel.module.css';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const endpoints = {
    home: '/',
    about: '/about',
};

const SidePanel = () => {
    const path = useLocation();

    return (
        <aside id='aside' className={styles['site-side-panel']}>
            <ul>
                <li>
                    <Link className={path.pathname === endpoints.home ? styles.active : ''} to={'/'}>
                        <HomeIcon className='h-6 w-6'></HomeIcon>
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link className={path.pathname === endpoints.about ? styles.active : ''} to={'/about'}>
                        <InformationCircleIcon className='h-6 w-6'></InformationCircleIcon>
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default SidePanel;
