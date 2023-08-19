import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export interface IPostContextData {
  id: string;
  authorName: string;
  created: number;
  link: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
}

export const postsContext = React.createContext<Array<IPostContextData>>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [data] = usePostsData();

  return (
  <postsContext.Provider value={data}>
    {children}
  </postsContext.Provider>
  );
}
