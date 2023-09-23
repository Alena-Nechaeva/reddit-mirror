import React from 'react';
import styles from './userblock.css';
import { Break } from '../../../Break';
import { EColors } from '../../../Text/EColors';
import { Text } from '../../../Text';
import { Icon } from '../../../Icon';
import { EIcons } from '../../../Icon/EIcons';

interface IUserBlockProps {
  avatarSrc?: string;
  userName?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, userName, loading }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=ocxzcALmAUJcPItIoJEY6g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img src={avatarSrc.split('?')[0]} alt="user avatar" className={styles.avatarImage} />
        ) : (
          <Icon name={EIcons.anon} size={50} />
        )}
      </div>
      <div className={styles.username}>
        <Break size={12} />
        {loading ? (
          <Text size={20} color={EColors.grey99}>
            Loading...
          </Text>
        ) : (
          <Text size={20} color={userName ? EColors.black : EColors.grey99}>
            {userName || 'Anonym'}
          </Text>
        )}
      </div>
    </a>
  );
}
