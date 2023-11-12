import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div id='navbar' className={styles['site-navbar']}>
            <h2>Navbar</h2>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/users/login'>Sign In</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
