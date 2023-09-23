import React from 'react';
import styles from './title.css';
import { Link } from 'react-router-dom';

interface ITitleProps {
  postId: string;
  title: string;
}

export function Title({ postId, title }: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postId}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  );
}
