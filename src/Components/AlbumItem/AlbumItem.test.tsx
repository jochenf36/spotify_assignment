import React from 'react';
import { render } from '@testing-library/react';
import { AlbumItem } from './AlbumItem';
import { AlbumItemProps } from '.';

const dummyAlbumItemProps: AlbumItemProps = {
  name: 'Red Hot Chili Peppers',
  image: 'https://i.scdn.co/image/89bc3c14aa2b4f250033ffcf5f322b2a553d9331',
};

test('renders the title of the album', () => {
  const { getByText } = render(<AlbumItem {...dummyAlbumItemProps} />);
  const linkElement = getByText(/Red Hot Chili Peppers/i);
  expect(linkElement).toBeInTheDocument();
});
