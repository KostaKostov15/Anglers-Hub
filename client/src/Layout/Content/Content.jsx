import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import About from '../../pages/About/About';

import styles from './Content.module.css';
import Path from '../../paths';

const Content = () => {
    return (
        <div id='content' className={styles['site-content']}>
            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.About} element={<About />} />
                <Route path={Path.Login} element={<Login />} />
                <Route path={Path.Register} element={<Register />} />
            </Routes>
        </div>
    );
};

export default Content;
