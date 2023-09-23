import React from 'react';
import styles from './savebutton.css';
import { Icon } from '../../../../Icon';
import { EIcons } from '../../../../Icon/EIcons';

export function SaveButton() {
  return (
    <button className={styles.saveButton}>
      <Icon name={EIcons.saveMob} size={20}/>
    </button>
  );
}
