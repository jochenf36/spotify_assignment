import React, { useState } from 'react';
import styles from './App.module.css';
import { ArtistsOverview } from './Components/ArtistOverview';
import { AlbumsOverview } from './Components/AlbumsOverview';

import { useQuery } from '@apollo/client';
import { GET_ARTISTS, ArtistsVars, ArtistsData } from './gqls';

export interface Artist {
  id: string;
  name: string;
  image: string;
  albums: Album[];
}

interface Album {
  id: string;
  name: string;
  image: string;
}

function App() {
  const [selectedArtists, setSelectedArtists] = useState(0);

  //TODO: Make name dynamic
  const { loading, error, data = { queryArtists: [] } } = useQuery<
    ArtistsData,
    ArtistsVars
  >(GET_ARTISTS, {
    variables: { name: 'red' },
  });

  if (error) return <p>Error :(</p>;

  function changeArtist(id: string) {
    const index = data.queryArtists.findIndex(
      (artist: Artist) => artist.id === id
    );
    setSelectedArtists(index);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Artists</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ArtistsOverview
          artists={data.queryArtists}
          clickedArtist={changeArtist}
        />
      )}
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AlbumsOverview albums={data.queryArtists[selectedArtists].albums} />
      )}
    </div>
  );
}

export default App;
