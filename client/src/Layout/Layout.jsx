import Navbar from './Navbar/Navbar';
import SidePanel from './SidePanel/SidePanel';
import Content from './Content/Content';

const Layout = () => {
    return (
        <div className='grid grid-cols-12 gap-2 w-full h-screen bg-red-300'>
            <Navbar />
            <SidePanel />
            <Content />
        </div>
    );
};

export default Layout;
