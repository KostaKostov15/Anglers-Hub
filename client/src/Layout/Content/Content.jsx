import { Routes, Route } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import AddLocation from '../../components/AddLocation/AddLocation';
import About from '../../components/About/About';

import styles from './Content.module.css';
import Path from '../../paths';

const Content = () => {
    return (
        <div id='content' className={styles['site-content']}>
            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.Login} element={<Login />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path={Path.AddLocation} element={<AddLocation />} />
                <Route path={Path.About} element={<About />} />
            </Routes>
        </div>
    );
};

export default Content;
