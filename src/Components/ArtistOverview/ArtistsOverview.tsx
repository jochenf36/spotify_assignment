import React from 'react';
import styles from './ArtistsOverview.module.css';
import { ArtistCover } from '../ArtistCover';
import { Artist } from '../../App';

export interface ArtistsOverviewProps {
  artists: Artist[];
  clickedArtist: (id: string) => void;
}

export const ArtistsOverview: React.FC<ArtistsOverviewProps> = ({
  artists = [],
  clickedArtist,
}) => (
  <>
    <h2 className={styles.title}>Artists</h2>
    {artists.length > 0 ? (
      <ul className={styles.artists}>
        {artists.map((artist) => (
          <ArtistCover
            key={artist.id}
            {...artist}
            clickedArtist={clickedArtist}
          />
        ))}
      </ul>
    ) : (
      <div>No results Found</div>
    )}
  </>
);
