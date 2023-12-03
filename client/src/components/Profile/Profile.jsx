import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import styles from './Profile.module.css';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Profile() {
    const { logoutHandler } = useContext(AuthContext);

    return (
        <div className={styles['profile-nav']}>
            <ul>
                <li>
                    <Link onClick={logoutHandler}>
                        <ArrowLeftOnRectangleIcon className='h-6 w-6'></ArrowLeftOnRectangleIcon>
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
