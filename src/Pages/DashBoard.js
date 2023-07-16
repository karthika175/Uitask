import React from 'react'
import { Header } from './Molecules/Header/Header';
import styles from './DashBoard.module.scss';
import { Widget } from './Molecules/DashBoardWidget/Widget';
const DashBoard = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.subContainer}>
        <Widget />
      </div>
    </div>
  )
}
export default DashBoard;
