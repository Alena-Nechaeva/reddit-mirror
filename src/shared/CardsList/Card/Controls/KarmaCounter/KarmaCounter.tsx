import React, { useState } from 'react';
import styles from './karmacounter.css';
import { Icon } from '../../../../Icon';
import { EIcons } from '../../../../Icon/EIcons';

interface IKarmaCounterProps {
  score: number;
}

export function KarmaCounter({score}: IKarmaCounterProps) {
  const [karmaValue, setKarmaValue] = useState(score);

  function increaseHandler() {
    setKarmaValue((prevCount) => prevCount + 1);
  }

  function reduceHandler() {
    if (karmaValue > 0) {
      setKarmaValue((prevCount) => prevCount - 1);
    } else setKarmaValue(0);
  }

  return (
    <div className={styles.karmaCounter}>
      <button
        className={styles.up}
        onClick={increaseHandler}
      >
        <Icon
          name={EIcons.karma}
          size={20}
        />
      </button>
      <span className={styles.karmaValue}>{karmaValue}</span>
      <button
        className={styles.down}
        onClick={reduceHandler}
      >
        <Icon
          name={EIcons.karma}
          size={20}
        />
      </button>
    </div>
  );
}
