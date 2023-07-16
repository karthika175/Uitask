import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import cx from 'classnames';
import styles from './Task.module.scss';

export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const formattedDate = `${date.getDate()} ${date.toLocaleString('default', {
    month: 'short'
  })} ${date.getFullYear()}`;
  return formattedDate;
}

export function getTagClassName(tag, isCompleted) {
   if (tag === 'Overdue') {
      return styles.overdue;
    } else if (tag === 'Upcoming') {
      return styles.upcoming;
    } else {
      return '';
    }
  }

export function findTag(date) {
  const currentDate = new Date();
  const taskDate = new Date(date);

  if (taskDate < currentDate) {
    return 'Overdue';
  } else if (currentDate <= taskDate) {
    return 'Upcoming';
  } else {
    return '';
  }
}

