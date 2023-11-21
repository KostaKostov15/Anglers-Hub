import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

import styles from './SidePanel.module.css';
import Path from '../../paths';

const SidePanel = () => {
    const path = useLocation();

    return (
        <aside id='aside' className={styles['site-side-panel']}>
            <ul>
                <li>
                    <Link className={path.pathname === Path.Home ? styles.active : ''} to={Path.Home}>
                        <HomeIcon className='h-6 w-6'></HomeIcon>
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link className={path.pathname === Path.About ? styles.active : ''} to={Path.About}>
                        <InformationCircleIcon className='h-6 w-6'></InformationCircleIcon>
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default SidePanel;
