import styles from './SidePanel.module.css';
import { Link } from 'react-router-dom';
import { HomeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const SidePanel = () => {
    return (
        <aside id='aside' className={styles['site-side-panel']}>
            <ul>
                <li>
                    <Link to={'/'}>
                        <HomeIcon className='h-6 w-6'></HomeIcon>
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to={'/about'}>
                        <InformationCircleIcon className='h-6 w-6'></InformationCircleIcon>
                        <span>About</span>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default SidePanel;
