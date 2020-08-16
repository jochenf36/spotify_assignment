import React from 'react';
import { render } from '@testing-library/react';
import { ArtistsOverview, ArtistsOverviewProps } from './ArtistsOverview';

const dummyArtistsOverviewProps: ArtistsOverviewProps = {
  artists: [
    {
      name: 'Red Hot Chili Peppers',
      id: '0L8ExT028jH3ddEcZwqJJ5',
      image: 'https://i.scdn.co/image/89bc3c14aa2b4f250033ffcf5f322b2a553d9331',
    },
    {
      name: 'Red Hot Chili Peppers Tribute Band',
      id: '4St65YtRYE8w73lrc1GNKM',
      image: 'https://i.scdn.co/image/ab67616d0000b273e6c65904b3bb6292be390d3f',
    },
    {
      name: 'Karaoke - Red Hot Chili Peppers',
      id: '5UW0S2FPTD5GtlAJTzcwbh',
      image: '',
    },
    {
      name:
        'Karaoke Soundtrack - Originally Performed By Red Hot Chili Peppers',
      id: '3bKexEgU1rVjIYcrp4vmAx',
      image: '',
    },
  ],
};

test('renders the list of artists', async () => {
  const { findAllByTestId } = render(
    <ArtistsOverview {...dummyArtistsOverviewProps} />
  );
  const artists = await findAllByTestId((x: string) => x.includes('artist'));
  expect(artists).toHaveLength(4);
});
