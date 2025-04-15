import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './CountryDetailView.module.css'; 

const CountryDetailView = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${countryId}`);
        setCountry(response.data[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryId]);

  if (loading) {
    return <p>Cargando detalles del país...</p>;
  }

  if (error) {
    return <p>Error al cargar los detalles del país: {error.message}</p>;
  }

  if (!country) {
    return <p>País no encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <h2>{country.name.common}</h2>
      <img src={country.flags.svg} alt={`Bandera de ${country.name.common}`} width="200" />
      <p>Nombre Oficial: {country.name.official}</p>
      <p>Capital: {country.capital && country.capital[0]}</p>
      <p>Población: {country.population.toLocaleString()}</p>
      <p>Área: {country.area.toLocaleString()} km²</p>
      {country.currencies && (
        <div>
          <h3>Monedas:</h3>
          <ul>
            {Object.values(country.currencies).map((currency) => (
              <li key={currency.name}>
                {currency.name} ({currency.symbol})
              </li>
            ))}
          </ul>
        </div>
      )}
      {country.languages && (
        <div>
          <h3>Idiomas:</h3>
          <ul>
            {Object.values(country.languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </div>
      )}
      <Link to="/">Volver a la lista</Link>
    </div>
  );
};

export default CountryDetailView;