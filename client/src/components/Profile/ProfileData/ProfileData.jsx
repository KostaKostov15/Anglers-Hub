/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';

import AuthContext from '../../../contexts/authContext';

import userImg from '../../../assets/user.png';
import styles from './ProfileData.module.css';
import dateFormatter from '../../../util/dateFormatter';

export default function ProfileData() {
    const [userData, setUserData] = useState({});
    const { getUserById, userId } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(userId);

            setUserData(user);
        };

        fetchUser();
    }, [getUserById, userId]);

    return (
        <div className={styles['profile-data']}>
            <div className={styles['profile-image']}>
                <img src={userData.imageUrl ? userData.imageUrl : userImg} alt='user-image' />
            </div>
            <div className={styles['profile-content']}>
                <div className={styles['content-row']}>
                    <p className={styles['row-text']}>Email</p>
                    <p>{userData.email}</p>
                </div>
                <div className={styles['content-row']}>
                    <p className={styles['row-text']}>Username</p>
                    <p>{userData.username}</p>
                </div>
                <div className={styles['content-row']}>
                    <p className={styles['row-text']}>User since</p>
                    <p>{userData.createdAt && dateFormatter(userData.createdAt)}</p>
                </div>
            </div>
        </div>
    );
}
