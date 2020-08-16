import React from 'react';
import { render } from '@testing-library/react';
import { AlbumCover } from './AlbumCover';
import { AlbumCoverProps } from '.';

const dummyAlbumCoverProps: AlbumCoverProps = {
  id: '1',
  name: 'The Getaway',
  image: 'https://i.scdn.co/image/ab67616d0000b27358406b3f1ac3ceaff7a64fef',
};

test('renders the title of the album', () => {
  const { getByText } = render(<AlbumCover {...dummyAlbumCoverProps} />);
  const linkElement = getByText(/The Getaway/i);
  expect(linkElement).toBeInTheDocument();
});
