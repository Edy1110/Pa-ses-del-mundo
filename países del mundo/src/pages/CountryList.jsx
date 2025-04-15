import React from 'react';
import CountryCard from '../components/CountryCard';
import styles from './CountryList.module.css';

const CountryList = ({ countries, toggleFavorite, isFavorite }) => {
  return (
    <div className={styles.container}>
      <h2>Lista de Países</h2>
      <div className={styles.grid}>
        {countries && countries.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            toggleFavorite={toggleFavorite}
            isFavorite={isFavorite(country.cca3)}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryList;