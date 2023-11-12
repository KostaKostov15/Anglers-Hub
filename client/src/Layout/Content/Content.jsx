import About from '../../pages/About';
import Home from '../../pages/Home';
import styles from './Content.module.css';
import { Routes, Route } from 'react-router-dom';

const Content = () => {
    return (
        <div id='content' className={styles['site-content']}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    );
};

export default Content;
