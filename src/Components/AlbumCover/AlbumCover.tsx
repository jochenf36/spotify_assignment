import React from 'react';
import styles from './AlbumCover.module.css';

const PLACEHOLDER_IMAGE = 'http://placekitten.com/200/300';

export interface AlbumCoverProps {
  id: string;
  name: string;
  image: string;
}

export const AlbumCover: React.FC<AlbumCoverProps> = ({ id, name, image }) => {
  const cover = image === '' ? PLACEHOLDER_IMAGE : image;
  return (
    <li className={styles.container} data-testid={`album-${id}`}>
      <img
        className={styles.cover}
        src={cover}
        alt={`${name}-cover`}
        loading="lazy"
      />
      <span className={styles.title}>{name}</span>
    </li>
  );
};
