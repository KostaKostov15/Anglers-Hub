import { useContext } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import styles from './Profile.module.css';
import { ArrowLeftOnRectangleIcon, UserIcon, ListBulletIcon } from '@heroicons/react/24/outline';

export default function Profile() {
    const { logoutHandler, userId } = useContext(AuthContext);
    const path = useLocation();

    const endpoints = {
        profileData: `/users/${userId}/profile`,
        profileCatches: `/users/${userId}/catches`,
    };

    return (
        <div className={styles['profile']}>
            <div className={styles['profile-nav']}>
                <ul>
                    <li>
                        <Link
                            className={path.pathname == endpoints.profileData ? styles['active'] : null}
                            to={endpoints.profileData}>
                            <UserIcon className='h-5 w-5'></UserIcon>
                            <span>Your Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={path.pathname == endpoints.profileCatches ? styles['active'] : null}
                            to={endpoints.profileCatches}>
                            <ListBulletIcon className='h-5 w-5'></ListBulletIcon>
                            <span>Your Catches</span>
                        </Link>
                    </li>
                    <li className={styles['alert']}>
                        <Link onClick={logoutHandler}>
                            <ArrowLeftOnRectangleIcon className='h-6 w-6'></ArrowLeftOnRectangleIcon>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles['profile-main']}>
                <Outlet />
            </div>
        </div>
    );
}
