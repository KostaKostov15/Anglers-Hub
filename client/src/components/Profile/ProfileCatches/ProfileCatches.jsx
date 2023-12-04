import { useContext, useEffect, useState } from 'react';

import ProfileCatchesItem from './ProfileCatchesItem';
import { getAllByUserId } from '../../../services/dataService';
import AuthContext from '../../../contexts/authContext';

import styles from './ProfileCatches.module.css';
import { Link } from 'react-router-dom';
import Path from '../../../paths';
import Loader from '../../Loader/Loader';

export default function ProfileCatches() {
    const [userCatches, setUserCatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { userId } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await getAllByUserId(userId);

            setUserCatches(result);
            setIsLoading(false);
        };

        fetchData();
    }, [userId]);

    return (
        <>
            {isLoading && <Loader />}

            {userCatches.length === 0 && !isLoading && (
                <p className={styles['catches-info']}>
                    No catches yet! <Link to={Path.CatchCreate}>Click Here</Link> to create one
                </p>
            )}

            {userCatches.length > 0 && !isLoading && (
                <ul role='list' className='divide-y divide-gray-100'>
                    {userCatches.map((singleCatch) => (
                        <ProfileCatchesItem key={singleCatch._id} {...singleCatch} />
                    ))}
                </ul>
            )}
        </>
    );
}
