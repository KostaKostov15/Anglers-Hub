import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import styles from './Profile.module.css';
import { ArrowLeftOnRectangleIcon, UserIcon, ListBulletIcon } from '@heroicons/react/24/outline';

export default function Profile() {
    const { logoutHandler, userId } = useContext(AuthContext);

    return (
        <div className={styles['profile']}>
            <div className={styles['profile-nav']}>
                <ul>
                    <li>
                        <Link to={`/users/${userId}/profile`}>
                            <UserIcon className='h-5 w-5'></UserIcon>
                            <span>Your Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <ListBulletIcon className='h-5 w-5'></ListBulletIcon>
                            <span>Catches</span>
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
            <div className={styles['profile-content']}>
                <Outlet />
            </div>
        </div>
    );
}
