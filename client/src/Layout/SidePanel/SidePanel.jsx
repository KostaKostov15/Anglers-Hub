import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';
import { HomeIcon, InformationCircleIcon, PlusCircleIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/outline';

import styles from './SidePanel.module.css';
import Path from '../../paths';

const SidePanel = () => {
    const path = useLocation();
    const { isAuthenticated } = useContext(AuthContext);

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
                    <Link className={path.pathname === Path.Browse ? styles.active : ''} to={Path.Browse}>
                        <GlobeEuropeAfricaIcon className='h-6 w-6'></GlobeEuropeAfricaIcon>
                        <span>Browse</span>
                    </Link>
                </li>

                {isAuthenticated && (
                    <li>
                        <Link className={path.pathname === Path.CatchCreate ? styles.active : ''} to={Path.CatchCreate}>
                            <PlusCircleIcon className='h-6 w-6'></PlusCircleIcon>
                            <span>Add catch</span>
                        </Link>
                    </li>
                )}

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
