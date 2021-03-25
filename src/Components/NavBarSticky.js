import React from 'react';
import './CSS/Sticky.css';
import styles from './CSS/NavBar.module.css';
import profile from '../Assets/user.svg'
import { useHistory } from 'react-router-dom';
import { clearLocalStorage } from '../utils/globals.js'

export default function NavBarSticky() {

  const history = useHistory();
  
  const goHome = () => {
    history.push('/');
  }

  const goProfile = () => {
    history.push('/profile');
  }

  const logOut= () => {
    clearLocalStorage();
    goHome();
  }

  return (
    <div className="sticky-inner">
      <div className={styles.navbar}>
        <p className={styles.logo} onClick={goHome}>peppery</p>
        <div className={styles.dropdown}>
          <img src={profile} className={`${styles.profile} ${styles.dropbtn}`} onClick={goProfile} alt="profile"/>
          <div className={styles.dropdownContent}>
            <a className={styles.menuItems} href="#">Profile</a>
            <a className={styles.menuItems} onClick={logOut}>Log out</a> 
          </div>
        </div>
      </div>
    </div>
  );
} 