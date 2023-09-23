import React from 'react';
import styles from './commentcontrols.css';
import { Icon } from '../../../Icon';
import { EIcons } from '../../../Icon/EIcons';
import { Text } from '../../../Text';
import { EColors } from '../../../Text/EColors';

interface ICommentControlsProps {
  switchReplyForm: () => void;
}

export function CommentControls({ switchReplyForm }: ICommentControlsProps) {
  return (
    <div className={styles.controls}>
      <button className={styles.button} onClick={switchReplyForm}>
        <Icon name={EIcons.comments} size={20} />
        <Text size={14} color={EColors.grey99}>
          Respond
        </Text>
      </button>
      <button className={styles.button}>
        <Icon name={EIcons.share} size={20} />
        <Text size={14} color={EColors.grey99}>
          Share
        </Text>
      </button>
      <button className={styles.button}>
        <Icon name={EIcons.block} size={20} />
        <Text size={14} color={EColors.grey99}>
          Block
        </Text>
      </button>
    </div>
  );
}
