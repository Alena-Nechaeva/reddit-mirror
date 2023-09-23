import React from 'react';
import styles from './commentsbutton.css';
import { Icon } from '../../../../Icon';
import { EIcons } from '../../../../Icon/EIcons';

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcons.commentsMob} />
      <span className={styles.commentsNumber}>13</span>
    </button>
  );
}
