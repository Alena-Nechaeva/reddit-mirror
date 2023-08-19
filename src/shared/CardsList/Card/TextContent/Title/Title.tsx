import React from 'react';
import styles from './title.css';
import { postsContext } from '../../../../context/postsContext';

interface ITitleProps {
  title: string;
  link: string;
}

export function Title({title, link} : ITitleProps) {

  return (
    <h2 className={styles.title}>
      <a
        href={`http://www.reddit.com/${link}`}
        className={styles.postLink}
      >
        {title}
      </a>
    </h2>
  );
}
