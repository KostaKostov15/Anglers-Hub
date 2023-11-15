import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { UserCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
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
            </ul>
        </div>
    );
};

export default Navbar;
