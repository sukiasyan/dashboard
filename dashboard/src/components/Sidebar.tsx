import styles from './Sidebar.module.scss';
import samanthaImg from '../assets/png/samantha.png';

export default function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.profileDetails}>
            <div className={styles.profileImageDiv}>
              <img src={samanthaImg} alt='samahtha' />
              <p className={styles.notifications}>4</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
