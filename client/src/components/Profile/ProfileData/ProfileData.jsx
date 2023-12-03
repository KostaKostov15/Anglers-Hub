/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';

import AuthContext from '../../../contexts/authContext';

import userImg from '../../../assets/user.png';
import styles from './ProfileData.module.css';

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
            <div>{userData.email}</div>
        </div>
    );
}
