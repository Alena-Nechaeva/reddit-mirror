import React from 'react';
import styles from './userlink.css';

interface IUserLinkProps {
  authorName: string;
  authorAvatarSrc: string;
}

export function UserLink({ authorName, authorAvatarSrc }: IUserLinkProps) {
  authorAvatarSrc = authorAvatarSrc
    ? authorAvatarSrc
    : 'https://cdn.dribbble.com/users/5089804/screenshots/14184341/media/46f4f5a67692e14e4070fe42454832dd.jpg?resize=400x300&vertical=center';

  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={authorAvatarSrc}
        alt="avatar"
      />
      <a
        href="#user-url"
        className={styles.username}
      >
        {authorName}
      </a>
    </div>
  );
}
