import React from 'react';
import styles from './sharebutton.css';
import { Icon } from '../../../../Icon';
import { EIcons } from '../../../../Icon/EIcons';

export function ShareButton() {
  return (
    <button className={styles.shareButton}>
      <Icon
        name={EIcons.shareMob}
        size={20}
      />
    </button>
  );
}
