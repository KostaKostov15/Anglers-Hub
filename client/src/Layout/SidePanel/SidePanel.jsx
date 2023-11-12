import styles from './SidePanel.module.css';

const SidePanel = () => {
    return (
        <aside id='aside' className={styles['site-side-panel']}>
            <p>Aside content</p>
        </aside>
    );
};

export default SidePanel;
