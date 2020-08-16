import React from 'react';
import styles from './ArtistCover.module.css';

const PLACEHOLDER_IMAGE = 'http://placekitten.com/200/300';

export interface ArtistCoverProps {
  id: string;
  name: string;
  image: string;
}

export const ArtistCover: React.FC<ArtistCoverProps> = ({
  id,
  name,
  image,
}) => {
  const cover = image === '' ? PLACEHOLDER_IMAGE : image;
  return (
    <li className={styles.container} data-testid={`artist-${id}`}>
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
