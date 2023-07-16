import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Task.module.scss';
import {formatDate,getTagClassName,findTag} from './TaskHelper';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import cx from 'classnames';

const Task = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or asynchronous operation to fetch tasks
    // Set loading to false after a short timeout to simulate data fetching
    setTimeout(() => {
      setLoading(false);
    }, 200); // Replace this with actual API call or async operation duration
  }, []);

  const handleTaskCompletion = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks];
      const taskIndex = updatedCompletedTasks.indexOf(index);
      if (taskIndex > -1) {
        // Task is already completed, so remove it from the completed tasks list
        updatedCompletedTasks.splice(taskIndex, 1);
      } else {
        // Task is not completed, so add it to the completed tasks list
        updatedCompletedTasks.push(index);
        
      }
      return updatedCompletedTasks;
    });
  };

  const isTaskCompleted = (index) => {
    return completedTasks.includes(index);
  };

  const getUncompletedTasksCount = () => {
    const completedCount = completedTasks.length;
    const upcomingCount = tasks.filter(
      (item, index) => findTag(item.date) === 'Upcoming'
    ).length;
    const overdueCount = tasks.filter(
      (item, index) => findTag(item.date) === 'Overdue'
    ).length;
    return upcomingCount + overdueCount - completedCount;
  };
  

  return (
    <>
    <div className={styles.title}>
        <h2 className={styles.titleName}>Tasks ({getUncompletedTasksCount()})</h2>
        </div>
        {loading ? (
        <div className={styles.loader}>
          {/* Replace this with your desired loader component or animation */}
          Loading...
        </div>
      ) : (
    <div className={styles.taskMainContainer}>
      <div className={styles.taskSubContainer}>
        {tasks.map((item, index) => (
          <div key={index} className={styles.taskItem}>
            <div
              className={styles.icon}
              onClick={() => handleTaskCompletion(index)}
              style={{ opacity: isTaskCompleted(index) ? 0.5 : 1 }}
            >
              <AiOutlineCheckCircle
                className={isTaskCompleted(index) ? styles.completed : ''}
              />
            </div>
            <div className={styles.taskDetail}>
              <h3 className={isTaskCompleted(index) ? styles.completed : ''}>
                {item.title}
              </h3>
              <p className={styles.dateFormat}>
                {formatDate(item.date)}
              </p>
            </div>
           
  {/* <p className={styles.tagName}>{isTaskCompleted(index) ? 'Completed' : findTag(item.date)}</p> */}
  {isTaskCompleted(index)? 
   (<div className={cx(styles.tag, styles.completedTag)}>
   <p className={styles.tagName}>Completed </p>
   </div>)
  :(
    <div className={cx(styles.tag, getTagClassName(findTag(item.date)))}>
      <p className={styles.tagName}>{findTag(item.date)}</p>
      </div>
  )
  
  }
</div>
            

       
        ))}
      </div>
      
    </div>
      )}
    </>
  );

  
};

export default Task;
