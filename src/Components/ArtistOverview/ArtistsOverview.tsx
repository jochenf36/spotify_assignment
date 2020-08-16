import React from 'react';
import styles from './ArtistsOverview.module.css';
import { ArtistCover } from '../ArtistCover';
import { Artist } from '../../App';

export interface ArtistsOverviewProps {
  artists: Artist[];
  clickedArtist: (id: string) => void;
  selectedArtist?: number;
}

export const ArtistsOverview: React.FC<ArtistsOverviewProps> = ({
  artists = [],
  clickedArtist,
  selectedArtist,
}) => (
  <>
    <h2 className={styles.title}>Artists</h2>
    {artists.length > 0 ? (
      <ul className={styles.artists}>
        {artists.map((artist, i) => (
          <ArtistCover
            key={artist.id}
            {...artist}
            clickedArtist={clickedArtist}
            isSelected={i === selectedArtist || false}
          />
        ))}
      </ul>
    ) : (
      <div>No results Found</div>
    )}
  </>
);
