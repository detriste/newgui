'use client';
import React, { use } from 'react';
import styles from '../style/Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}>Sidebar</h2>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#about" className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#services" className={styles.navLink}>Services</a>
        </li>
        <li className={styles.navItem}>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;