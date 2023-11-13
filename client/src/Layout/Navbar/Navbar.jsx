import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id='navbar' className={styles['site-navbar']}>
            <div className={styles['site-title']}>
                <div className={styles['site-logo']}>
                    <Link to='/'>
                        <img src={logo} alt='Site Logo' />
                    </Link>
                </div>
                <h2>AnglersHub</h2>
            </div>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/users/login'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='w-6 h-6'>
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                        </svg>
                        <span>Sign In</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
