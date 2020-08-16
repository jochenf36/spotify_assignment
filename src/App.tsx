import React, { useState, ChangeEvent } from 'react';
import styles from './App.module.css';
import { ArtistsOverview } from './Components/ArtistOverview';
import { AlbumsOverview } from './Components/AlbumsOverview';

import { useQuery } from '@apollo/client';
import { GET_ARTISTS, ArtistsVars, ArtistsData } from './gqls';
import { Spinner } from './Components/Spinner';
import { Artist } from './Common/types';

const DEFAULT_KEYWORD = '';

function App() {
  const [keyword, setKeyword] = useState(DEFAULT_KEYWORD);
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

  function handleSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSelectedArtists(0);
    setKeyword(event.target.value);
  }

  const ArtistsAndAlbums = () =>
    keyword.length > 0 ? (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ArtistsOverview
              artists={data.queryArtists}
              clickedArtist={changeArtist}
              selectedArtist={selectedArtists}
            />
            <br />

            <AlbumsOverview
              albums={data.queryArtists[selectedArtists]?.albums}
            />
          </>
        )}
      </>
    ) : null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Search Artists</h1>
        <input
          aria-label="searchInput"
          type="text"
          id="searchInput"
          name="searchInput"
          placeholder="Enter a keyword"
          className={styles.searchInput}
          value={keyword}
          onChange={handleSearchInput}
        />
      </header>
      <ArtistsAndAlbums />
    </div>
  );
}

export default App;
