import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface IPostData {
  authorName: string;
  created: number;
  link: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
}

interface ICardProps {
  post: IPostData;
}

export function Card({ post }: ICardProps) {
  const { authorName, created, link, score, title, previewSrc, authorAvatarSrc } = post;

  return (
    <li className={styles.card}>
      <TextContent title={title} authorName={authorName} authorAvatarSrc={authorAvatarSrc} created={created} link={link}/>
      <Preview previewSrc={previewSrc}/>
      <Menu />
      <Controls score={score}/>
    </li>
  );
}
