import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContext';

import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { UserCircleIcon, UserPlusIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const { isAuthenticated, logoutHandler } = useContext(AuthContext);

    return (
        <div id='navbar' className={styles['site-navbar']}>
            <div className={styles['site-title']}>
                <Link to='/'>
                    <div className={styles['site-logo']}>
                        <img src={logo} alt='Site Logo' />
                    </div>
                    <h2>AnglersHub</h2>
                </Link>
            </div>
            <ul>
                {!isAuthenticated && (
                    <>
                        <li>
                            <Link to='/users/login'>
                                <UserCircleIcon className='h-6 w-6'></UserCircleIcon>
                                <span>Log In</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/users/register'>
                                <UserPlusIcon className='h-6 w-6'></UserPlusIcon>
                                <span>Sign Up</span>
                            </Link>
                        </li>
                    </>
                )}

                {isAuthenticated && (
                    <li>
                        <Link onClick={logoutHandler}>
                            <ArrowLeftOnRectangleIcon className='h-6 w-6'></ArrowLeftOnRectangleIcon>
                            <span>Logout</span>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Navbar;
