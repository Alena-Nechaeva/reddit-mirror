import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';
import { UserLink } from './UserLink/UserLink';

interface ITextContentProps {
  title: string;
  authorName: string;
  authorAvatarSrc: string;
  created: number;
  link: string;
}

export function TextContent({ title, authorName, authorAvatarSrc, created, link }: ITextContentProps) {
  const createdTime = () => {
    const apiTime: Date = new Date(created * 1000);
    const today: Date = new Date();
    const difference: number = today.getTime() - apiTime.getTime();
    const hoursDifference: number = Math.floor(difference / (1000 * 360));
    const daysDifference: number = Math.floor(difference / (1000 * 360 * 24));

    if (hoursDifference < 23)
      return hoursDifference === 1 ? `${hoursDifference} hour ago` : `${hoursDifference} hours ago`;

    return daysDifference === 1 ? `${daysDifference} day ago` : `${daysDifference} days ago`;
  };

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <UserLink
          authorName={authorName}
          authorAvatarSrc={authorAvatarSrc}
        />
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>published </span>
          {createdTime()}
        </span>
      </div>
      <Title title={title} link={link}/>
    </div>
  );
}
