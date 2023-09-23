import React from 'react';
import styles from './cardslist.css';
import { Card } from './Card/Card';
import { usePostsData } from '../../hooks/usePostsData';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import {
  selectLoadingsCount,
  selectPostsData,
  selectPostsError,
  selectPostsLoading,
  setLoadingsCount,
} from '../../store/postsReducer';
import { selectPostsType } from '../../store/postsTypeReducer';
import { generateRandomString } from '../utils/react/generateRandomString';

interface IPostData {
  id: string;
  authorName: string;
  created: number;
  image: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
  cursor: string;
}

export function CardsList() {
  const postsType = useSelector(selectPostsType);
  const data = useSelector(selectPostsData);
  const loading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);
  const loadingsCount = useSelector(selectLoadingsCount) - 1;
  const dispatch = useDispatch();
  const bottomOfList = React.useRef<HTMLDivElement>(null);

  usePostsData(bottomOfList, postsType);

  return (
    <>
      {error && <p style={{ textAlign: 'center' }}>{error}</p>}
      {data?.length === 0 && !loading && !error && (
        <p style={{ textAlign: 'center' }}>There are no posts here...may be you should login</p>
      )}

      <ul className={styles.cardsList}>
        {data && data.map((post: IPostData) => <Card key={post.id + generateRandomString()} post={post} />)}
      </ul>
      <div ref={bottomOfList}></div>

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {loadingsCount === 3 && (
        <div className={styles.loadMore}>
          <button
            className={styles.loadMoreBtn}
            onClick={() => {
              dispatch(setLoadingsCount(0));
            }}
          >
            Load more content
          </button>
        </div>
      )}
    </>
  );
}
