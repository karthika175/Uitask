import React from 'react'
import logo from '../../../assests/logo.png';
import styles from './Header.module.scss';
import Dropdown from './DropDown';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt='logo'></img>
        </div>
        <div className={styles.companyDetails}>
          <div className={styles.details}>
          <h1 className={styles.growfin}>Growfin</h1>
          <p className={styles.dashboard}>DashBoard</p>
          </div>
        </div>
        
        <Dropdown />
      
        </div>
        
        
    </header>
  )
}
