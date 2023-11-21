import Navbar from './Navbar/Navbar';
import SidePanel from './SidePanel/SidePanel';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import AuthContext from '../contexts/authContext';

import styles from './Layout.module.css';

const Layout = () => {
    return (
        <AuthContext.Provider value={'test-context'}>
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
