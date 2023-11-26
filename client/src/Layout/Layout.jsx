import Navbar from './Navbar/Navbar';
import SidePanel from './SidePanel/SidePanel';
import Content from './Content/Content';
import Footer from './Footer/Footer';

import { AuthProvider } from '../contexts/authContext';

import styles from './Layout.module.css';

const Layout = () => {
    return (
        <AuthProvider>
            <div className={styles.container}>
                <Navbar />
                <SidePanel />
                <Content />
                <Footer />
            </div>
        </AuthProvider>
    );
};

export default Layout;
