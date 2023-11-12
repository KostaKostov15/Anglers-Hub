import About from '../../pages/About';
import Home from '../../pages/Home';
import LogIn from '../../pages/LogIn';
import Register from '../../pages/Register';
import styles from './Content.module.css';
import { Routes, Route } from 'react-router-dom';

const Content = () => {
    return (
        <div id='content' className={styles['site-content']}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/users/login' element={<LogIn />} />
                <Route path='/users/register' element={<Register />} />
            </Routes>
        </div>
    );
};

export default Content;
