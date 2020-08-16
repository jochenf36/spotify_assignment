import React, { useState, ChangeEvent } from 'react';
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
  const [keyword, setKeyword] = useState('Red');
  const [selectedArtists, setSelectedArtists] = useState(0);
  const { loading, data = { queryArtists: [] } } = useQuery<
    ArtistsData,
    ArtistsVars
  >(GET_ARTISTS, {
    variables: { name: keyword },
  });

  function changeArtist(id: string) {
    const index = data.queryArtists.findIndex(
      (artist: Artist) => artist.id === id
    );
    setSelectedArtists(index);
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setSelectedArtists(0);
    setKeyword(event.target.value);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Search Artists</h1>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Enter a keyword"
          className={styles.searchInput}
          value={keyword}
          onChange={handleInput}
        />
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ArtistsOverview
          artists={data.queryArtists}
          clickedArtist={changeArtist}
          selectedArtist={selectedArtists}
        />
      )}
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <AlbumsOverview albums={data.queryArtists[selectedArtists]?.albums} />
      )}
    </div>
  );
}

export default App;
