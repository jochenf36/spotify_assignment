import React from 'react';
import styles from './ArtistCover.module.css';

const PLACEHOLDER_IMAGE = 'http://placekitten.com/200/300';

export interface ArtistCoverProps {
  id: string;
  name: string;
  image: string;
  clickedArtist: (id: string) => void;
  isSelected: boolean;
}

export const ArtistCover: React.FC<ArtistCoverProps> = ({
  id,
  name,
  image,
  clickedArtist,
  isSelected,
}) => {
  function onCoverClick() {
    clickedArtist(id);
  }

  const cover = image === '' ? PLACEHOLDER_IMAGE : image;

  const containerClass = [styles.container, isSelected && styles.selected].join(
    ' '
  );

  return (
    <li
      className={containerClass}
      data-testid={`artist-${id}`}
      onClick={onCoverClick}
    >
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
