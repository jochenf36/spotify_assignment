import React from 'react';
import styles from './AlbumsOverview.module.css';
import { AlbumCoverProps, AlbumCover } from '../AlbumCover';

type albums = AlbumCoverProps[];

export interface AlbumsOverviewProps {
  albums: albums;
}

export const AlbumsOverview: React.FC<AlbumsOverviewProps> = ({
  albums = [],
}) => (
  <>
    <h2 className={styles.title}>Albums</h2>
    {albums.length > 0 ? (
      <ul className={styles.albums}>
        {albums.map((album) => (
          <AlbumCover {...album} key={album.id} />
        ))}
      </ul>
    ) : (
      <div>No results Found</div>
    )}
  </>
);
