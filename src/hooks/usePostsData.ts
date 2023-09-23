import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../store/tokenSlice';
import { fetchPostsData, selectLoadingsCount } from '../store/postsReducer';

export function usePostsData(ref: React.RefObject<HTMLElement>, selectPostsType: string) {
  const token = useSelector(selectToken);
  const loadingsCount = useSelector(selectLoadingsCount);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadingsCount <= 3) {
          if (token && token.length > 0 && token !== 'undefined') {
            dispatch(fetchPostsData(selectPostsType) as any);
          }
        }
      },
      { rootMargin: '10px' }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref.current, token, loadingsCount, selectPostsType]);
}
