import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import styles from './Profile.module.css';
import userImg from '../../assets/user.png';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

export default function Profile() {
    const { logoutHandler, getUserById, userId } = useContext(AuthContext);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(userId);
            setUserData(user);
        };

        fetchUser();
    }, [getUserById, userId]);

    return (
        <div className={styles['profile']}>
            <div className={styles['profile-nav']}>
                <ul>
                    <li>
                        <Link>
                            <span>Collection</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Collection</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Collection</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <span>Collection</span>
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
                <div className={styles['user-data']}>
                    <div className={styles['user-image']}>
                        <img src={userData.imageUrl ? userData.imageUrl : userImg} alt='user-image' />
                    </div>
                    <div>{userData.email}</div>
                </div>
            </div>
        </div>
    );
}
