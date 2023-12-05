/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';

import Loader from '../../Loader/Loader';
import AuthContext from '../../../contexts/authContext';
import dateFormatter from '../../../util/dateFormatter';

import styles from './ProfileData.module.css';
import userImg from '../../../assets/user.png';

export default function ProfileData() {
    const [userData, setUserData] = useState({});

    const { getUserById, userId, isLoading } = useContext(AuthContext);

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUserById(userId);

            setUserData(user);
        };

        fetchUser();
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles['profile-data']}>
                    <div className='flex items-start gap-1'>
                        <div className={styles['profile-image']}>
                            <img src={userData.imageUrl ? userData.imageUrl : userImg} alt='user-image' />
                        </div>
                    </div>

                    <div className='relative overflow-x-auto mt-8'>
                        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>
                                        Email
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        Username
                                    </th>
                                    <th scope='col' className='px-6 py-3'>
                                        User Since
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <th
                                        scope='row'
                                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                        {userData.email}
                                    </th>
                                    <td className='px-6 py-4'>{userData.username}</td>
                                    <td className='px-6 py-4'>{dateFormatter(userData.createdAt)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}
