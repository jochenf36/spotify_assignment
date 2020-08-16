export interface Artist {
  id: string;
  name: string;
  image: string;
  albums: Album[];
}

export interface Album {
  id: string;
  name: string;
  image: string;
}
