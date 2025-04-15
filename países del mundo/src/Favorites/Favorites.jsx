import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CountryCard from '../components/CountryCard';
import styles from '../Favorites/Favorites.module.css';

const Favorites = ({ favoriteCountries, toggleFavorite }) => {
  const favoriteCountriesCodes = favoriteCountries;
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all');

  if (loading) {
    return <p>Cargando países favoritos...</p>;
  }

  if (error) {
    return <p>Error al cargar los países: {error.message}</p>;
  }

  const favoriteCountryDetails = countries ? countries.filter(country =>
    favoriteCountriesCodes.includes(country.cca3)
  ) : [];

  if (favoriteCountryDetails.length === 0) {
    return (
      <div className={styles.container}>
        <h2>Países Favoritos</h2>
        <p>Aún no has añadido ningún país a favoritos.</p>
        <Link to="/"><button>Volver a la lista de países</button></Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Países Favoritos</h2>
      <div className={styles.grid}>
        {favoriteCountryDetails.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            toggleFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
      <Link to="/"><button>Volver a la lista de países</button></Link>
    </div>
  );
};

export default Favorites;