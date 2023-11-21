import Navbar from './Navbar/Navbar';
import SidePanel from './SidePanel/SidePanel';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import styles from './Layout.module.css';
import AuthContext from '../contexts/authContext';

const Layout = () => {
    return (
        <AuthContext.Provider value={'test'}>
            <div className={styles.container}>
                <Navbar />
                <SidePanel />
                <Content />
                <Footer />
            </div>
        </AuthContext.Provider>
    );
};

export default Layout;
