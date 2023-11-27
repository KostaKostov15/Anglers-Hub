import { Routes, Route } from 'react-router-dom';

import AuthGuard from '../../guards/AuthGuard';
import GuestGuard from '../../guards/GuestGuard';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import AddCatch from '../../components/AddCatch/AddCatch';
import About from '../../components/About/About';

import Path from '../../paths';
import styles from './Content.module.css';

const Content = () => {
    return (
        <div id='content' className={styles['site-content']}>
            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.About} element={<About />} />

                <Route element={<GuestGuard />}>
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                </Route>

                <Route element={<AuthGuard />}>
                    <Route path={Path.AddCatch} element={<AddCatch />} />
                </Route>
            </Routes>
        </div>
    );
};

export default Content;
