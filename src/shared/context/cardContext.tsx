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

export const cardContext = React.createContext<IPostContextData>({  
    id: '',
    authorName: '',
    created: 0,
    link: '',
    previewSrc: '',
    score: 0,
    title: '',
    authorAvatarSrc: '',
});

// export const cardContext = React.createContext({});

export function CardContextProvider({ children, post }: { children: React.ReactNode, post: IPostContextData }) {

  return (
  <cardContext.Provider value={post}>
    {children}
  </cardContext.Provider>
  );
}