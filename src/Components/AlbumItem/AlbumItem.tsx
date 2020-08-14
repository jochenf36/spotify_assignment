import React from 'react';
import './AlbumItem.css';

export interface AlbumItemProps {
  name: string;
  image: string;
}

export const AlbumItem: React.FC<AlbumItemProps> = ({ name, image }) => (
  <li className="container">
    <img className="cover" src={image} alt={`${name}-cover`} />
    <span className="artist">{name}</span>
  </li>
);
