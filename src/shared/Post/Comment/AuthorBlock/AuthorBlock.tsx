import React from 'react';
import styles from './authorblock.css';
import { Icon } from '../../../Icon';
import { EIcons } from '../../../Icon/EIcons';
import { EColors } from '../../../Text/EColors';
import { Text } from '../../../Text';
import { getTimeFromUTC } from '../../../utils/js/getTimeFromUTC';

interface IAuthorBlockProps {
  author: string;
  created: number;
  subreddit: string;
  hideElem: () => void;
  showElem: () => void;
}

export function AuthorBlock({ author, created, subreddit, hideElem, showElem }: IAuthorBlockProps) {
  return (
    <div className={styles.authorBlock}>
      <div className={styles.hideBlock}>
        <button className={styles.hide} onClick={hideElem}>
          <Icon name={EIcons.karma} size={20} />
        </button>
        <button className={styles.show} onClick={showElem}>
          <Icon name={EIcons.karma} size={20} />
        </button>
      </div>
      <div className={styles.userLink}>
        <img
          className={styles.avatar}
          src="https://cdn.dribbble.com/userupload/5850785/file/original-9a28e6b133c509fdb7002aa15493d807.jpg?resize=400x300&vertical=center"
          alt="avatar"
        />
        <Text size={14} color={EColors.orange}>
          {author}
        </Text>
      </div>
      <Text size={14} color={EColors.grey99}>
        {getTimeFromUTC(created)}
      </Text>
      <span className={styles.league}>
        <Text size={14}>{subreddit}</Text>
      </span>
    </div>
  );
}
