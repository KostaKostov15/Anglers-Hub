import { Routes, Route } from 'react-router-dom';

import AuthGuard from '../../guards/AuthGuard';
import GuestGuard from '../../guards/GuestGuard';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import CatchCreate from '../../components/CatchCreate/CatchCreate';
import CatchDetails from '../../components/CatchDetails/CatchDetails';
import About from '../../components/About/About';

import Path from '../../paths';
import styles from './Content.module.css';
import NotFound from '../../components/NotFound/NotFound';
import Browse from '../../components/Browse/Browse';

const Content = () => {
    return (
        <div id='content' className={styles['site-content']}>
            <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.About} element={<About />} />
                <Route path={Path.Browse} element={<Browse />} />
                <Route path={Path.CatchDetails} element={<CatchDetails />} />

                <Route element={<GuestGuard />}>
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Register} element={<Register />} />
                </Route>

                <Route element={<AuthGuard />}>
                    <Route path={Path.CatchCreate} element={<CatchCreate />} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Content;
