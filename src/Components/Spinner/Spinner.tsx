import React from 'react';
import styles from './Spinner.module.css';
import icon from './assets/rings.svg';

export const Spinner: React.FC = () => (
  <div className={styles.container}>
    <img src={icon} alt="spinner" />
  </div>
);
