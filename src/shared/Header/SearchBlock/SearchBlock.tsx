import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
  const { name, userImg, loading } = useUserData();

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={userImg} userName={name} loading={loading}/>
    </div>
  );
}
