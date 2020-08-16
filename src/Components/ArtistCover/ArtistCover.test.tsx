import React from 'react';
import { render } from '@testing-library/react';
import { ArtistCover } from './ArtistCover';
import { ArtistCoverProps } from '.';

const dummyArtistCoverProps: ArtistCoverProps = {
  id: '1',
  name: 'Red Hot Chili Peppers',
  image: 'https://i.scdn.co/image/ab67616d0000b27358406b3f1ac3ceaff7a64fef',
};

test('renders the title of the artist', () => {
  const { getByText } = render(<ArtistCover {...dummyArtistCoverProps} />);
  const linkElement = getByText(/Red Hot Chili Peppers/i);
  expect(linkElement).toBeInTheDocument();
});
