import React, { useContext } from 'react';
import axios from 'axios';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';

interface IPostData {
  id: string;
  authorName: string;
  created: number;
  image: string;
  previewSrc: string;
  score: number;
  title: string;
  authorAvatarSrc: string;
}

interface ICardProps {
  post: IPostData;
}

export function Card({ post }: ICardProps) {
  const { id, authorName, created, image, score, title, previewSrc, authorAvatarSrc } = post;

  return (
    <li className={styles.card}>
      <TextContent
        postId={id}
        title={title}
        authorName={authorName}
        authorAvatarSrc={authorAvatarSrc}
        created={created}
        image={image}
      />
      <Preview previewSrc={previewSrc} />
      <Menu />
      <Controls score={score} />
    </li>
  );
}
