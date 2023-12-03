import { Routes, Route } from 'react-router-dom';

import AuthGuard from '../../guards/AuthGuard';
import GuestGuard from '../../guards/GuestGuard';
import Home from '../../components/Home/Home';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Profile from '../../components/Profile/Profile';
import ProfileData from '../../components/Profile/ProfileData/ProfileData';
import ProfileCatches from '../../components/Profile/ProfileCatches/ProfileCatches';
import CatchCreate from '../../components/CatchCreate/CatchCreate';
import CatchDetails from '../../components/CatchDetails/CatchDetails';
import Browse from '../../components/Browse/Browse';
import About from '../../components/About/About';
import NotFound from '../../components/NotFound/NotFound';

import Path from '../../paths';
import styles from './Content.module.css';

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
                    <Route path={Path.Profile} element={<Profile />}>
                        <Route path={Path.Profile} element={<ProfileData />} />
                        <Route path={Path.ProfileData} element={<ProfileData />} />
                        <Route path={Path.ProfileCatches} element={<ProfileCatches />} />
                    </Route>
                    <Route path={Path.CatchCreate} element={<CatchCreate />} />
                </Route>

                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Content;
