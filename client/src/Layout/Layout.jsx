import Navbar from './Navbar/Navbar';
import SidePanel from './SidePanel/SidePanel';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import styles from './Layout.module.css';

const Layout = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <SidePanel />
            <Content />
            <Footer />
        </div>
    );
};

export default Layout;
