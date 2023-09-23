import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';

interface IControlsProps {
  score: number;
}

export function Controls({score}: IControlsProps) {
  return (
    <div className={styles.controls}>
      <KarmaCounter score={score}/>
      <CommentsButton />
      <div className={styles.actions}>
        <ShareButton />
        <SaveButton />
      </div>
    </div>
  );
}
