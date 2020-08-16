import { gql } from '@apollo/client';
import { Artist } from './App';

export interface ArtistsData {
  queryArtists: Artist[];
}

export interface ArtistsVars {
  name: string;
}
export const GET_ARTISTS = gql`
  query GetArtists($name: String!) {
    queryArtists(byName: $name) {
      name
      id
      image
      albums {
        name
        id
        image
        tracks {
          id
          name
        }
      }
    }
  }
`;
