import React from 'react';
import styles from './ArtistsOverview.module.css';
import { ArtistCoverProps, ArtistCover } from '../ArtistCover';

type artists = ArtistCoverProps[];

export interface ArtistsOverviewProps {
  artists: artists;
}

export const ArtistsOverview: React.FC<ArtistsOverviewProps> = ({
  artists,
}) => (
  <>
    <h2 className={styles.title}>Artists</h2>
    <ul className={styles.artists}>
      {artists.map((artist) => (
        <ArtistCover {...artist} key={artist.id} />
      ))}
    </ul>
  </>
);
