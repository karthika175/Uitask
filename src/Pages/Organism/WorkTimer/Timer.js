import React, { useState, useEffect } from 'react';
import styles from './WorkTimer.module.scss';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let intervalId = null;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIsPaused(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div className={styles.title}>
        <h2 className={styles.titleName}>Work Timer</h2>
      </div>

      <div className={styles.timer}>
        <div className={styles.displayTime}>
          <div className={styles.time}>{formatTime(timer)}</div>
          <p className={styles.timeFormat}>HH:MM:SS</p>
        </div>
        <div className={styles.controls}>
          {isRunning ? (
            <>
              <button className={styles.pauseButton} onClick={pauseTimer}>
                Pause
              </button>
              <button className={styles.stopButton} onClick={stopTimer}>
                Stop
              </button>
            </>
          ) : (
            <button className={styles.startButton} onClick={startTimer}>
              Start
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Timer;
