import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CountryCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid, faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons';

const CountryCard = ({ country, toggleFavorite, isFavorite }) => {
  const handleFavoriteClick = () => {
    toggleFavorite(country.cca3);
  };

  return (
    <div className={styles.card}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.svg} alt={`Bandera de ${country.name.common}`} width="100" />
      <p>Capital: {country.capital && country.capital[0]}</p>
      <div className={styles.actions}>
        <Link to={`/country/${country.cca3}`}>Ver Detalles</Link>
        <button
          onClick={handleFavoriteClick}
          className={`${styles.favoriteButton} ${isFavorite ? styles.isFavorite : ''}`}
        >
          <FontAwesomeIcon icon={isFavorite ? faHeartSolid : faHeartRegular} />
        </button>
      </div>
    </div>
  );
};

export default CountryCard;